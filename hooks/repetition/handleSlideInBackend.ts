/* eslint-disable no-nested-ternary */
import { mutateCreateFlashcardReview } from 'hooks/repetition/mutateReviews'
import { KeyedMutator } from 'swr'
import { FlashcardProps } from 'types/Flashcards'
import { FlashcardStack, FlashcardStatus, Repetition } from 'types/Repetition'
import { SlideDirection } from 'utils/repetition/flashcards/handleSlide'
import { v4 as uuid } from 'uuid'

export default function handleSlideInBackend(
  direction: SlideDirection,
  cards: FlashcardProps[],
  current: number,
  flashcardStack: FlashcardStack,
  mutateFlashcardStack: KeyedMutator<any>,
  repetitionDetails: Repetition,
  mutateRepetitionDetails: KeyedMutator<any>,
) {
  const currentStackReview =
    repetitionDetails.FK_FlashcardStack.FK_FlashcardStackReviews[0]

  if (currentStackReview.EndTime) return

  const currentFlash = flashcardStack.FK_Flashcards[cards.length - 1 - current]
  const status =
    direction === SlideDirection.RIGHT
      ? FlashcardStatus.CORRECT
      : direction === SlideDirection.LEFT
      ? FlashcardStatus.INCORRECT
      : FlashcardStatus.NEUTRAL

  // mutate in backend
  const newId = uuid()
  mutateCreateFlashcardReview(
    currentFlash.FlashcardID,
    status,
    newId,
    currentStackReview.FlashcardStackReviewID,
  )

  const artificialReview = {
    FlashcardReviewID: newId,
    CreatedTime: new Date().toISOString(),
    FK_FlashcardID: currentFlash.FlashcardID,
    Status: status,
  }
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
              (stackReview) => {
                if (
                  stackReview.FlashcardStackReviewID ===
                  currentStackReview.FlashcardStackReviewID
                ) {
                  return {
                    ...stackReview,
                    FK_FlashcardReviews: [
                      artificialReview,
                      ...stackReview.FK_FlashcardReviews,
                    ],
                  }
                }
                return stackReview
              },
            ),
        },
      },
    },
    {
      revalidate: false,
    },
  )
  mutateFlashcardStack({
    mutate: true,
    mutatedFlashcardStack: {
      ...flashcardStack,
      FK_Flashcards: flashcardStack.FK_Flashcards.map((flashcard) => {
        if (flashcard.FlashcardID === currentFlash.FlashcardID) {
          return {
            ...flashcard,
            FK_FlashcardReviews: [
              artificialReview,
              ...flashcard.FK_FlashcardReviews,
            ],
          }
        }
        return flashcard
      }),
    },
  })
}
