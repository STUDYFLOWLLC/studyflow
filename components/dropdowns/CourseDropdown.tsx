/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import { Menu, Transition } from '@headlessui/react'
import { FolderIcon, InboxIcon } from '@heroicons/react/outline'
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
  color?: string
  items: Item[]
  loading: boolean
  hasGeneral?: boolean
  generalHandler?: (param1?: any, ...params: any[]) => any
  general?: boolean
}

export default function CourseDropDown({
  title,
  items,
  loading,
  hasGeneral,
  generalHandler,
  color,
  general,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState(color || '')
  const [icon, setIcon] = useState<JSX.Element>(
    general ? (
      <InboxIcon className="h-5 mr-1 w-5" />
    ) : (
      <FolderIcon className="h-5 mr-1 w-5" aria-hidden="true" />
    ),
  )

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button
            disabled={loading}
            className={classNames(
              {
                'ring-black border-transparent hover:opacity-80':
                  theme === 'light' && backgroundColor,
              },
              {
                'hover:bg-gray-50 hover:border-gray-300 border-slate-300':
                  theme === 'light' && !backgroundColor,
              },
              {
                'hover:bg-slate-600 text-white border-transparent':
                  theme === 'dark' && backgroundColor,
              },
              {
                'border-slate-600 hover:bg-slate-600 hover:border-slate-400 text-gray-100':
                  theme === 'dark' && !backgroundColor,
              },
              backgroundColor,
              'flex items-center cursor-pointer px-2 py-1 rounded-md mr-2 shadow-sm text-sm font-medium border',
            )}
          >
            {loading ? (
              <div className="h-4 mr-2 w-4">
                <MainSpinner size={SpinnerSizes.small} />
              </div>
            ) : (
              icon
            )}
            {title}
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
                  'bg-white ring-black ring-1 ring-opacity-5':
                    theme === 'light',
                },
                { 'bg-slate-700': theme === 'dark' },
                'absolute z-20 left-2 w-48 origin-top-left rounded-md shadow-lg focus:outline-none',
              )}
            >
              {items.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }: activeProps) => (
                    <div
                      className={classNames(
                        {
                          'bg-gray-100 text-gray-900':
                            active && theme === 'light',
                        },
                        {
                          'text-gray-700': !active && theme === 'light',
                        },
                        {
                          'bg-slate-600': active && theme === 'dark',
                        },
                        {
                          'bg-slate-700': !active && theme === 'dark',
                        },
                        { 'last-of-type:rounded-b-md': !hasGeneral },

                        'px-1 flex items-center cursor-pointer first-of-type:rounded-t-md',
                      )}
                      onClick={() => {
                        item.handler()
                        setBackgroundColor(item.color)
                        setIcon(
                          <FolderIcon
                            className="h-5 mr-1 w-5"
                            aria-hidden="true"
                          />,
                        )
                      }}
                      onKeyDown={() => {
                        item.handler()
                        setBackgroundColor(item.color)
                        setIcon(
                          <FolderIcon
                            className="h-5 mr-1 w-5"
                            aria-hidden="true"
                          />,
                        )
                      }}
                    >
                      <div
                        className={classNames(
                          item.color,
                          'ring-offset-1 w-3 h-3 mx-2 rounded-full',
                        )}
                      />
                      <span className="block py-2 text-sm">
                        {shorten(item.name, 18)}
                      </span>
                    </div>
                  )}
                </Menu.Item>
              ))}
              {hasGeneral && (
                <Menu.Item>
                  {({ active }: activeProps) => (
                    <div
                      className={classNames(
                        {
                          'bg-gray-100 text-gray-900':
                            active && theme === 'light',
                        },
                        {
                          'text-gray-700': !active && theme === 'light',
                        },
                        {
                          'bg-slate-600': active && theme === 'dark',
                        },
                        {
                          'bg-slate-700': !active && theme === 'dark',
                        },
                        'px-1 flex items-center cursor-pointer rounded-b-md',
                      )}
                      onClick={() => {
                        // eslint-disable-next-line no-unused-expressions
                        generalHandler && generalHandler()
                        setBackgroundColor(color || '')
                        setIcon(<InboxIcon className="h-5 mr-1 w-5" />)
                      }}
                      onKeyDown={() => {
                        // eslint-disable-next-line no-unused-expressions
                        generalHandler && generalHandler()
                        setBackgroundColor(color || '')
                        setIcon(<InboxIcon className="h-5 mr-1 w-5" />)
                      }}
                    >
                      <InboxIcon className="w-4 h-4 mx-1.5" />
                      <span className="block py-1.5 text-sm">General</span>
                    </div>
                  )}
                </Menu.Item>
              )}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
