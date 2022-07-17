import { Popover } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  disabled?: boolean
}

export default function PlusButton({ disabled }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (disabled) {
    return (
      <button
        type="button"
        disabled={disabled}
        className="flex items-center p-1 rounded-md focus:outline-none"
      >
        <PlusIcon
          className={classNames(
            { 'text-gray-800': theme === 'light' },
            { 'text-gray-100': theme === 'dark' },
            'w-5 h-5',
          )}
        />
      </button>
    )
  }
  return (
    <Popover.Button
      type="button"
      className="text-gray-800 flex items-center p-1 rounded-md border border-transparent hover:border-gray-300 hover:shadow-sm focus:outline-none"
    >
      <PlusIcon
        className={classNames(
          { 'text-gray-800': theme === 'light' },
          { 'text-gray-100': theme === 'dark' },
          'w-5 h-5',
        )}
      />
    </Popover.Button>
  )
}
