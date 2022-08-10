import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import AddTask from 'components/Tasks/AddTask'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import BasicDisplayTasks from './BasicDisplayTasks'

interface Props {
  user: User
}

export default function TodayView({ user }: Props) {
  const { theme } = useTheme()
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [groupBy, setGroupBy] = useState<'Today' | 'All' | number>('Today')
  const { tasks, tasksLoading, mutateTasks } = useTasks(
    userDetails?.UserID,
    'Today',
  )

  const [mounted, setMounted] = useState(false)
  const [showCompleted, setShowCompleted] = useState(true)

  const today = new Date().toDateString().slice(0, 10)
  const numTasksDueToday = tasks.filter((task) => !task.Completed).length
  const numTasksCompleteToday = tasks.filter((task) => task.Completed).length

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="w-8/12 flex flex-col mb-16">
      <div className="mt-5 mb-1 flex items-baseline w-full justify-between">
        {/* Header, which is date and num of tasks */}
        <div className="flex items-baseline">
          <span className="mt-4 text-xl mr-2">{today}</span>
          <span
            className={classNames(
              { 'hover:bg-gray-200': theme === 'light' },
              { 'hover:bg-slate-600': theme === 'dark' },
              'cursor-pointer rounded-md px-1.5 py-0.5 mx-1 uppercase text-sm text-info',
            )}
            onClick={() => setShowCompleted(!showCompleted)}
            onKeyDown={() => setShowCompleted(!showCompleted)}
          >
            {showCompleted ? 'Hide' : 'Show'} Completed
          </span>
          <span className="ml-3 mt-2">
            {tasksLoading && <MainSpinner size={SpinnerSizes.small} />}
          </span>
        </div>
        <div>
          <span className="text-xs text-gray-400 mt-3">
            {numTasksDueToday} Due, {numTasksCompleteToday} Completed
          </span>
        </div>
      </div>

      <div>
        <BasicDisplayTasks
          tasks={tasks}
          showCompleted={showCompleted}
          groupBy={groupBy}
        />
      </div>
      <div className="mt-1 pb-18">
        <AddTask
          user={user}
          coursesOnTerm={coursesOnTerm}
          coursesOnTermLoading={coursesOnTermLoading}
          dueDate={new Date()}
          groupBy="Today"
        />
      </div>
    </div>
  )
}
