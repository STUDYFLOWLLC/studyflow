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
}

export default function TodayView({
  tasks,
  archiveTaskLocal,
  user,
  coursesOnTerm,
  coursesOnTermLoading,
  mutateTasks,
}: Props) {
  return (
    <div className="flex overflow-auto mt-5">
      {coursesOnTerm.map((course) => (
        <div key={course.CourseOnTermID} className="mx-4">
          <div className="font-bold">
            {course.Nickname || course.FK_Course.Code}
          </div>
          <BasicDisplayTasks
            tasks={tasks.filter(
              (task) => task.FK_CourseOnTermID === course.CourseOnTermID,
            )}
            archiveTaskLocal={archiveTaskLocal}
          />
          <div className="mt-1">
            <AddTask
              user={user}
              tasks={tasks}
              mutateTasks={mutateTasks}
              coursesOnTerm={coursesOnTerm}
              coursesOnTermLoading={coursesOnTermLoading}
              courseOnTerm={course}
            />
          </div>
        </div>
      ))}
      <div>
        <div className="font-bold">General</div>
        <BasicDisplayTasks
          tasks={tasks.filter((task) => task.FK_CourseOnTermID === 0)}
          archiveTaskLocal={archiveTaskLocal}
        />
        <div className="mt-1">
          <AddTask
            user={user}
            tasks={tasks}
            mutateTasks={mutateTasks}
            coursesOnTerm={coursesOnTerm}
            coursesOnTermLoading={coursesOnTermLoading}
            general
          />
        </div>
      </div>
    </div>
  )
}
