import { useUser } from '@supabase/supabase-auth-helpers/react'
import CuteStudentDisplay from 'components/Social/Displays/CuteStudentDisplay'
import FriendButton from 'components/Social/Student/ProfileHeader/FriendButton'
import MainSpinner from 'components/spinners/MainSpinner'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useCourseStudents from 'hooks/social/useCourseStudents'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  courseOnTerm: CourseOnTerm
}

export default function StudentsInCourse({ courseOnTerm }: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { courseStudents, courseStudentsLoading } = useCourseStudents(
    courseOnTerm.FK_Course?.CourseID,
  )

  if (courseStudentsLoading) return <MainSpinner size={SpinnerSizes.medium} />

  return (
    <div className="prose w-96 px-3 max-h-36 overflow-y-auto overflow-x-hidden">
      <h3 className="p-0 m-0">Students in {courseOnTerm.Nickname}</h3>
      {courseStudents
        .filter((s) => s.UserID !== userDetails?.UserID)
        .map((student) => (
          <div
            key={student.Username}
            className="flex justify-between items-center"
          >
            <CuteStudentDisplay publicUser={student} />
            <FriendButton PublicUser={student} />
          </div>
        ))}
      {courseStudents.filter((s) => s.UserID !== userDetails?.UserID).length ===
        0 && <p className="text-center">No students found!</p>}
    </div>
  )
}
