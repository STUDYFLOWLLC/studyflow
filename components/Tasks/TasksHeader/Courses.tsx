/* eslint-disable react/no-unused-prop-types */

import { Menu, Transition } from '@headlessui/react'
import { AcademicCapIcon } from '@heroicons/react/outline'
import { ChevronUpIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { Fragment, useState } from 'react'

interface Props {
  viewing: string
  setViewing: (viewing: string) => void
  coursesOnTerm: CourseOnTerm[]
}

interface MenuItemProps {
  active: boolean
}

export default function Courses({ setViewing, viewing, coursesOnTerm }: Props) {
  const [animateIcon, setAnimateIcon] = useState(false)

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                onMouseEnter={() => setAnimateIcon(true)}
                onMouseLeave={() => setAnimateIcon(false)}
                className={classNames(
                  {
                    'bg-primary/90 text-white':
                      viewing !== 'Today' && viewing !== 'Upcoming',
                  },
                  {
                    'hover:bg-primary/50 hover:text-white':
                      viewing === 'Today' || viewing === 'Upcoming',
                  },
                  'align-center inline-flex cursor-pointer transition mx-2 px-4 py-2 rounded-md text-lg font-medium',
                )}
              >
                <AcademicCapIcon className="w-5 mx-1" />
                {viewing === 'Today' || viewing === 'Upcoming'
                  ? 'Courses'
                  : viewing}
                <ChevronUpIcon
                  className={classNames(
                    {
                      'rotate-180 transition-all duration-200':
                        animateIcon || open,
                    },
                    'ml-1 mt-1 h-5 w-5',
                  )}
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
              <Menu.Items className="origin-top-left absolute left-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                <div className="py-1">
                  {coursesOnTerm.map((course) => (
                    <div
                      className="flex items-center px-2 py-1"
                      key={course.CourseOnTermID}
                    >
                      <Menu.Item
                        onClick={() => {
                          setViewing(course.Nickname || course.FK_Course.Code)
                        }}
                      >
                        {({ active }: MenuItemProps) => (
                          <div
                            className={classNames(
                              { 'bg-gray-100 text-gray-900': active },
                              { 'text-gray-700': !active },
                              {
                                'cursor-pointer':
                                  viewing !== course.Nickname &&
                                  viewing !== course.FK_Course.Code,
                              },
                              'group flex  items-center px-4 py-2 text-sm w-40',
                            )}
                          >
                            <div
                              className={classNames(
                                course.Color,
                                'w-2.5 h-2.5 mr-3 mt-0 rounded-full',
                              )}
                              style={{ marginRight: '1.125rem' }}
                            />
                            {course.Nickname || course.FK_Course.Code}
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}
