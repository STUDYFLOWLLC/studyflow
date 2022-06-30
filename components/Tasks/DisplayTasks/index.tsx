/* eslint-disable no-case-declarations */
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import CourseListView from './CourseListView'
import TodayView from './TodayView'

interface Props {
  user: User
  taskView: string
}

export default function index({ user, taskView }: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const archiveTaskLocal = (TaskID: number) => {
    mutateTasks(
      {
        mutate: true,
        tasks: tasks.map((task) => {
          if (task.TaskID === TaskID) {
            return { ...task, Completed: true }
          }
          return task
        }),
      },
      {
        revalidate: false,
      },
    )
  }

  return (
    <>
      {/* Today view */}
      {taskView === 'Today' && (
        <div className="flex justify-center">
          <TodayView
            tasks={tasks}
            archiveTaskLocal={archiveTaskLocal}
            user={user}
            mutateTasks={mutateTasks}
            coursesOnTerm={coursesOnTerm}
            coursesOnTermLoading={coursesOnTermLoading}
            taskView={taskView}
          />
        </div>
      )}

      {/* Calendar view */}
      {taskView === 'Calendar' && (
        <BasicDisplayTasks
          archiveTaskLocal={archiveTaskLocal}
          tasks={tasks.filter((task) => !task.Completed)}
        />
      )}

      {/* Courses List view */}
      {taskView === 'Courses' && (
        <div className="flex justify-center">
          <CourseListView
            tasks={tasks}
            user={user}
            archiveTaskLocal={archiveTaskLocal}
            mutateTasks={mutateTasks}
            coursesOnTerm={coursesOnTerm}
            coursesOnTermLoading={coursesOnTermLoading}
          />
        </div>
      )}
    </>
  )
}
