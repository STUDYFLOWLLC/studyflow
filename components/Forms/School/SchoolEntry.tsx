/* eslint-disable @typescript-eslint/no-explicit-any, react/self-closing-comp */

import { Combobox } from '@headlessui/react'
import { BadgeCheckIcon, CheckIcon } from '@heroicons/react/outline'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  school: any
}

export default function SchoolEntry({ school }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Combobox.Option
      value={school}
      className={({ active }) =>
        classnames(
          {
            'bg-primary text-gray-100': active && theme === 'light',
          },
          {
            'bg-primary text-slate-700': active && theme === 'dark',
          },
          { 'text-gray-700': !active && theme === 'light' },
          { 'bg-slate-700': !active && theme === 'dark' },
          'relative cursor-default select-none py-2 pl-3 pr-9 text-lg',
        )
      }
    >
      {({ active, selected }) => (
        <>
          <div className="flex items-center justify-between">
            <span
              className={classnames(
                'ml-3 truncate',
                selected ? 'font-semibold' : '',
              )}
            >
              {school.Name}
            </span>
            {school.HasClassSupport && (
              <BadgeCheckIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </div>

          {selected && (
            <span
              className={classnames(
                'absolute inset-y-0 right-0 flex items-center pr-4',
                active ? 'text-white' : 'text-primary-600',
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
        </>
      )}
    </Combobox.Option>
  )
}
