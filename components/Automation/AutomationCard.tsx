import { useUser } from '@supabase/supabase-auth-helpers/react'
import useAutomationDetails, {
  CourseOnTermAutomation,
} from 'hooks/automation/useAutomationDetails'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import AutomationCardBody from './AutomationCardBody'
import CreateAutomationOnCourseOnTerm from './CreateAutomationOnCourseOnTerm'

interface Props {
  courseOnTerm: CourseOnTerm
  courseOnTermAutomation: CourseOnTermAutomation | undefined
}

export default function AutomationCard({
  courseOnTerm,
  courseOnTermAutomation,
}: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { automationDetails, automationDetailsLoading } = useAutomationDetails(
    userDetails?.UserID,
  )

  return (
    <div className="w-96 border rounded-md mx-12 my-8 px-4 py-2 prose">
      <div className="mb-2 flex items-baseline justify-between">
        <h3 className="p-0 m-0">
          {courseOnTerm.Nickname || courseOnTerm.FK_Course?.Code}
        </h3>
        <p className="p-0 m-0 cursor-pointer">Help</p>
      </div>
      {courseOnTermAutomation === undefined ? (
        <CreateAutomationOnCourseOnTerm courseOnTerm={courseOnTerm} />
      ) : (
        <AutomationCardBody courseOnTermAutomation={courseOnTermAutomation} />
      )}
    </div>
  )
}
