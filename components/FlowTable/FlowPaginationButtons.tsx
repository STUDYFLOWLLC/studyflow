import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  index: number
  setIndex: (index: number) => void
  flowLength: number
}

export default function FlowPaginationButtons({
  index,
  setIndex,
  flowLength,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex w-72 justify-center mx-auto">
      {index !== 0 && (
        <button
          type="button"
          disabled={index === 0}
          className={classNames(
            {
              'bg-gray-100 hover:bg-gray-200 border-gray-200':
                theme === 'light',
            },
            {
              'bg-slate-700 hover:bg-slate-600 text-white': theme === 'dark',
            },
            { invisible: index === 0 },
            'flex items-center alex-button transition-all border mx-0 my-2',
          )}
          onClick={() => setIndex(index - 1)}
        >
          <ArrowCircleLeftIcon className="w-4 h-4" />
          <span className="mr-2">Prev</span>{' '}
        </button>
      )}
      <button
        type="button"
        className={classNames(
          {
            'bg-gray-100 hover:bg-gray-200 border-gray-200': theme === 'light',
          },
          { 'bg-slate-700 hover:bg-slate-600 text-white': theme === 'dark' },
          'flex items-center alex-button transition-all border m-2',
        )}
      >
        {index + 1}
      </button>
      <button
        disabled={flowLength !== 8}
        type="button"
        className={classNames(
          {
            'bg-gray-100 hover:bg-gray-200 border-gray-200': theme === 'light',
          },
          { 'bg-slate-700 hover:bg-slate-600 text-white': theme === 'dark' },
          { invisible: flowLength !== 8 },
          'flex items-center alex-button transition-all border mx-0 my-2',
        )}
        onClick={() => setIndex(index + 1)}
      >
        <span className="mr-2">Next</span>{' '}
        <ArrowCircleRightIcon className="w-4 h-4" />
      </button>
    </div>
  )
}
