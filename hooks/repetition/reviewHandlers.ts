/* eslint-disable @typescript-eslint/no-unused-vars */

import mutateCreateFlashcardStackReview from 'hooks/repetition/mutateReviews'
import { KeyedMutator } from 'swr'
import { Repetition } from 'types/Repetition'

export default async function createFlashcardStackReview(
  repetitionDetails: Repetition | null,
  mutateRepetitionDetails: KeyedMutator<any>,
  setCreating: (creating: boolean) => void,
) {
  if (!repetitionDetails) return

  setCreating(true)

  // create in backend
  const newReview = await mutateCreateFlashcardStackReview(
    repetitionDetails.FK_FlashcardStackID,
  )

  console.log(newReview)

  // create locally
  mutateRepetitionDetails(
    {
      mutate: true,
      newRepetition: {
        ...repetitionDetails,
        FK_FlashcardStack: {
          ...repetitionDetails.FK_FlashcardStack,
          FK_FlashcardStackReviews: [
            ...repetitionDetails.FK_FlashcardStack.FK_FlashcardStackReviews,
            { ...newReview, FK_FlashcardReviews: [] },
          ],
        },
      },
    },
    {
      revalidate: false,
    },
  )

  console.log(repetitionDetails)

  setCreating(false)
}
