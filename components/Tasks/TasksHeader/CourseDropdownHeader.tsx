/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import { Menu, Transition } from '@headlessui/react'
import {
  AcademicCapIcon,
  ChevronDownIcon,
  InboxIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import { Fragment } from 'react'
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
  items: Item[]
  loading: boolean
  generalHandler?: (param1?: any, ...params: any[]) => any
  giveBackground?: boolean
  setViewing: (viewing: string) => void
  viewing: string
  viewingColor: string | undefined
}

export default function CourseDropDown({
  items,
  loading,
  generalHandler,
  viewing,
  setViewing,
  viewingColor,
}: Props) {
  const viewingClass: any = {}
  viewingClass[viewingColor || 'bg-red-200'] =
    viewing !== 'General' && viewing !== 'Today' && viewing !== 'Upcoming'

  return (
    <Menu as="div" className="relative inline-block text-left w-36">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              disabled={loading}
              className={classNames(
                {
                  'bg-primary/50': viewing === 'General',
                },
                {
                  'hover:bg-gray-50 bg-white':
                    viewing === 'Today' || viewing === 'Upcoming',
                },
                viewingColor,

                'inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-1 text-sm font-medium text-gray-700 focus:ring-0 focus:outline-none',
              )}
            >
              {(viewing === 'Today' || viewing === 'Upcoming') && (
                <AcademicCapIcon className="w-5 mx-1" />
              )}
              {viewing === 'General' && <InboxIcon className="w-5 mx-1" />}
              {viewing === 'Today' || viewing === 'Upcoming'
                ? 'Courses'
                : viewing}
              {loading ? (
                <div className="-mr-1 ml-2">
                  <MainSpinner size={SpinnerSizes.small} />
                </div>
              ) : (
                <ChevronDownIcon
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
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
            <Menu.Items className="origin-top-left absolute left-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {items.map((item) => (
                <Menu.Item key={item.name} onClick={() => item.handler()}>
                  {({ active }: activeProps) => (
                    <div
                      className={classNames(
                        { 'bg-primary bg-opacity-30 text-gray-900': active },
                        { 'text-gray-700': !active },
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
                        {shorten(item.name, 10)}
                      </span>
                    </div>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item>
                {({ active }: activeProps) => (
                  <div
                    className={classNames(
                      { 'bg-primary bg-opacity-30 text-gray-900': active },
                      { 'text-gray-700': !active },
                      'px-1 flex items-center cursor-pointer rounded-b-md',
                    )}
                    onClick={() => setViewing('General')}
                    onKeyDown={() => setViewing('General')}
                  >
                    <InboxIcon className="w-4 h-4 mx-1.5" />
                    <span className="block py-1.5 text-sm">General</span>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
