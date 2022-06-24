/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import { Menu, Transition } from '@headlessui/react'
import { CalendarIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import DropdownCalendar from 'components/dropdowns/DateDropdown/DropdownCalendar'
import { Fragment } from 'react'
import abbreviateDate from 'utils/abbreviateDate'
import dateParser from 'utils/dateParser'

export interface Item {
  color: string
  name: string
  handler: (param1?: any, ...params: any[]) => any
}

interface activeProps {
  active: boolean
}

const itemList = ['Today', 'Tomorrow']

interface Props {
  taskDueDateExact: Date | undefined
  setTaskDueDateExact: (taskDueDateExact: Date) => void
}

export default function CourseDropDown({
  taskDueDateExact,
  setTaskDueDateExact,
}: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 border border-gray-300 rounded-md shadow-sm mx-2 text-sm font-medium">
              <CalendarIcon className="w-4 mr-1" />
              {taskDueDateExact
                ? abbreviateDate(taskDueDateExact, 'America/Los_Angeles')
                : 'Due date'}
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
            <Menu.Items className="origin-top-left absolute right-2 w-72 h-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {itemList.map((item) => (
                <Menu.Item key={item}>
                  {({ active }: activeProps) => (
                    <div
                      onClick={() => {
                        setTaskDueDateExact(dateParser(item)[0].date())
                      }}
                      onKeyDown={() => {
                        setTaskDueDateExact(dateParser(item)[0].date())
                      }}
                      className={classNames(
                        { 'bg-primary bg-opacity-30 text-gray-900': active },
                        { 'text-gray-700': !active },
                        'px-1 flex items-center cursor-pointer first-of-type:rounded-t-md',
                      )}
                    >
                      {item}
                    </div>
                  )}
                </Menu.Item>
              ))}
              <section>
                <Menu.Item>
                  {({ active }: activeProps) => <DropdownCalendar />}
                </Menu.Item>
              </section>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
