import { Menu, Transition } from '@headlessui/react'
import { LockClosedIcon, NoSymbolIcon } from '@heroicons/react/24/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import RainbowPublicIcon from 'components/Flow/RainbowPublicIcon'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'
import { FlowVisibility } from 'types/Flow'
import { changeUserDefaultVisibility } from 'utils/user/userHandlers'

const items = [
  {
    name: FlowVisibility.PUBLIC,
    icon: RainbowPublicIcon,
    description: 'By default, your flows will be shared publicly.',
  },
  {
    name: FlowVisibility.PRIVATE,
    icon: LockClosedIcon,
    description:
      'By default, your flows will be only shared with users you specify.',
  },
  {
    name: FlowVisibility.HIDDEN,
    icon: NoSymbolIcon,
    description:
      'Lone wolf. By default, your flows will not be shared with anyone else.',
  },
]

export default function InputDefaultVisibility() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="py-4 sm:py-5 relative">
      <dt className="text-sm text-info font-medium text-center">
        Default Flow Visibility
      </dt>
      <div className="flex justify-center w-full">
        <Menu as="div" className="relative w-72">
          <Menu.Button
            className={classNames(
              {
                'text-stone-500 hover:bg-gray-50 hover:border-gray-300':
                  theme === 'light',
              },
              {
                'text-gray-400 hover:bg-slate-600 hover:border-slate-400':
                  theme === 'dark',
              },
              ' flex items-center font-light m-0 text-lg px-2 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
            )}
          >
            <div>
              {userDetails?.DefaultVisibility === FlowVisibility.PUBLIC && (
                <div className="text-sm flex flex-col items-center">
                  <span className="font-medium">{items[0].name}</span>
                  <RainbowPublicIcon dimension="w-5 h-5" />
                  <span className="text-xs">{items[0].description} </span>
                </div>
              )}
              {userDetails?.DefaultVisibility === FlowVisibility.PRIVATE && (
                <div className="text-sm flex flex-col items-center">
                  <span className="font-medium">{items[1].name}</span>
                  <LockClosedIcon className="w-5 h-5" />
                  <span className="text-xs">{items[1].description}</span>
                </div>
              )}
              {userDetails?.DefaultVisibility === FlowVisibility.HIDDEN && (
                <div className="text-sm flex flex-col items-center">
                  <span className="font-medium">{items[2].name}</span>
                  <NoSymbolIcon className="w-5 h-5" />
                  <span className="text-xs">{items[2].description}</span>
                </div>
              )}
            </div>
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
                {
                  ' bg-white ring-black ring-1 ring-opacity-5':
                    theme === 'light',
                },
                { 'bg-slate-700': theme === 'dark' },
                'absolute z-40 left-[-2rem] origin-top-left rounded-md shadow-lg focus:outline-none',
              )}
            >
              {items.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }: ActiveProps) => (
                    <div
                      className={classNames(
                        { 'bg-gray-100': active && theme === 'light' },
                        { 'bg-slate-600': active && theme === 'dark' },
                        'text-sm p-2 flex flex-col text-info items-center text-center cursor-pointer',
                      )}
                      onClick={() =>
                        changeUserDefaultVisibility(
                          item.name,
                          userDetails,
                          mutateUserDetails,
                        )
                      }
                      onKeyDown={() =>
                        changeUserDefaultVisibility(
                          item.name,
                          userDetails,
                          mutateUserDetails,
                        )
                      }
                    >
                      <span className="font-medium">{item.name}</span>
                      <item.icon className="w-4 mx-2" dimension="w-4 mx-2" />
                      <span className="text-xs text-info">
                        {item.description}
                      </span>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
