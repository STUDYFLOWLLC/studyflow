import { User } from '@supabase/supabase-auth-helpers/nextjs'
import MainSpinner from 'components/spinners/MainSpinner'
import AddTask from 'components/Tasks/AddTask'
import { isToday, isYesterday } from 'date-fns'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'
import BasicDisplayTasks from './BasicDisplayTasks'

interface Props {
  user: User
}

export default function TodayView({ user }: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { tasks, tasksLoading, mutateTasks } = useTasks(userDetails?.UserID)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const today = new Date().toDateString().slice(0, 10)
  const numTasksToday = tasks.filter(
    (task) => !task.Completed && isToday(new Date(task.DueDate)),
  ).length

  return (
    <div className="w-8/12 flex flex-col mb-16">
      <div className="mt-5 mb-1 flex items-baseline">
        {/* Header, which is date and num of tasks */}
        <span className="mt-4 text-xl mr-2">{today}</span>
        <span className="text-sm text-gray-400">
          {numTasksToday} {numTasksToday === 1 ? 'Task' : 'Tasks'}
        </span>
        <span className="ml-3 mt-1">
          {tasksLoading && <MainSpinner size={SpinnerSizes.small} />}
        </span>
      </div>

      <div>
        <BasicDisplayTasks
          tasks={tasks.filter(
            (task) =>
              isToday(new Date(task.DueDate)) ||
              isYesterday(new Date(task.DueDate)),
          )}
        />
      </div>
      <div className="mt-1">
        <AddTask
          user={user}
          coursesOnTerm={coursesOnTerm}
          coursesOnTermLoading={coursesOnTermLoading}
          dueDate={new Date()}
        />
      </div>
    </div>
  )
}
