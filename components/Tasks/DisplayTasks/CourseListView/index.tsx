import { User } from '@supabase/supabase-auth-helpers/nextjs'
import LoadWithText from 'components/spinners/LoadWithText'
import CourseListDropdown from 'components/Tasks/DisplayTasks/CourseListView/CourseListDropdown'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  user: User
}

export default function CourseListView({ user }: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  return (
    <div className="flex flex-col w-10/12 mt-6 mb-16">
      {coursesOnTermLoading && (
        <LoadWithText
          size={SpinnerSizes.medium}
          text="Loading your courses..."
        />
      )}
      {/* Map of Each Class Dropdown-Display */}
      {coursesOnTerm.map((course) => (
        <CourseListDropdown
          key={course.CourseOnTermID}
          course={course}
          user={user}
        />
      ))}
      <CourseListDropdown
        key={0}
        course={{
          CourseOnTermID: 0,
          Color: '',
          FK_Course: {
            CourseID: 0,
            Code: 'General',
            Term: 'General',
            Title: 'General',
            FK_Professor: {
              Name: 'General',
              Email: 'hello@studyflow.ai',
            },
          },
          Index: 0,
          IsNew: false,
          Nickname: 'General',
        }}
        user={user}
      />
    </div>
  )
}
