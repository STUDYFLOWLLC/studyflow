import { useUser } from '@supabase/supabase-auth-helpers/react'
import classnames from 'classnames'
import FlowTableHeader from 'components/FlowTable/FlowTableHeader'
import useDashFlows from 'hooks/flows/useDashFlows'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {
  FlowSortOptions,
  masterFlowFilterAndSorter,
  ViewTypes,
} from 'utils/flows/sortFlows'
import ActualFlowTable from './ActualFlowTable'
import EmptyTable from './EmptyTable'

interface Props {
  setCurrentFlow: (flowId: string) => void
}

export default function FlowList({ setCurrentFlow }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { dashFlows, dashFlowsLoading } = useDashFlows(userDetails?.UserID)

  const [mounted, setMounted] = useState(false)
  const [viewing, setViewing] = useState<ViewTypes>(ViewTypes.RECENTLY_VIEWED)

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
        <table className="min-w-full">
          <FlowTableHeader viewing={viewing} setViewing={setViewing} />
          <ActualFlowTable
            flows={masterFlowFilterAndSorter(
              dashFlows,
              FlowSortOptions.LAST_OPENED,
              viewing,
            )}
            setCurrentFlow={setCurrentFlow}
            loading={userDetailsLoading || dashFlowsLoading}
            dashFlowsLoading={dashFlowsLoading}
          />
        </table>
        {!dashFlowsLoading && dashFlows.length === 0 && <EmptyTable />}
      </div>
    </div>
  )
}
