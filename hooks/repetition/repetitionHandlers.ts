/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */

import { FlowDetail } from 'hooks/flows/useFlowDetails'
import makeRepetition from 'hooks/repetition/makeRepetition'
import { KeyedMutator } from 'swr'
import { RepetitionType } from 'types/Repetition'
import { mutateDeleteRepetition } from './mutateRepetition'

export async function createRepetition(
  repetitionId: string,
  repetitionType: RepetitionType,
  mutateRepetitionDetails: KeyedMutator<any>,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
  setCreating: (creating: boolean) => void,
  setCreatingType?: (creatingType: RepetitionType | null) => void,
) {
  if (!flowDetails) return

  setCreating(true)
  if (setCreatingType) setCreatingType(repetitionType)

  const repetition = await makeRepetition(
    repetitionId,
    flowDetails.FlowID,
    flowDetails.Title,
    repetitionType,
  )

  if (!repetition) return

  // mutate locally
  mutateRepetitionDetails(
    {
      mutate: true,
      newRepetition: repetition,
    },
    {
      revalidate: false,
    },
  )
  mutateFlowDetails(
    {
      mutate: true,
      mutatedFlow: {
        ...flowDetails,
        FK_Repetition: {
          RepetitionID: repetition.RepetitionID,
        },
      },
    },
    {
      revalidate: false,
    },
  )

  setCreating(false)
  if (setCreatingType) setCreatingType(null)
}

export async function deleteRepetition(
  repetitionId: string,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
) {
  if (!flowDetails) return

  mutateDeleteRepetition(repetitionId)

  mutateFlowDetails(
    {
      mutate: true,
      mutatedFlow: {
        ...flowDetails,
        FK_Repetition: undefined,
      },
    },
    {
      revalidate: false,
    },
  )
}
