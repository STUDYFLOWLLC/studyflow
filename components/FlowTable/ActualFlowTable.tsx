import classNames from 'classnames'
import { DashFlow } from 'hooks/flows/useDashFlows'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import FlowTableLine from './FlowTableLine'
import LoadingLine from './LoadingLine'

interface Props {
  flows: DashFlow[]
  setCurrentFlow: (flowId: string) => void
  loading: boolean
  dashFlowsLoading: boolean
}

export default function ActualFlowTable({
  flows,
  setCurrentFlow,
  loading,
  dashFlowsLoading,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <tbody
      className={classNames(
        {
          'bg-white divide-y divide-gray-100': theme !== 'dark',
        },
        { 'divide-y divide-gray-200': theme === 'dark' },
      )}
    >
      {flows.length > 0 &&
        flows.map((flow) => (
          <FlowTableLine
            key={flow.FlowID}
            flowID={flow.FlowID}
            setCurrentFlow={setCurrentFlow}
            loading={loading}
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
  )
}
