import { CheckIcon, TrashIcon, ViewGridIcon } from '@heroicons/react/outline'
import EnterFront from 'components/Repetition/Flashcards/EnterFront'
import MainSpinner from 'components/spinners/MainSpinner'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import { useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import { Flashcard } from 'types/Repetition'
import EnterBack from '../EnterBack'

interface Props {
  flashcard: Flashcard
  flashcardStackId: string
}

export default function EnterFlashcard({ flashcard, flashcardStackId }: Props) {
  const { flashcardStack, mutateFlashcardStack } =
    useFlashcardStack(flashcardStackId)

  const [saving, setSaving] = useState(false)

  return (
    <div className="flex w-full justify-between px-2 py-2 my-4 border rounded-md relative">
      <p className="absolute top-0 left-2 m-0 p-0 font-semibold">
        {flashcard.Position}
      </p>
      <EnterFront
        flashcard={flashcard}
        setSaving={setSaving}
        flashcardStack={flashcardStack}
        mutateFlashcardStack={mutateFlashcardStack}
      />
      <EnterBack
        flashcard={flashcard}
        setSaving={setSaving}
        flashcardStack={flashcardStack}
        mutateFlashcardStack={mutateFlashcardStack}
      />
      <div className="absolute top-0.5 right-1 flex">
        <ViewGridIcon className="text-info cursor-grab w-5 h-5  m-0 p-0" />
        {!saving ? (
          <CheckIcon className="text-info cursor-grab mx-2 w-5 h-5  m-0 p-0" />
        ) : (
          <span className="mx-2">
            <MainSpinner size={SpinnerSizes.small} />
          </span>
        )}
        <TrashIcon className="text-info cursor-pointer  w-5 h-5   m-0 p-0" />
      </div>
    </div>
  )
}
