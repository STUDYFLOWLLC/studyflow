/* eslint-disable @typescript-eslint/no-unused-vars */

import mutateCreateFlashcardStackReview, {
  mutateFlashcardStackReviewEndTime,
} from 'hooks/repetition/mutateReviews'
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

  // create locally
  mutateRepetitionDetails(
    {
      mutate: true,
      newRepetition: {
        ...repetitionDetails,
        FK_FlashcardStack: {
          ...repetitionDetails.FK_FlashcardStack,
          FK_FlashcardStackReviews: [
            { ...newReview, FK_FlashcardReviews: [] },
            ...repetitionDetails.FK_FlashcardStack.FK_FlashcardStackReviews,
          ],
        },
      },
    },
    {
      revalidate: false,
    },
  )

  setCreating(false)
}

export function finishReview(
  flashcardStackReviewId: string,
  repetitionDetails: Repetition | null,
  mutateRepetitionDetails: KeyedMutator<any>,
) {
  if (!repetitionDetails) return

  // mutate in backend
  mutateFlashcardStackReviewEndTime(
    flashcardStackReviewId,
    new Date().toISOString(),
  )

  // mutate locally
  mutateRepetitionDetails(
    {
      mutate: true,
      newRepetition: {
        ...repetitionDetails,
        FK_FlashcardStack: {
          ...repetitionDetails.FK_FlashcardStack,
          FK_FlashcardStackReviews:
            repetitionDetails.FK_FlashcardStack.FK_FlashcardStackReviews.map(
              (flashcardStackReview) => {
                if (
                  flashcardStackReview.FlashcardStackReviewID ===
                  flashcardStackReviewId
                ) {
                  return {
                    ...flashcardStackReview,
                    EndTime: new Date().toISOString(),
                  }
                }
                return flashcardStackReview
              },
            ),
        },
      },
    },
    { revalidate: false },
  )
}
