import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useUserDetails, { SmallTerm } from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ActiveProps } from 'types/ActiveProps'

export default function FlowTypeChooser() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)

  const [mounted, setMounted] = useState(false)
  const [selectedTerm, setSelectedTerm] = useState<SmallTerm | undefined>(
    userDetails?.FK_Terms?.[0],
  )

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (userDetailsLoading)
    return (
      <div className="mt-3">
        <Skeleton className="mr-3 p-0 w-36 h-8" />
      </div>
    )

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className={classNames(
          {
            ' hover:bg-gray-50 hover:border-gray-300': theme === 'light',
          },
          {
            ' hover:bg-slate-600 hover:border-slate-400': theme === 'dark',
          },
          'flex items-center font-medium text-lg m-0 px-2 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
        )}
        disabled={userDetailsLoading}
      >
        {selectedTerm?.TermName}
        <ChevronDownIcon className="w-5 ml-1" />
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
            'absolute z-20 left-1.5 w-48 font-medium origin-top-left rounded-md shadow-lg focus:outline-none',
          )}
        >
          {userDetails?.FK_Terms &&
            userDetails.FK_Terms.map((term) => (
              <Menu.Item key={term.TermName}>
                {({ active }: ActiveProps) => (
                  <div
                    className={classNames(
                      { 'bg-gray-100': active && theme === 'light' },
                      { 'bg-slate-600': active && theme === 'dark' },
                      'truncate px-2 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center cursor-pointer',
                    )}
                    onClick={() => setSelectedTerm(term)}
                    onKeyDown={() => setSelectedTerm(term)}
                  >
                    {term.TermName}
                  </div>
                )}
              </Menu.Item>
            ))}
          <Menu.Item disabled>
            {({ active }: ActiveProps) => (
              <div
                className={classNames(
                  'text-info truncate px-2 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center',
                )}
              >
                Create term coming soon
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
