import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import ProfileButtonMenuItem from 'components/buttons/ProfileButtonMenuItem'
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
            'max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
          )}
        >
          <div className="avatar placeholder online">
            <div className="w-10 h-10 rounded-full flex-shrink-0">
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
            'origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg  divide-y divide-gray-200 focus:outline-none',
          )}
        >
          <div>
            <ProfileButtonMenuItem name="View Profile" href="#" roundedT />
            <ProfileButtonMenuItem name="Settings" href="#" />
            <ProfileButtonMenuItem name="Dark" href="#" />
          </div>
          <div>
            <ProfileButtonMenuItem name="Get Desktop App" href="#" />
            <ProfileButtonMenuItem name="Support" href="#" />
          </div>
          <div>
            <ProfileButtonMenuItem name="Logout" href="#" roundedB />
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
