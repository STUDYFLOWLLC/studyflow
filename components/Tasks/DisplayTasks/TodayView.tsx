import { User } from '@supabase/supabase-auth-helpers/nextjs'
import AddTask from 'components/Tasks/AddTask'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { Task } from 'hooks/tasks/useTasks'
import { KeyedMutator } from 'swr'
import isToday from 'utils/isToday'
import BasicDisplayTasks from './BasicDisplayTasks'

interface Props {
  tasks: Task[]
  archiveTaskLocal: (TaskID: number) => void
  user: User
  coursesOnTerm: CourseOnTerm[]
  coursesOnTermLoading: boolean
  mutateTasks: KeyedMutator<any>
  taskView: string
}

export default function TodayView({
  tasks,
  archiveTaskLocal,
  user,
  coursesOnTerm,
  coursesOnTermLoading,
  mutateTasks,
  taskView,
}: Props) {
  const today = new Date().toDateString().slice(0, 10)
  const numTasksToday = tasks.filter(
    (task) => !task.Completed && isToday(task),
  ).length
  console.log(new Date())
  console.log(new Date().toDateString())
  console.log(new Date().toISOString())

  return (
    <div className="w-8/12 flex flex-col">
      <div className="mt-5 mb-1">
        {/* Header, which is date and num of tasks */}
        <span className="mt-4 text-xl mr-2">{today}</span>
        <span className="text-sm text-gray-400">
          {numTasksToday} {numTasksToday === 1 ? 'Task' : 'Tasks'}
        </span>
      </div>

      <div>
        <BasicDisplayTasks
          archiveTaskLocal={archiveTaskLocal}
          tasks={tasks.filter((task) => !task.Completed && isToday(task))}
        />
      </div>
      <div className="mt-1">
        <AddTask
          user={user}
          tasks={tasks}
          mutateTasks={mutateTasks}
          coursesOnTerm={coursesOnTerm}
          coursesOnTermLoading={coursesOnTermLoading}
          taskView={taskView}
        />
      </div>
    </div>
  )
}
