import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Props {
  direction: 'hide' | 'show'
  setShowDashBar: Dispatch<SetStateAction<boolean>>
}

export default function HideButton({ direction, setShowDashBar }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (direction === 'show') {
    return (
      <div className="hidden lg:block">
        <ChevronDoubleRightIcon
          className={classNames(
            {
              'text-gray-500 hover:text-gray-600 hover:bg-gray-200':
                theme === 'light',
            },
            {
              'text-gray-400 hover:text-gray-300 hover:bg-slate-700':
                theme === 'dark',
            },
            'w-7 h-7 p-1 cursor-pointer rounded',
          )}
          onClick={() => setShowDashBar(true)}
        />
      </div>
    )
  }

  return (
    <div className="block">
      <ChevronDoubleLeftIcon
        className={classNames(
          {
            'text-gray-500 hover:text-gray-600 hover:bg-gray-200':
              theme === 'light',
          },
          {
            'text-gray-400 hover:text-gray-300 hover:bg-slate-700':
              theme === 'dark',
          },
          'w-7 h-7 p-1 mb-1 cursor-pointer rounded',
        )}
        onClick={() => setShowDashBar(false)}
      />
    </div>
  )
}
