/* eslint-disable no-case-declarations */
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import CourseView from './CourseView'
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
    mutateTasks({
      mutate: true,
      tasks: tasks.map((task) => {
        if (task.TaskID === TaskID) {
          return { ...task, Completed: true }
        }
        return task
      }),
    })
  }

  return (
    <>
      {/* Today view */}
      {taskView === 'Today' && (
        <TodayView
          tasks={tasks}
          archiveTaskLocal={archiveTaskLocal}
          user={user}
          mutateTasks={mutateTasks}
          coursesOnTerm={coursesOnTerm}
          coursesOnTermLoading={coursesOnTermLoading}
          taskView={taskView}
        />
      )}

      {/* Calendar view */}
      {taskView === 'Calendar' && (
        <BasicDisplayTasks archiveTaskLocal={archiveTaskLocal} tasks={tasks} />
      )}

      {/* Courses view */}
      {taskView === 'Courses' && (
        <CourseView
          tasks={tasks}
          archiveTaskLocal={archiveTaskLocal}
          user={user}
          mutateTasks={mutateTasks}
          coursesOnTerm={coursesOnTerm}
          coursesOnTermLoading={coursesOnTermLoading}
        />
      )}
    </>
  )
}
