import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'
import { FlowSortOptions } from 'utils/flows/sortFlows'

interface Props {
  sortBy: FlowSortOptions
  setSortBy: (sortBy: FlowSortOptions) => void
}

export default function TermSelectorMenu({ sortBy, setSortBy }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

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
          'flex items-center font-medium text-xs m-0 uppercase px-2 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
        )}
      >
        {sortBy}
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
              ' bg-white ring-black ring-1 ring-opacity-5': theme === 'light',
            },
            { 'bg-slate-700': theme === 'dark' },
            'absolute z-20 left-1 w-36 mt-1 font-medium origin-top-left rounded-md shadow-lg focus:outline-none',
          )}
        >
          {Object.values(FlowSortOptions).map((option) => (
            <Menu.Item key={option}>
              {({ active }: ActiveProps) => (
                <div
                  className={classNames(
                    { 'bg-gray-100': active && theme === 'light' },
                    { 'bg-slate-600': active && theme === 'dark' },
                    'truncate px-2 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center cursor-pointer justify-between',
                  )}
                  onClick={() => setSortBy(option)}
                  onKeyDown={() => setSortBy(option)}
                >
                  {option}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
