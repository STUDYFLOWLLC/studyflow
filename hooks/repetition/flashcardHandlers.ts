/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */

import {
  mutateAddFlashcard,
  mutateDeleteFlashcard,
  mutateFlashcardBack,
  mutateFlashcardBackImageUrl,
  mutateFlashcardFront,
  mutateFlashcardFrontImageUrl,
  mutateFlashcardPosition,
} from 'hooks/repetition/mutateFlashcard'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import { FlashcardStack } from 'types/Repetition'
import { supabase } from 'utils/supabase'
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

export async function changeFrontImage(
  flashcardId: string,
  file: File | undefined,
  flashcardStack: FlashcardStack | null,
  mutateFlashcardStack: KeyedMutator<any>,
) {
  if (!file) return
  if (!flashcardStack) return

  const fileId = uuid()
  const { data, error } = await supabase.storage
    .from('flashcard')
    .upload(`${flashcardStack.FlashcardStackID}/${flashcardId}/${fileId}`, file)

  if (data) {
    const link = `https://afmrynysmeogummgkkrb.supabase.co/storage/v1/object/public/${data.Key}`
    await mutateFlashcardFrontImageUrl(flashcardId, link)
    mutateFlashcardStack(
      {
        mutate: true,
        mutatedFlashcardStack: {
          ...flashcardStack,
          FK_Flashcards: flashcardStack.FK_Flashcards.map((flashcard) => {
            if (flashcard.FlashcardID === flashcardId) {
              return {
                ...flashcard,
                FrontImageUrl: link,
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
  }
}

export async function removeFlashcardFrontImage(
  flashcardId: string,
  flashcardStack: FlashcardStack | null,
  mutateFlashcardStack: KeyedMutator<any>,
) {
  if (!flashcardStack) return

  mutateFlashcardFrontImageUrl(flashcardId, '')

  mutateFlashcardStack(
    {
      mutate: true,
      mutatedFlashcardStack: {
        ...flashcardStack,
        FK_Flashcards: flashcardStack.FK_Flashcards.map((flashcard) => {
          if (flashcard.FlashcardID === flashcardId) {
            return {
              ...flashcard,
              FrontImageUrl: '',
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

export async function changeBackImage(
  flashcardId: string,
  file: File | undefined,
  flashcardStack: FlashcardStack | null,
  mutateFlashcardStack: KeyedMutator<any>,
) {
  if (!file) return
  if (!flashcardStack) return

  const fileId = uuid()
  const { data, error } = await supabase.storage
    .from('flashcard')
    .upload(`${flashcardStack.FlashcardStackID}/${flashcardId}/${fileId}`, file)

  if (data) {
    const link = `https://afmrynysmeogummgkkrb.supabase.co/storage/v1/object/public/${data.Key}`
    await mutateFlashcardBackImageUrl(flashcardId, link)
    mutateFlashcardStack(
      {
        mutate: true,
        mutatedFlashcardStack: {
          ...flashcardStack,
          FK_Flashcards: flashcardStack.FK_Flashcards.map((flashcard) => {
            if (flashcard.FlashcardID === flashcardId) {
              return {
                ...flashcard,
                BackImageUrl: link,
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
  }
}

export async function removeFlashcardBackImage(
  flashcardId: string,
  flashcardStack: FlashcardStack | null,
  mutateFlashcardStack: KeyedMutator<any>,
) {
  if (!flashcardStack) return

  mutateFlashcardBackImageUrl(flashcardId, '')

  mutateFlashcardStack(
    {
      mutate: true,
      mutatedFlashcardStack: {
        ...flashcardStack,
        FK_Flashcards: flashcardStack.FK_Flashcards.map((flashcard) => {
          if (flashcard.FlashcardID === flashcardId) {
            return {
              ...flashcard,
              BackImageUrl: '',
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

export async function swapFlashcards(
  upperIndex: number,
  flashcardStack: FlashcardStack | null,
  mutateFlashcardStack: KeyedMutator<any>,
) {
  if (!flashcardStack) return

  // mutate in backend
  const upper = structuredClone(flashcardStack.FK_Flashcards[upperIndex])
  const lower = structuredClone(flashcardStack.FK_Flashcards[upperIndex + 1])

  mutateFlashcardPosition(upper.FlashcardID, lower.Position)
  mutateFlashcardPosition(lower.FlashcardID, upper.Position)

  const copy = [...flashcardStack.FK_Flashcards]
  copy[upperIndex] = { ...lower, Position: upper.Position }
  copy[upperIndex + 1] = { ...upper, Position: lower.Position }

  // mutate locally
  mutateFlashcardStack(
    {
      mutate: true,
      mutatedFlashcardStack: {
        ...flashcardStack,
        FK_Flashcards: copy,
      },
    },
    {
      revalidate: false,
    },
  )
}
