import { Menu, Transition } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useDashFlows from 'hooks/flows/useDashFlows'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'
import { deleteCourseOnTerm } from 'utils/setup/courseHandlers'

interface Props {
  course: CourseOnTerm
  setSelectedCourse: (course: CourseOnTerm | null) => void
}

export default function DeleteFlow({ course, setSelectedCourse }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { coursesOnTerm, mutateCoursesOnTerm } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )
  const { dashFlows, mutateDashFlows } = useDashFlows(userDetails?.UserID)

  const [mounted, setMounted] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

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
          'flex items-center font-light m-0 text-xl px-1.5 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
        )}
      >
        <TrashIcon className="h-6 w-6" />
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
            'absolute w-72 z-40 -left-64 origin-top-left rounded-md shadow-lg focus:outline-none',
          )}
        >
          <Menu.Item disabled>
            {({ active }: ActiveProps) => (
              <div className="pl-2 pr-4 text-sm flex items-center">
                <div className="px-2 py-2">
                  <h3 className="text-lg leading-6 font-medium p-0 mb-0 mt-2">
                    Delete course
                  </h3>
                  <div className="max-w-xl text-sm text-info pt-2">
                    <p className="p-0 m-0">
                      When you delete a course, all of its flows, flashcards,
                      and tasks will be deleted.
                    </p>
                  </div>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                      onClick={() => {
                        deleteCourseOnTerm(
                          course.CourseOnTermID,
                          coursesOnTerm,
                          mutateCoursesOnTerm,
                          dashFlows,
                          mutateDashFlows,
                        )
                        setSelectedCourse(null)
                      }}
                      onKeyDown={() => {
                        deleteCourseOnTerm(
                          course.CourseOnTermID,
                          coursesOnTerm,
                          mutateCoursesOnTerm,
                          dashFlows,
                          mutateDashFlows,
                        )
                        setSelectedCourse(null)
                      }}
                    >
                      Delete course
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
