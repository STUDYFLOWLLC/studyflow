import { User } from '@supabase/supabase-auth-helpers/nextjs'
import AddTask from 'components/Tasks/AddTask'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import isToday from 'utils/isToday'
import BasicDisplayTasks from './BasicDisplayTasks'

interface Props {
  user: User
  coursesOnTerm: CourseOnTerm[]
  coursesOnTermLoading: boolean
}

export default function TodayView({
  user,
  coursesOnTerm,
  coursesOnTermLoading,
}: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)

  const today = new Date().toDateString().slice(0, 10)
  const numTasksToday = tasks.filter(
    (task) => !task.Completed && isToday(task),
  ).length

  return (
    <div className="w-8/12 flex flex-col mb-16">
      <div className="mt-5 mb-1">
        {/* Header, which is date and num of tasks */}
        <span className="mt-4 text-xl mr-2">{today}</span>
        <span className="text-sm text-gray-400">
          {numTasksToday} {numTasksToday === 1 ? 'Task' : 'Tasks'}
        </span>
      </div>

      <div>
        <BasicDisplayTasks tasks={tasks.filter((task) => isToday(task))} />
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
