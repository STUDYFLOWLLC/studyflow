import { PlusIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  flowId: string
  setCurrentRepetition: (repetitionId: string | null) => void
}

export default function AddFlashcardStack({
  flowId,
  setCurrentRepetition,
}: Props) {
  const { theme } = useTheme()
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)

  const [mounted, setMounted] = useState(false)
  const [showSeduce, setShowSeduce] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className={classNames(
        { 'cursor-pointer': showSeduce },
        'flex items-center mb-2',
      )}
      onClick={() => setCurrentRepetition('')}
      onKeyDown={() => setCurrentRepetition('')}
      onMouseEnter={() => setShowSeduce(true)}
      onMouseLeave={() => setShowSeduce(false)}
    >
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
      <span
        className={classNames({
          'text-gray-400': !showSeduce,
        })}
      >
        Add Repetition
      </span>
    </div>
  )
}
