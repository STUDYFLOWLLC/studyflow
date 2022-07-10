import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import ProfileButtonDropdown from 'components/dropdowns/ProfileButtonDropdown'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import getFirstAndLastInitialFromName from 'utils/getFirstAndLastIntial'

interface Props {
  name: string
  pfpLink: string
}

export default function SmallProfileButton({ name, pfpLink }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button
          className={classNames(
            { 'bg-stone-200': theme === 'light' },
            { 'bg-slate-700': theme === 'dark' },
            'max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary',
          )}
        >
          <div className="avatar placeholder online">
            <div className="w-11 h-11 rounded-full flex-shrink-0">
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
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            {
              'bg-white divide-gray-200 ring-1 ring-black ring-opacity-5':
                theme === 'light',
            },
            { 'bg-slate-700 divide-gray-200 ring-0': theme === 'dark' },
            'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg focus:outline-none',
          )}
        >
          <ProfileButtonDropdown />
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
