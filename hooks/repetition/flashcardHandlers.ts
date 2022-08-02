/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */

import {
  mutateAddFlashcard,
  mutateDeleteFlashcard,
  mutateFlashcardBack,
  mutateFlashcardFront,
} from 'hooks/repetition/mutateFlashcard'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import { FlashcardStack } from 'types/Repetition'
import { v4 as uuid } from 'uuid'

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

export async function deleteFlashcard(
  flashcardId: string,
  flashcardStack: FlashcardStack | null,
  mutateFlashcardStack: KeyedMutator<any>,
) {
  if (!flashcardStack) return

  // mutate in backend
  mutateDeleteFlashcard(flashcardId)

  // mutate locally
  mutateFlashcardStack(
    {
      mutate: true,
      mutatedFlashcardStack: {
        ...flashcardStack,
        FK_Flashcards: flashcardStack.FK_Flashcards.filter(
          (flashcard) => flashcard.FlashcardID !== flashcardId,
        ),
      },
    },
    {
      revalidate: false,
    },
  )

  toast.success('Flashcard deleted')
}

export async function addFlashcard(
  flashcardStack: FlashcardStack | null,
  mutateFlashcardStack: KeyedMutator<any>,
  setCreating: (creating: boolean) => void,
) {
  if (!flashcardStack) return

  setCreating(true)

  const newId = uuid()
  const newPosition =
    flashcardStack.FK_Flashcards[flashcardStack.FK_Flashcards.length - 1]
      .Position + 1
  // mutate in backend
  await mutateAddFlashcard(newId, flashcardStack.FlashcardStackID, newPosition)

  // mutate locally
  mutateFlashcardStack(
    {
      mutate: true,
      mutatedFlashcardStack: {
        ...flashcardStack,
        FK_Flashcards: flashcardStack.FK_Flashcards.concat([
          {
            FlashcardID: newId,
            CreatedTime: new Date().toISOString(),
            FK_FlashcardStackID: flashcardStack.FlashcardStackID,
            Position: flashcardStack.FK_Flashcards.length,
            Front: '',
            Back: '',
            FK_FlashcardReviews: [],
          },
        ]),
      },
    },
    {
      revalidate: false,
    },
  )

  setCreating(false)

  toast.success('Flashcard added')
}
