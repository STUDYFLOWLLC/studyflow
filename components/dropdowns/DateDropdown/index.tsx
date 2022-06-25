/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import { Menu, Transition } from '@headlessui/react'
import {
  BanIcon,
  CalendarIcon,
  CollectionIcon,
  InboxIcon,
} from '@heroicons/react/outline'
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

const itemList = ['Today', 'Tomorrow', 'No Date']
const itemIcons = [
  <CollectionIcon key="collection" className="w-4 mr-1" />,
  <InboxIcon key="calendar" className="w-4 mr-1" />,
  <BanIcon key="academicCap" className="w-4 mr-1" />,
]

interface Props {
  taskDueDateExact: Date | undefined
  setTaskDueDateExact: (taskDueDateExact: Date | undefined) => void
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
            <Menu.Button className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 border border-gray-300 rounded-md shadow-sm mr-2 text-sm font-medium">
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
            <Menu.Items className="origin-top-left absolute right-2 w-auto h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {itemList.map((item) => (
                <Menu.Item key={item}>
                  {({ active }: activeProps) => (
                    <div
                      onClick={() => {
                        if (item === 'Today' || item === 'Tomorrow') {
                          setTaskDueDateExact(dateParser(item)[0].date())
                        } else {
                          setTaskDueDateExact(undefined)
                        }
                      }}
                      onKeyDown={() => {
                        if (item === 'Today' || item === 'Tomorrow') {
                          setTaskDueDateExact(dateParser(item)[0].date())
                        } else {
                          setTaskDueDateExact(undefined)
                        }
                      }}
                      className={classNames(
                        { 'bg-primary bg-opacity-30 text-gray-900': active },
                        { 'text-gray-700': !active },
                        'px-1 flex items-center cursor-pointer first-of-type:mt-1 last-of-type:mb-1 py-1.5',
                      )}
                    >
                      {itemIcons[itemList.indexOf(item)]}
                      {item}
                    </div>
                  )}
                </Menu.Item>
              ))}
              <section>
                <div className="border-b border-gray-400" />
                <Menu.Item>
                  {({ active }: activeProps) => (
                    <DropdownCalendar
                      taskDueDateExact={taskDueDateExact}
                      setTaskDueDateExact={setTaskDueDateExact}
                    />
                  )}
                </Menu.Item>
              </section>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
