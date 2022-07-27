import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import StudentFlowTable from 'components/student/StudentFlowTable'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface Props {
  user: User
}

export default function NicknameOrTitle({ user }: Props) {
  const router = useRouter()
  const { NicknameOrTitle } = router.query // charles use this to find their course on term

  const { userDetails } = useUserDetails(user.id)
  const { coursesOnTerm } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
    (cot: CourseOnTerm) =>
      cot.Nickname.toLocaleLowerCase() ===
        NicknameOrTitle?.toString().toLocaleLowerCase() ||
      cot.FK_Course?.Title.toLocaleLowerCase() ===
        NicknameOrTitle?.toString().toLocaleLowerCase(),
  ) // checkout of the optional parameter I added to the hook. It's a function that takes a courseOnTerm and returns true if the courseOnTerm matches the NicknameOrTitle

  const [currentFlow, setCurrentFlow] = useState<string>('')

  return (
    <div>
      <StudentFlowTable setCurrentFlow={setCurrentFlow} />
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
