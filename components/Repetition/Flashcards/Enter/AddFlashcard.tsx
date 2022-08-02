import { PlusIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import { addFlashcard } from 'hooks/repetition/flashcardHandlers'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import { useState } from 'react'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  flashcardStackId: string
}

export default function AddFlashcardStack({ flashcardStackId }: Props) {
  const { flashcardStack, mutateFlashcardStack } =
    useFlashcardStack(flashcardStackId)

  const [showSeduce, setShowSeduce] = useState(false)
  const [creating, setCreating] = useState(false)

  return (
    <div
      className={classNames(
        { 'cursor-pointer': showSeduce },
        'flex items-center mt-2 px-2',
      )}
      onClick={() =>
        addFlashcard(flashcardStack, mutateFlashcardStack, setCreating)
      }
      onKeyDown={() =>
        addFlashcard(flashcardStack, mutateFlashcardStack, setCreating)
      }
      onMouseEnter={() => setShowSeduce(true)}
      onMouseLeave={() => setShowSeduce(false)}
    >
      {!creating ? (
        <span
          className={classNames(
            {
              'text-white border rounded-full border-transparent bg-black':
                showSeduce,
            },
            'w-5 h-5 mr-3 font-thin',
          )}
        >
          <PlusIcon className="w-5 h-5" />
        </span>
      ) : (
        <span className="mr-3">
          <MainSpinner size={SpinnerSizes.small} />
        </span>
      )}
      <span
        className={classNames({
          'text-gray-400': !showSeduce,
        })}
      >
        Add Flashcard
      </span>
    </div>
  )
}
