import { PlusIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import createFlashcardStack from 'utils/repetition/flashcards/flashcardStackHandlers'

interface Props {
  flowId: string
  editing: string
  setEditing: (editing: string) => void
}

export default function AddFlashcardStack({
  flowId,
  editing,
  setEditing,
}: Props) {
  const { theme } = useTheme()
  const { mutateFlashcardStack } = useFlashcardStack(editing)
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)

  const [mounted, setMounted] = useState(false)
  const [showSeduce, setShowSeduce] = useState(false)
  const [creating, setCreating] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className={classNames(
        { 'cursor-pointer': showSeduce },
        'flex items-center mt-2',
      )}
      onClick={async () => {
        const newFlash = await createFlashcardStack(
          flowId,
          mutateFlashcardStack,
          flowDetails,
          mutateFlowDetails,
          setCreating,
        )
        if (newFlash) setEditing(newFlash)
      }}
      onKeyDown={async () => {
        const newFlash = await createFlashcardStack(
          flowId,
          mutateFlashcardStack,
          flowDetails,
          mutateFlowDetails,
          setCreating,
        )
        if (newFlash) setEditing(newFlash)
      }}
      onMouseEnter={() => setShowSeduce(true)}
      onMouseLeave={() => setShowSeduce(false)}
    >
      {!creating ? (
        <span
          className={classNames(
            {
              'text-white border rounded-full border-transparent bg-black':
                showSeduce && theme === 'light',
            },
            {
              'text-black border rounded-full border-transparent bg-white':
                showSeduce && theme === 'dark',
            },
            'w-5 h-5 mr-3 font-thin',
          )}
        >
          <PlusIcon />
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
        Add Flashcard Stack
      </span>
    </div>
  )
}
