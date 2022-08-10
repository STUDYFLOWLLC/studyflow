import { useUser } from '@supabase/supabase-auth-helpers/react'
import classnames from 'classnames'
import FlowTableHeader from 'components/FlowTable/FlowTableHeader'
import useDashFlows from 'hooks/flows/useDashFlows'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FlowSortOptions } from 'utils/flows/sortFlows'
import ActualFlowTable from './ActualFlowTable'
import EmptyTable from './EmptyTable'

interface Props {
  setCurrentFlow?: (flowId: string) => void
}

export default function FlowList({ setCurrentFlow }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { coursesOnTerm } = useCoursesOnTerm(userDetails?.FK_Terms?.[0].TermID)

  const [mounted, setMounted] = useState(false)
  const [sortBy, setSortBy] = useState<FlowSortOptions>(
    FlowSortOptions.RECENTLY_VIEWED_DESCENDING,
  )
  const [groupBy, setGroupBy] = useState<'All' | number | 'Trash'>('All')

  const { dashFlows, dashFlowsLoading } = useDashFlows(
    userDetails?.UserID,
    groupBy,
  )

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="hidden sm:block">
      <div
        className={classnames(
          { 'border-gray-200': theme === 'light' },
          'align-middle inline-block min-w-full border-b',
        )}
      >
        <table className="min-w-full relative">
          <FlowTableHeader
            sortBy={sortBy}
            setSortBy={setSortBy}
            groupBy={groupBy}
            setGroupBy={setGroupBy}
          />
          <ActualFlowTable
            flows={dashFlows}
            setCurrentFlow={setCurrentFlow}
            loading={userDetailsLoading || dashFlowsLoading}
            dashFlowsLoading={dashFlowsLoading}
          />
        </table>
        {!dashFlowsLoading && dashFlows.length === 0 && (
          <EmptyTable
            type={groupBy}
            courseName={
              coursesOnTerm.find((course) => course.CourseOnTermID === groupBy)
                ?.Nickname || 'You should add a nickname to your course!'
            }
          />
        )}
      </div>
    </div>
  )
}
