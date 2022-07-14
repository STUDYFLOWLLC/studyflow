import { useUser } from '@supabase/supabase-auth-helpers/react'
import classnames from 'classnames'
import useDashFlows from 'hooks/flows/useDashFlows'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import EmptyTable from './EmptyTable'
import FlowTableLine from './FlowTableLine'
import LoadingLine from './LoadingLine'

interface Props {
  setCurrentFlow: (flowId: string) => void
}

export default function FlowList({ setCurrentFlow }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { dashFlows, dashFlowsLoading } = useDashFlows(userDetails?.UserID)

  const [mounted, setMounted] = useState(false)

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
          <thead>
            <tr
              className={classnames(
                { 'border-gray-200': theme === 'light' },
                'border-t',
              )}
            >
              <th
                className={classnames(
                  {
                    'border-gray-200 bg-gray-50 text-gray-500':
                      theme === 'light',
                  },
                  'px-6 py-3 border-b text-left text-xs font-medium uppercase tracking-wider',
                )}
              >
                <span className="lg:pl-2">Recent Flows</span>
              </th>
              <th
                className={classnames(
                  {
                    'border-gray-200 bg-gray-50 text-gray-500':
                      theme === 'light',
                  },
                  'hidden md:table-cell px-6 py-3 border-b text-center text-xs font-medium uppercase tracking-wider',
                )}
              >
                Date
              </th>
              <th
                className={classnames(
                  {
                    'border-gray-200 bg-gray-50 text-gray-500':
                      theme === 'light',
                  },
                  'hidden md:table-cell px-1 py-3 border-b text-xs font-medium uppercase tracking-wider',
                )}
              >
                Next Review
              </th>
              <td
                className={classnames(
                  {
                    'border-gray-200 bg-gray-50 text-gray-500':
                      theme === 'light',
                  },
                  'md:table-cell pr-6 py-3 border-b text-right text-xs font-medium  uppercase tracking-wider',
                )}
              />
            </tr>
          </thead>
          <tbody
            className={classnames(
              {
                'bg-white divide-y divide-gray-100': theme !== 'dark',
              },
              { 'divide-y divide-gray-200': theme === 'dark' },
            )}
          >
            {!dashFlowsLoading &&
              dashFlows.length > 0 &&
              dashFlows.map((flow) => (
                <FlowTableLine
                  setCurrentFlow={setCurrentFlow}
                  loading={userDetailsLoading || dashFlowsLoading}
                  key={flow.FlowID}
                  flowID={flow.FlowID}
                  bgColorClass={flow.FK_CourseOnTerm.Color}
                  title={flow.Title}
                  type={flow.Type}
                  course={
                    flow.FK_CourseOnTerm.Nickname ||
                    flow.FK_CourseOnTerm.FK_Course.Code
                  }
                  displayDate={new Date(flow.UserEnteredDate)
                    .toDateString()
                    .slice(0, 10)}
                  nextReview="in 3 days"
                  visibility={flow.Visibility}
                />
              ))}

            {dashFlowsLoading &&
              [...Array(8).keys()].map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <LoadingLine key={index} />
              ))}
          </tbody>
        </table>
        {!dashFlowsLoading && dashFlows.length === 0 && <EmptyTable />}
      </div>
    </div>
  )
}
