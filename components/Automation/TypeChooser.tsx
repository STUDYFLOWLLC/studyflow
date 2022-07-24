import { Menu, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  ChatAlt2Icon,
  ChevronDownIcon,
  LightBulbIcon,
  PencilAltIcon,
  PencilIcon,
  ViewGridAddIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ActiveProps } from 'types/ActiveProps'
import { FlowType } from 'types/Flow'

interface Props {
  type?: string
  mutator: (newType: FlowType) => void
  loading: boolean
}

const items = [
  { name: FlowType.LECTURE, icon: LightBulbIcon },
  { name: FlowType.DISCUSSION, icon: ChatAlt2Icon },
  { name: FlowType.NOTE, icon: PencilIcon },
  { name: FlowType.ASSIGNMENT, icon: PencilAltIcon },
  { name: FlowType.SYNTHESIS, icon: ViewGridAddIcon },
  { name: FlowType.ASSESSMENT, icon: ChartBarIcon },
]

export default function FlowTypeChooser({ loading, type, mutator }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (loading)
    return (
      <div className="mt-3">
        <Skeleton className="mr-3 p-0 w-36 h-8" />
      </div>
    )

  return (
    <div className="prose flex items-center m-2">
      <p className="m-0 p-0 font-medium">Default flow type:</p>
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
            'flex items-center font-light m-0 p-0 ml-3 text-md px-2 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
          )}
          disabled={loading}
        >
          {type}
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
              {
                ' bg-white ring-black ring-1 ring-opacity-5': theme === 'light',
              },
              { 'bg-slate-700': theme === 'dark' },
              'absolute z-20 left-3 w-48 origin-top-left rounded-md shadow-lg focus:outline-none',
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
                    onClick={() => mutator(item.name)}
                    onKeyDown={() => mutator(item.name)}
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
    </div>
  )
}
