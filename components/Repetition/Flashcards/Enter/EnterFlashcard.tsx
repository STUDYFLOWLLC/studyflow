import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  CheckIcon,
  TrashIcon,
} from '@heroicons/react/outline'
import EnterFront from 'components/Repetition/Flashcards/Enter/EnterFront'
import MainSpinner from 'components/spinners/MainSpinner'
import {
  deleteFlashcard,
  swapFlashcards,
} from 'hooks/repetition/flashcardHandlers'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import { useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import { Flashcard } from 'types/Repetition'
import EnterBack from './EnterBack'

interface Props {
  flashcard: Flashcard
  flashcardStackId: string
}

export default function EnterFlashcard({ flashcard, flashcardStackId }: Props) {
  const { flashcardStack, mutateFlashcardStack } =
    useFlashcardStack(flashcardStackId)

  const [saving, setSaving] = useState(false)

  const index = (flashcardStack?.FK_Flashcards || []).indexOf(flashcard) + 1

  return (
    <div className="flex flex-col w-full justify-between px-3 pt-1 pb-2 my-4 border rounded-md relative">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <p className="m-0 mr-2 p-0 font-semibold">{index}</p>
          {index !== 1 && (
            <ArrowSmUpIcon
              className="cursor-pointer text-info w-5 h-5  m-0 p-0"
              onClick={() =>
                swapFlashcards(index - 2, flashcardStack, mutateFlashcardStack)
              }
              onKeyDown={() =>
                swapFlashcards(index - 2, flashcardStack, mutateFlashcardStack)
              }
            />
          )}
          {index !== flashcardStack?.FK_Flashcards.length && (
            <ArrowSmDownIcon
              className="cursor-pointer text-info w-5 h-5  m-0 p-0"
              onClick={() =>
                swapFlashcards(index - 1, flashcardStack, mutateFlashcardStack)
              }
              onKeyDown={() =>
                swapFlashcards(index - 1, flashcardStack, mutateFlashcardStack)
              }
            />
          )}
        </div>
        <div className="flex items-center pr-2">
          {!saving ? (
            <CheckIcon className="text-info mx-2 w-5 h-5  m-0 p-0" />
          ) : (
            <span className="mx-2">
              <MainSpinner size={SpinnerSizes.small} />
            </span>
          )}
          <TrashIcon
            className="text-info cursor-pointer w-5 h-5 m-0 p-0"
            onClick={() =>
              deleteFlashcard(
                flashcard.FlashcardID,
                flashcardStack,
                mutateFlashcardStack,
              )
            }
            onKeyDown={() =>
              deleteFlashcard(
                flashcard.FlashcardID,
                flashcardStack,
                mutateFlashcardStack,
              )
            }
          />
        </div>
      </div>

      <div className="flex justify-between">
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
      </div>
    </div>
  )
}
