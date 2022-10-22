import { Transition } from '@headlessui/react'
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline'
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
        <Transition
          appear
          show
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
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
              'transition-all w-7 h-7 p-1 cursor-pointer rounded',
            )}
            onClick={() => setShowDashBar(true)}
          />
        </Transition>
      </div>
    )
  }

  return (
    <div className="block">
      <Transition
        appear
        show
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
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
            'transition-all w-7 h-7 p-1 mb-1 cursor-pointer rounded',
          )}
          onClick={() => setShowDashBar(false)}
        />
      </Transition>
    </div>
  )
}
