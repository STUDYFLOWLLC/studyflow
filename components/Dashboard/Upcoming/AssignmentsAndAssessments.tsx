import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useDashFlows, { DashFlow } from 'hooks/flows/useDashFlows'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { FlowSortOptions, masterFlowSorter } from 'utils/flows/sortFlows'
import Pin from './Pin'

interface Props {
  setCurrentFlow: (flowId: string) => void
}

export default function AssignmentsAndAssessments({ setCurrentFlow }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { dashFlows, dashFlowsLoading } = useDashFlows(
    userDetails?.UserID,
    undefined,
    true,
  )

  const [mounted, setMounted] = useState(false)
  const [sorted, setSorted] = useState<DashFlow[]>([])
  const [tempHide, setTempHide] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(
    () =>
      setSorted(masterFlowSorter(dashFlows, FlowSortOptions.BY_DATE_ASCENDING)),
    [dashFlowsLoading],
  )

  if (!mounted) return null

  if (tempHide)
    return (
      <div className="relative my-1">
        <span
          className={classNames(
            { 'hover:bg-gray-200': theme === 'light' },
            { 'hover:bg-slate-600': theme === 'dark' },
            'cursor-pointer rounded-md px-1.5 py-0.5 absolute right-5 uppercase text-sm text-info',
          )}
          onClick={() => setTempHide(false)}
          onKeyDown={() => setTempHide(false)}
        >
          Show
        </span>
        <span className="ml-8 text-xs leading-none tracking-wider uppercase font-medium">
          Upcoming
        </span>
      </div>
    )

  return (
    <div className="my-2 relative">
      <span
        className={classNames(
          { 'hover:bg-gray-200': theme === 'light' },
          { 'hover:bg-slate-600': theme === 'dark' },
          'cursor-pointer rounded-md px-1.5 py-0.5 absolute right-5 uppercase text-sm text-info',
        )}
        onClick={() => setTempHide(true)}
        onKeyDown={() => setTempHide(true)}
      >
        Hide
      </span>
      <span className="ml-8 text-xs tracking-wider uppercase font-medium">
        Upcoming
      </span>
      {dashFlowsLoading && (
        <div className="max-w-3xl mx-auto flex flex-wrap justify-around mb-4">
          {[1, 2, 3, 4].map((_) => (
            <Skeleton key={_} className="w-40 h-12 m-2" />
          ))}
        </div>
      )}
      {!dashFlowsLoading && sorted.length === 0 && (
        <div className="prose mx-auto mb-4 flex flex-col items-center">
          <h2 className="mt-0 mb-2">Relax.</h2>
          <div className="flex items-center">
            <p className="m-0 text-center">
              Nothing upcoming. Use the create button or visit the calendar to
              create upcoming events.
            </p>
          </div>
        </div>
      )}
      {!dashFlowsLoading && dashFlows.length > 0 && (
        <div className="max-w-3xl mx-auto flex flex-wrap justify-around mb-4">
          {sorted.map((flow) => (
            <Pin
              flow={flow}
              key={flow.FlowID}
              setCurrentFlow={setCurrentFlow}
            />
          ))}
        </div>
      )}
    </div>
  )
}
function sortFlows(
  dashFlows: import('hooks/flows/useDashFlows').DashFlow[],
  arg1: string,
) {
  throw new Error('Function not implemented.')
}
