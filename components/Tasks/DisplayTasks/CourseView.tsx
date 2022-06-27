import { User } from '@supabase/supabase-auth-helpers/nextjs'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import { Task } from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import BasicDisplayTasks from './BasicDisplayTasks'

interface Props {
  tasks: Task[]
  archiveTaskLocal: (TaskID: number) => void
  user: User
}

export default function TodayView({ tasks, archiveTaskLocal, user }: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  return (
    <div className="flex overflow-auto">
      {coursesOnTerm.map((course) => (
        <div key={course.CourseOnTermID} className="">
          <div>{course.Nickname || course.FK_Course.Code}</div>
          <BasicDisplayTasks
            tasks={tasks}
            archiveTaskLocal={archiveTaskLocal}
          />
        </div>
      ))}
    </div>
  )
}
