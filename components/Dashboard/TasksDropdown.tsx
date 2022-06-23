/* This example requires Tailwind CSS v2.0+ */
import { Menu, Transition } from '@headlessui/react'
import {
  ArchiveIcon,
  ArrowCircleRightIcon,
  CheckIcon,
  ChevronDownIcon,
  CollectionIcon,
  DuplicateIcon,
  HeartIcon,
  TrashIcon,
  UserAddIcon,
} from '@heroicons/react/solid'
import classNames from 'classnames'
import Link from 'next/link'
import { Fragment } from 'react'

interface Props {
  viewing?: string
  setViewing?: (viewing: string) => void
}

export default function TasksDropdown({ viewing, setViewing }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex border px-2 py-1 mr-3 rounded border-transparent bg-primary/50 hover:bg-primary/70">
          <CheckIcon className="w-5 mr-0.5" />
          <ChevronDownIcon className="w-3" />
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
        <Menu.Items className="origin-top-right absolute right-3 mt-1 w-56 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="pb-1">
            <Menu.Item>
              {({ active }) =>
                viewing && setViewing ? (
                  <div
                    className={classNames(
                      { 'bg-gray-100 text-gray-900': active },
                      { 'text-gray-700': !active },
                      'group flex items-center px-4 py-2 text-sm hover:cursor-pointer',
                    )}
                    onClick={() => setViewing('Today')}
                    onKeyDown={() => setViewing('Today')}
                  >
                    <CollectionIcon
                      className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    Today
                  </div>
                ) : (
                  <span>
                    <Link href="/tasks" passHref>
                      <a
                        className={classNames(
                          { 'bg-gray-100 text-gray-900': active },
                          { 'text-gray-700': !active },
                          'group flex items-center px-4 py-2 text-sm hover:cursor-pointer',
                        )}
                      >
                        <CollectionIcon
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        Today
                      </a>
                    </Link>
                  </span>
                )
              }
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm',
                  )}
                >
                  <DuplicateIcon
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Duplicate
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm',
                  )}
                >
                  <ArchiveIcon
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Archive
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm',
                  )}
                >
                  <ArrowCircleRightIcon
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Move
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm',
                  )}
                >
                  <UserAddIcon
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Share
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm',
                  )}
                >
                  <HeartIcon
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Add to favorites
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm',
                  )}
                >
                  <TrashIcon
                    className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
