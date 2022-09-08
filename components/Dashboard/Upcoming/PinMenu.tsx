import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'

const items = [
  {
    name: 'Open',
  },
  {
    name: 'Hide',
  },
  {
    name: 'Share',
  },
  {
    name: 'Mark complete',
  },
]

export default function PinMenu() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="flex-shrink-0 pr-2">
      <Menu.Button
        className={classNames(
          { 'bg-white border-gray-200': theme === 'light' },
          { 'bg-slate-700 border-slate-600': theme === 'dark' },
          'w-8 h-8 inline-flex items-center justify-center text-info rounded-full focus:outline-none focus:ring-2 focus:ring-primary',
        )}
      >
        <span className="sr-only">Open options</span>
        <EllipsisVerticalIcon className="w-5 h-5" aria-hidden="true" />
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
              'bg-white ring-1 ring-black ring-opacity-5': theme === 'light',
            },
            { 'bg-slate-700': theme === 'dark' },
            'z-10 mx-3 origin-top-right absolute top-[-1rem] right-2 w-36 mt-1 rounded-md shadow-lg focus:outline-none',
          )}
        >
          {items.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }: ActiveProps) => (
                <div
                  className={classNames(
                    { 'bg-gray-100': active && theme === 'light' },
                    { 'bg-slate-600': active && theme === 'dark' },
                    'px-2 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center cursor-pointer',
                  )}
                >
                  {item.name}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
