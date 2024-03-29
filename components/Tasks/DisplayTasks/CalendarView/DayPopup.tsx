import { Dialog, Transition } from '@headlessui/react'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import AddTask from 'components/Tasks/AddTask'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'

interface Props {
  dateToDisplay: Date
  user: User
  open: boolean
  setOpen: (open: boolean) => void
  sameDate: (date1: Date | undefined, date2: Date | undefined) => boolean
}

export default function DayPopup({
  dateToDisplay,
  user,
  open,
  setOpen,
  sameDate,
}: Props) {
  const { theme } = useTheme()
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const [index, setIndex] = useState(0)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID, 'All')
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const numTasks = tasks.filter(
    (task) =>
      !task.Completed && sameDate(new Date(task.DueDate), dateToDisplay),
  ).length

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
        onClose={setOpen}
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
          <div
            className={classNames(
              { 'bg-slate-100': theme !== 'dark' },
              { 'bg-base-200': theme === 'dark' },
              'max-w-3xl mx-auto transform pt-4 h-full px-4 overflow-hidden rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 transition-all',
            )}
          >
            {/* Header */}
            <div className="mb-4">
              <span className="mt-4 text-xl mr-2">
                {dateToDisplay.toDateString().substring(0, 10)}
              </span>
              <span className="text-sm text-info">
                {numTasks} {numTasks === 1 ? 'Task' : 'Tasks'}
              </span>
            </div>

            {/* Display Task with Viewing Date */}
            <div>
              <BasicDisplayTasks
                tasks={tasks.filter((task) =>
                  sameDate(new Date(task.DueDate), dateToDisplay),
                )}
                groupBy="All"
                index={index}
                setIndex={setIndex}
              />
            </div>
            {/* Add Task, with correct Due Date */}
            <div className="mt-3">
              <AddTask
                user={user}
                coursesOnTerm={coursesOnTerm}
                coursesOnTermLoading={coursesOnTermLoading}
                dueDate={dateToDisplay}
                groupBy="All"
              />
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
