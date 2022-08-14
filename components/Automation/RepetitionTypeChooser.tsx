import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'
import { RepetitionType } from 'types/Repetition'

interface Props {
  loading: boolean
  repetitionType?: RepetitionType
  mutator: (newRepetitionType: RepetitionType) => void
}

const items = Object.keys(RepetitionType)

export default function RepetitionTypeChooser({
  loading,
  repetitionType,
  mutator,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="prose flex w-full items-center m-1">
      <p className="m-0 p-0 font-medium text-sm">Default Repetition Type:</p>
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
            'ml-2 flex items-center font-light m-0 mr-2 text-sm px-2 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
          )}
        >
          <div>
            {repetitionType === RepetitionType.FOURTEN && <span>4 in 10</span>}
            {repetitionType === RepetitionType.FOURTHIRTY && (
              <span>4 in 30</span>
            )}
            {repetitionType === RepetitionType.SIXTHIRTY && (
              <span>6 in 30</span>
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
                ' bg-white ring-black ring-1 ring-opacity-5': theme === 'light',
              },
              { 'bg-slate-700': theme === 'dark' },
              'absolute z-40 left-[-2rem] origin-top-left rounded-md shadow-lg focus:outline-none',
            )}
          >
            {items.map((item) => (
              <Menu.Item key={item}>
                {({ active }: ActiveProps) => (
                  <div
                    className={classNames(
                      { 'bg-gray-100': active && theme === 'light' },
                      { 'bg-slate-600': active && theme === 'dark' },
                      'pl-2 pr-4 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center cursor-pointer',
                    )}
                    onClick={() => mutator(item as RepetitionType)}
                    onKeyDown={() => mutator(item as RepetitionType)}
                  >
                    {item}
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
