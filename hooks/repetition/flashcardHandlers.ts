/* eslint-disable import/prefer-default-export */

import {
  mutateFlashcardBack,
  mutateFlashcardFront,
} from 'hooks/repetition/mutateFlashcard'
import { KeyedMutator } from 'swr'
import { FlashcardStack } from 'types/Repetition'

export async function changeFront(
  flashcardId: string,
  newFront: string,
  flashcardStack: FlashcardStack | null,
  mutateFlashcardStack: KeyedMutator<any>,
  setSaving: (saving: boolean) => void,
) {
  if (!flashcardStack) return

  setSaving(true)

  // mutate locally
  mutateFlashcardStack(
    {
      mutate: true,
      mutatedFlashcardStack: {
        ...flashcardStack,
        FK_Flashcards: flashcardStack.FK_Flashcards.map((flashcard) => {
          if (flashcard.FlashcardID === flashcardId) {
            return {
              ...flashcard,
              Front: newFront,
            }
          }
          return flashcard
        }),
      },
    },
    {
      revalidate: false,
    },
  )

  await mutateFlashcardFront(flashcardId, newFront)

  setSaving(false)
}

export async function changeBack(
  flashcardId: string,
  newBack: string,
  flashcardStack: FlashcardStack | null,
  mutateFlashcardStack: KeyedMutator<any>,
  setSaving: (saving: boolean) => void,
) {
  if (!flashcardStack) return

  setSaving(true)

  // mutate locally
  mutateFlashcardStack(
    {
      mutate: true,
      mutatedFlashcardStack: {
        ...flashcardStack,
        FK_Flashcards: flashcardStack.FK_Flashcards.map((flashcard) => {
          if (flashcard.FlashcardID === flashcardId) {
            return {
              ...flashcard,
              Back: newBack,
            }
          }
          return flashcard
        }),
      },
    },
    {
      revalidate: false,
    },
  )

  await mutateFlashcardBack(flashcardId, newBack)

  setSaving(false)
}
