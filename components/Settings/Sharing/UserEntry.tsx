/* eslint-disable @typescript-eslint/no-explicit-any, react/self-closing-comp */

import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { PublicUser } from 'types/Social'
import ProfilePicOrPlaceholder from './ProfilePicOrPlaceholder'

interface Props {
  displayUser: PublicUser
}

export default function UserEntry({ displayUser }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Combobox.Option
      value={displayUser}
      className={({ active }) =>
        classNames(
          {
            'bg-gray-100': active && theme === 'light',
          },
          {
            'bg-slate-600': active && theme === 'dark',
          },
          { 'text-gray-700': !active && theme === 'light' },
          { 'bg-slate-700': !active && theme === 'dark' },
          'w-72 select-none cursor-pointer py-1 text-sm',
        )
      }
    >
      {({ active, selected }) => (
        <>
          <div className="flex items-center">
            <ProfilePicOrPlaceholder
              link={displayUser.ProfilePictureLink}
              name={displayUser.Name}
            />
            <span
              className={classNames(
                { 'font-semibold': selected },
                'truncate text-md ml-3',
              )}
            >
              {displayUser.Name}
            </span>
            {displayUser.FK_School.Name && (
              <span
                className={classNames(
                  { 'font-semibold': selected },
                  'truncate text-xs ml-1',
                )}
              >
                at {displayUser.FK_School.Name}
              </span>
            )}
          </div>

          {selected && (
            <span
              className={classNames(
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
