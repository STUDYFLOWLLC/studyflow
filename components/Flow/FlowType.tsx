import { Menu, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  BookOpenIcon,
  ChevronDownIcon,
  HandIcon,
  PencilAltIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'

interface Props {
  type: string
}

const items = [
  { name: 'LECTURE', icon: AnnotationIcon },
  { name: 'ASSIGNMENT', icon: HandIcon },
  { name: 'NOTE', icon: BookOpenIcon },
  { name: 'EXAM', icon: PencilAltIcon },
]

export default function FlowType({ type }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="relative">
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
          'flex items-center font-light m-0 p-0 ml-3 text-xl px-2 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
        )}
      >
        {type}
        <ChevronDownIcon className="w-5" />
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
            'absolute z-20 left-0 w-48 origin-top-left rounded-md shadow-lg focus:outline-none',
          )}
        >
          {items.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <div
                  className={classNames(
                    { 'bg-primary/30': active && theme === 'light' },
                    { 'bg-slate-600': active && theme === 'dark' },
                    'px-2 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center cursor-pointer',
                  )}
                >
                  <item.icon className="w-4 mx-2" />
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
