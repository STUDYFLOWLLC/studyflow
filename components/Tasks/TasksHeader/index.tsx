import { User } from '@supabase/supabase-auth-helpers/nextjs'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useTermDetails from 'hooks/school/useTermDetails'
import useUserDetails from 'hooks/useUserDetails'
import Courses from './Courses'
import Today from './Today'
import Upcoming from './Upcoming'

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

  console.log(coursesOnTerm)

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
