import { useUser } from '@supabase/supabase-auth-helpers/react'
import AutomationCard from 'components/Automation/AutomationCard'
import useAutomationDetails from 'hooks/automation/useAutomationDetails'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'

export default function AutomationCards() {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { coursesOnTerm } = useCoursesOnTerm(userDetails?.FK_Terms?.[0]?.TermID)
  const { automationDetails, automationDetailsLoading } = useAutomationDetails(
    userDetails?.UserID,
  )

  return (
    <div className="w-full mb-36 flex flex-wrap justify-center">
      {coursesOnTerm.map((courseOnTerm) => (
        <AutomationCard
          key={courseOnTerm.CourseOnTermID}
          courseOnTerm={courseOnTerm}
          courseOnTermAutomation={automationDetails?.CourseOnTermAutomations.find(
            (cota) => cota.FK_CourseOnTermID === courseOnTerm.CourseOnTermID,
          )}
        />
      ))}
    </div>
  )
}
