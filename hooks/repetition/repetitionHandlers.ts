/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */

import makeRepetition from 'hooks/repetition/makeRepetition'
import { KeyedMutator } from 'swr'
import { RepetitionType } from 'types/Repetition'

export async function createRepetition(
  flowId: string,
  flowTitle: string | undefined,
  repetitionType: RepetitionType,
  mutateRepetitionDetails: KeyedMutator<any>,
  setCreating: (creating: boolean) => void,
  setCreatingType?: (creatingType: RepetitionType | null) => void,
  setCurrentRepetition?: (currentRepetitionId: string | null) => void,
) {
  if (!flowTitle) return

  setCreating(true)
  if (setCreatingType) setCreatingType(repetitionType)

  const repetition = await makeRepetition(flowId, flowTitle, repetitionType)

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

  setCreating(false)
  if (setCurrentRepetition) setCurrentRepetition(repetition.RepetitionID)
  if (setCreatingType) setCreatingType(null)
}
