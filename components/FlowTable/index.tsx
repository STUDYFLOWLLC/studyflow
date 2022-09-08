/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classnames from 'classnames'
import FlowTableHeader from 'components/FlowTable/FlowTableHeader'
import useDashFlows from 'hooks/flows/useDashFlows'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FlowSortOptions, masterFlowSorter } from 'utils/flows/sortFlows'
import ActualFlowTable from './ActualFlowTable'
import EmptyTable from './EmptyTable'
import LoadMore from './LoadMore'

interface Props {
  setCurrentFlow?: (flowId: string) => void
}

export default function FlowList({ setCurrentFlow }: Props) {
  const router = useRouter()
  const query = router.asPath.split('#')[1]
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { coursesOnTerm } = useCoursesOnTerm(userDetails?.FK_Terms?.[0].TermID)

  const [mounted, setMounted] = useState(false)
  const [sortBy, setSortBy] = useState<FlowSortOptions>(
    FlowSortOptions.RECENTLY_VIEWED_DESCENDING,
  )
  const [groupBy, setGroupBy] = useState<'All' | number | 'Trash'>(
    Number(query) || 'All',
  )
  const [index, setIndex] = useState(0)

  const { dashFlows, dashFlowsLoading, size, setSize, isValidating } =
    useDashFlows(userDetails?.UserID, groupBy, false)

  useEffect(() => setMounted(true), [])

  useEffect(() => setIndex(0), [groupBy])

  useEffect(() => setGroupBy(Number(query) || 'All'), [query])

  if (!mounted) return null

  return (
    <div className="hidden sm:block">
      <div
        className={classnames(
          { 'border-gray-200': theme === 'light' },
          'align-middle inline-block min-w-full',
        )}
      >
        <div>
          <table className="min-w-full relative">
            <FlowTableHeader
              sortBy={sortBy}
              setSortBy={setSortBy}
              groupBy={groupBy}
              setGroupBy={setGroupBy}
            />
            <ActualFlowTable
              flows={masterFlowSorter(dashFlows, sortBy)}
              setCurrentFlow={setCurrentFlow}
              loading={userDetailsLoading || dashFlowsLoading}
              dashFlowsLoading={dashFlowsLoading}
            />
          </table>
          <LoadMore
            show={!dashFlowsLoading}
            isValidating={isValidating}
            size={size}
            setSize={setSize}
          />
          {/* {(dashFlows.length === 8 || index !== 0) && (
            <FlowPaginationButtons
              index={size}
              setIndex={setSize}
              flowLength={dashFlows.length}
            />
          )} */}
        </div>
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
