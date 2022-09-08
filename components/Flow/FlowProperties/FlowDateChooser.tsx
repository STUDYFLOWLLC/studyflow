import { Menu, Transition } from '@headlessui/react'
import { CalendarIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import abbreviateDate from 'utils/abbreviateDate'
import FlowDropdownCalendar from '../FlowDropdownCalendar'

interface Props {
  loading: boolean
  userEnteredDate: string
  setUserEnteredDate: (newDate: Date) => void
}

export default function FlowDateChooser({
  loading,
  userEnteredDate,
  setUserEnteredDate,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="relative text-left" style={{ zIndex: 10000 }}>
      {!loading ? (
        <Menu.Button
          className={classNames(
            {
              'hover:bg-gray-50 hover:border-gray-300': theme === 'light',
            },
            {
              'hover:bg-slate-600 hover:border-slate-400': theme === 'dark',
            },
            'focus:outline-none  flex align-middle justify-between items-center w-40 px-2 ml-2 hover:shadow-sm border border-transparent rounded-md cursor-pointer',
          )}
        >
          <div>
            <CalendarIcon className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="mx-2">
            {abbreviateDate(new Date(userEnteredDate))}
          </span>
          <div>
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        </Menu.Button>
      ) : (
        <Skeleton className="h-5 w-40 ml-4" />
      )}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-left absolute w-auto h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <FlowDropdownCalendar
              userEnteredDate={new Date(userEnteredDate)}
              setUserEnteredDate={setUserEnteredDate}
            />
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
