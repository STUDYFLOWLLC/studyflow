/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */

import { FlowDetail } from 'hooks/flows/useFlowDetails'
import makeRepetition from 'hooks/repetition/makeRepetition'
import { deleteManyTask } from 'hooks/tasks/mutateTask'
import { KeyedMutator } from 'swr'
import { Repetition, RepetitionType } from 'types/Repetition'
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
  repetitionDetails: Repetition | null,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
) {
  if (!flowDetails || !repetitionDetails) return

  mutateDeleteRepetition(repetitionDetails.RepetitionID)

  deleteManyTask(repetitionDetails.FK_Tasks.map((task) => task.TaskID))

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
