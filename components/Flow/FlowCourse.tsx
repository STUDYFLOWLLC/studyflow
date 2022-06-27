/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FolderIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import shorten from 'utils/shorten'

export interface Item {
  color: string
  name: string
  handler: (param1?: any, ...params: any[]) => any
}

interface activeProps {
  active: boolean
}

interface Props {
  title: string
  items: Item[]
  loading: boolean
}

export default function CourseDropDown({ title, items, loading }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          disabled={loading}
          className={classNames(
            {
              'hover:bg-gray-50 hover:border-gray-300': theme === 'light',
            },
            {
              'hover:bg-slate-600 hover:border-slate-400': theme === 'dark',
            },
            'flex align-middle items-center px-1 ml-2 hover:shadow-sm border border-transparent rounded-md cursor-pointer',
          )}
        >
          <FolderIcon className="h-5 mr-1 w-5" aria-hidden="true" />
          {title}
          {loading ? (
            <div className="w-4 mx-1">
              <MainSpinner size={SpinnerSizes.small} />
            </div>
          ) : (
            <ChevronDownIcon className="h-5 ml-1 w-5 mr-1" aria-hidden="true" />
          )}
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
            { ' bg-white ring-black ring-1 ring-opacity-5': theme === 'light' },
            { 'bg-slate-700': theme === 'dark' },
            'absolute z-20 left-0 w-48 origin-top-left rounded-md shadow-lg focus:outline-none',
          )}
        >
          {items.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }: activeProps) => (
                <div
                  className={classNames(
                    {
                      'bg-gray-100 text-gray-900': active && theme === 'light',
                    },
                    { 'text-gray-700': !active && theme === 'light' },
                    {
                      'bg-slate-600': active && theme === 'dark',
                    },
                    {
                      'bg-slate-700 ': !active && theme === 'dark',
                    },
                    'px-1 flex items-center cursor-pointer first-of-type:rounded-t-md last-of-type:rounded-b-md',
                  )}
                  onClick={() => item.handler()}
                  onKeyDown={() => item.handler()}
                >
                  <div
                    className={classNames(
                      item.color,
                      ' ring-offset-1 w-3 h-3 mx-2 rounded-full',
                    )}
                  />
                  <span className="block py-2 text-sm">
                    {shorten(item.name, 18)}
                  </span>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
