import { User } from '@supabase/supabase-auth-helpers/nextjs'
import Courses from 'components/Tasks/TasksHeader/Courses'
import Today from 'components/Tasks/TasksHeader/Today'
import Upcoming from 'components/Tasks/TasksHeader/Upcoming'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useTermDetails from 'hooks/school/useTermDetails'
import useUserDetails from 'hooks/useUserDetails'

interface Props {
  user: User
  viewing: string
  setViewing: (viewing: string) => void
  coursesOnTerm: CourseOnTerm[]
}

export default function TaskHeader({
  user,
  viewing,
  setViewing,
  coursesOnTerm,
}: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { termDetails, termDetailsLoading } = useTermDetails(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  return (
    <div className="flex justify-center mt-6">
      <Today setViewing={setViewing} viewing={viewing} />
      <Upcoming setViewing={setViewing} viewing={viewing} />
      <Courses
        setViewing={setViewing}
        viewing={viewing}
        coursesOnTerm={coursesOnTerm}
      />
    </div>
  )
}
