import { User } from '@supabase/supabase-auth-helpers/nextjs'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { Task } from 'hooks/tasks/useTasks'
import { KeyedMutator } from 'swr'
import AddTask from '../AddTask'
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
  const isToday = (task: Task) => {
    const today = new Date()
    const dueDate = new Date(task.DueDate)
    return (
      today.getDate() === dueDate.getDate() &&
      today.getMonth() === dueDate.getMonth() &&
      today.getFullYear() === dueDate.getFullYear()
    )
  }

  return (
    <div className="w-8/12 flex flex-col">
      <div>
        <BasicDisplayTasks
          archiveTaskLocal={archiveTaskLocal}
          tasks={tasks.filter((task) => isToday(task))}
        />
      </div>
      <div className="mt-2">
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
