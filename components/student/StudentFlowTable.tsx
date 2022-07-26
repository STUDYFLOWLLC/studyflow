import { useUser } from '@supabase/supabase-auth-helpers/react'
import useDashFlows from 'hooks/flows/useDashFlows'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import StudentActualFlowTable from './StudentActualFlowTable'
import StudentFlowTableHeader from './StudentFlowTableHeader'

interface Props {
  setCurrentFlow: (flowId: string) => void
}

export default function StudentFlowTable({ setCurrentFlow }: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { coursesOnTerm } = useCoursesOnTerm(userDetails?.FK_Terms?.[0].TermID)
  const { dashFlows, dashFlowsLoading } = useDashFlows(userDetails?.UserID)
  return (
    <div className="hidden sm:block">
      <div className="align-middle inline-block min-w-full border-b border-gray-200">
        <table className="min-w-full">
          <StudentFlowTableHeader />
          <StudentActualFlowTable
            setCurrentFlow={setCurrentFlow}
            flows={dashFlows}
          />
        </table>
      </div>
    </div>
  )
}
