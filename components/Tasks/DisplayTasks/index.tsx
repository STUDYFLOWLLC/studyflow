/* eslint-disable no-case-declarations */
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import CalendarView from 'components/Tasks/DisplayTasks/CalendarView'
import useUserDetails from 'hooks/useUserDetails'
import CourseListView from './CourseListView'
import TodayView from './TodayView'

interface Props {
  user: User
  taskView: string
}

export default function index({ user, taskView }: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)

  return (
    <>
      {/* Today view */}
      {taskView === 'Today' && (
        <div className="flex justify-center">
          <TodayView user={user} />
        </div>
      )}

      {/* Calendar view */}
      {taskView === 'Calendar' && (
        <div className="w-full h-full">
          <CalendarView user={user} />
        </div>
      )}

      {/* Courses List view */}
      {taskView === 'Courses' && (
        <div className="flex justify-center">
          <CourseListView user={user} />
        </div>
      )}
    </>
  )
}
