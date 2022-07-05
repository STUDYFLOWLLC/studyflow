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
import { isBefore, isToday, isTomorrow, startOfToday } from 'date-fns'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
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
  <InboxIcon key="inbox" className="w-4 mr-1" />,
  <BanIcon key="ban" className="w-4 mr-1" />,
]

interface Props {
  taskDueDateExact: Date | undefined
  setTaskDueDateExact: (taskDueDateExact: Date | undefined) => void
}

export default function CourseDropDown({
  taskDueDateExact,
  setTaskDueDateExact,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const bgColor = (date: Date) => {
    if (isBefore(date, startOfToday())) {
      return 'bg-red-300'
    }
    if (isToday(date)) {
      return 'bg-amber-300'
    }
    if (isTomorrow(date)) {
      return 'bg-blue-300'
    }
    return 'bg-gray-300'
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={classNames(
                {
                  'ring-black border-transparent hover:opacity-80':
                    theme === 'light' && taskDueDateExact,
                },
                {
                  'hover:bg-gray-50 hover:border-gray-300 border-slate-300':
                    theme === 'light' && !taskDueDateExact,
                },
                {
                  'hover:bg-slate-600 text-white border-transparent':
                    theme === 'dark' && taskDueDateExact,
                },
                {
                  'border-slate-600 hover:bg-slate-600 hover:border-slate-400 text-gray-100':
                    theme === 'dark' && !taskDueDateExact,
                },
                taskDueDateExact && bgColor(taskDueDateExact),
                'flex items-center cursor-pointer px-2 py-1 rounded-md shadow-sm mr-2 text-sm font-medium border',
              )}
            >
              <CalendarIcon className="w-4 mr-1" />
              {taskDueDateExact ? abbreviateDate(taskDueDateExact) : 'Due date'}
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
            <Menu.Items className="origin-top-left absolute left-2 w-auto h-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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

                        'px-1 py-1 flex items-center cursor-pointer first-of-type:rounded-t-md',
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
