/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, InboxIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { Fragment, useState } from 'react'
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
  hasGeneral?: boolean
  generalHandler?: (param1?: any, ...params: any[]) => any
}

export default function CourseDropDown({
  title,
  items,
  hasGeneral,
  generalHandler,
}: Props) {
  const [animateIcon, setAnimateIcon] = useState(false)

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              onMouseEnter={() => setAnimateIcon(true)}
              onMouseLeave={() => setAnimateIcon(false)}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-0 focus:outline-none"
            >
              {title}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
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
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {items.map((item) => (
                <Menu.Item key={item.name} onClick={() => item.handler()}>
                  {({ active }: activeProps) => (
                    <div
                      className={classNames(
                        { 'bg-primary bg-opacity-30 text-gray-900': active },
                        { 'text-gray-700': !active },
                        { 'last-of-type:rounded-b-md': !hasGeneral },
                        'px-1 flex items-center cursor-pointer first-of-type:rounded-t-md',
                      )}
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
              {hasGeneral && (
                <Menu.Item>
                  {({ active }: activeProps) => (
                    <div
                      className={classNames(
                        { 'bg-primary bg-opacity-30 text-gray-900': active },
                        { 'text-gray-700': !active },
                        'px-1 flex items-center cursor-pointer rounded-b-md',
                      )}
                      onClick={() => generalHandler && generalHandler()}
                      onKeyDown={() => generalHandler && generalHandler()}
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
