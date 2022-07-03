import { Dialog, Transition } from '@headlessui/react'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import AddTask from 'components/Tasks/AddTask'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import { formatISO } from 'date-fns'
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
}

export default function DayPopup({
  dateToDisplay,
  user,
  open,
  setOpen,
}: Props) {
  const { theme } = useTheme()
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const numTasks = tasks.filter(
    (task) =>
      !task.Completed &&
      task.DueDate?.substring(0, 10) ===
        formatISO(dateToDisplay).substring(0, 10),
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
              'max-w-3xl mx-auto transform divide-y divide-gray-100 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 transition-all',
            )}
          >
            {/* Header */}
            <div className="mb-4">
              <span className="mt-4 text-xl mr-2">
                {dateToDisplay.toDateString().substring(0, 10)}
              </span>
              <span className="text-sm text-gray-400">
                {numTasks} {numTasks === 1 ? 'Task' : 'Tasks'}
              </span>
            </div>

            {/* Display Task with Viewing Date */}
            <div>
              <BasicDisplayTasks
                tasks={tasks.filter(
                  (task) =>
                    task.DueDate?.substring(0, 10) ===
                    formatISO(dateToDisplay).substring(0, 10),
                )}
              />
            </div>
            {/* Add Task, with correct Due Date */}
            <div>
              <AddTask
                user={user}
                coursesOnTerm={coursesOnTerm}
                coursesOnTermLoading={coursesOnTermLoading}
                dueDate={dateToDisplay}
              />
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
