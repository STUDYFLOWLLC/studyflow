import { Menu, Transition } from '@headlessui/react'
import { BanIcon, LockClosedIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'
import { FlowVisibility } from 'types/Flow'
import RainbowPublicIcon from '../RainbowPublicIcon'

interface Props {
  loading: boolean
  visibility?: FlowVisibility
  mutator: (newVisibility: FlowVisibility) => void
}

const items = [
  { name: FlowVisibility.PUBLIC, icon: RainbowPublicIcon },
  { name: FlowVisibility.PRIVATE, icon: LockClosedIcon },
  { name: FlowVisibility.HIDDEN, icon: BanIcon },
]

export default function FlowVisibilityChooser({
  loading,
  visibility,
  mutator,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  console.log(visibility)

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
          'flex items-center font-light m-0 p-0 mr-2 text-xl px-2 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
        )}
      >
        <div>
          {visibility === FlowVisibility.PUBLIC && <RainbowPublicIcon />}
          {visibility === FlowVisibility.PRIVATE && (
            <LockClosedIcon className="w-6 h-6" />
          )}
          {visibility === FlowVisibility.HIDDEN && (
            <BanIcon className="w-6 h-6" />
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
            { ' bg-white ring-black ring-1 ring-opacity-5': theme === 'light' },
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
                    'pl-2 pr-4 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center cursor-pointer',
                  )}
                  onClick={() => mutator(item.name)}
                  onKeyDown={() => mutator(item.name)}
                >
                  <item.icon className="w-4 mx-2" dimension="w-4 mx-2" />
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