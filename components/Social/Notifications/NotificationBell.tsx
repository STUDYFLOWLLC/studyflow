import { Menu, Transition } from '@headlessui/react'
import { BadgeCheckIcon, BellIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import FriendRequestIncoming from './FriendRequestIncoming'

export default function NotificationBell() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { friends, friendsLoading } = useFriends(userDetails?.UserID)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className={classNames(
          {
            'hover:bg-gray-50 hover:border-gray-300': theme === 'light',
          },
          {
            'hover:bg-slate-600 hover:border-slate-400': theme === 'dark',
          },
          'relative flex items-center font-light m-0 mr-2 text-xl px-2 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
        )}
      >
        <BellIcon className="w-5 h-5" />
        {friends?.incoming && friends.incoming.length > 0 && (
          <div className="absolute top-0 right-0 bg-rose-400 h-1.5 w-1.5 rounded-full" />
        )}
      </Menu.Button>
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
            { ' bg-white ring-black ring-1 ring-opacity-5': theme === 'light' },
            { 'bg-slate-700': theme === 'dark' },
            'absolute w-72 z-40 left-[-2rem] origin-top-left rounded-md shadow-lg focus:outline-none',
          )}
        >
          {friends?.incoming && friends.incoming.length > 0 ? (
            <div className="py-2">
              <p className="px-2 text-xs font-semibold tracking-wider">
                Friend Requests
              </p>{' '}
              {friends?.incoming.map((friendship) => (
                <FriendRequestIncoming
                  key={friendship.FriendshipID}
                  friendship={friendship}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center p-2">
              <BadgeCheckIcon className="w-8 h-8 text-green-500" />
              Relax! No notifications.
            </div>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
