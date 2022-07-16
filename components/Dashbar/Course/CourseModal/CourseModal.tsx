import { Dialog, Transition } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import CourseModalNav from './CourseModalNav'
import EditCourse from './EditCourse'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function CourseModal({ open, setOpen }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [mounted, setMounted] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<CourseOnTerm | null>(
    null,
  )

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (selectedCourse && coursesOnTerm) {
      const course = coursesOnTerm?.find(
        (courseOnTerm) =>
          courseOnTerm.CourseOnTermID === selectedCourse.CourseOnTermID,
      )
      if (course) setSelectedCourse(course)
    }
  }, [coursesOnTerm, selectedCourse])

  if (!mounted) return null

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20 z-30"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel
            className={classNames(
              { 'bg-base-100': theme === 'light' },
              { 'bg-base-200': theme === 'dark' },
              'w-full prose mx-auto max-w-2xl py-2 px-4 transform overflow-hidden rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 transition-all',
            )}
          >
            <CourseModalNav
              tabs={[
                {
                  key: undefined,
                  name: 'Add Course',
                  handler: () => setSelectedCourse(null),
                },
              ].concat(
                /* @ts-expect-error fuck this shit it works */
                coursesOnTerm.map((course) => ({
                  key: course.CourseOnTermID,
                  name: course.Nickname || course.FK_Course.Code,
                  handler: () => setSelectedCourse(course),
                })),
              )}
              selectedCourse={selectedCourse}
            />
            {selectedCourse === null ? (
              <span>add course</span>
            ) : (
              <EditCourse
                course={selectedCourse}
                setSelectedCourse={setSelectedCourse}
              />
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
