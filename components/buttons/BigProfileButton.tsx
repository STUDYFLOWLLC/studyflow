import { Menu, Transition } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import ProfileButtonDropdown from 'components/dropdowns/ProfileButtonDropdown'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import getFirstAndLastInitialFromName from 'utils/getFirstAndLastIntial'

export interface Props {
  name: string
  username: string
  pfpLink: string
  loading: boolean
}

export default function BigProfileButton({
  name,
  username,
  pfpLink,
  loading,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="px-2 mt-1 relative inline-block text-left">
      <div>
        <Menu.Button
          className={classNames(
            {
              'focus:ring-offset-gray-100  hover:bg-gray-200':
                theme === 'light',
            },
            {
              'focus:ring-offset-slate-700  hover:bg-slate-700':
                theme === 'dark',
            },
            'transition-all group w-full rounded-md pl-2 pr-1 py-2 text-sm text-left font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
          )}
        >
          <span className="flex w-full justify-between items-center">
            <span className="flex min-w-0 mr-3 items-center justify-between space-x-3">
              {!loading ? (
                <div className="avatar placeholder online">
                  <div
                    className={classNames(
                      { 'bg-stone-200': theme === 'light' },
                      { 'bg-slate-700': theme === 'dark' },
                      ' w-10 h-10 rounded-full flex-shrink-0',
                    )}
                  >
                    {pfpLink ? (
                      <img
                        className="rounded-full flex-shrink-0"
                        src={pfpLink}
                        alt="the user's avatar"
                      />
                    ) : (
                      <span className="text-lg sm:text-xl">
                        {getFirstAndLastInitialFromName(name)}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <Skeleton className="w-10 h-10" circle />
              )}
              <span className="flex-1 flex flex-col min-w-0">
                {!loading ? (
                  <>
                    <span className="text-sm font-medium truncate">
                      {name || 'Welcome'}
                    </span>
                    <span
                      className={classNames(
                        { 'text-gray-500': theme === 'light' },
                        'text-sm truncate',
                      )}
                    >
                      @{username || 'studyflow'}
                    </span>
                  </>
                ) : (
                  <>
                    <Skeleton width={110} />
                    <Skeleton width={90} />
                  </>
                )}
              </span>
            </span>
            <ChevronUpDownIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-400"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-400"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            { 'bg-white divide-gray-200': theme === 'light' },
            { 'bg-slate-700 divide-gray-200': theme === 'dark' },
            'z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg focus:outline-none',
          )}
        >
          <ProfileButtonDropdown />
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
