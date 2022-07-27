import { DashFlow } from 'hooks/flows/useDashFlows'
import StudentFlowTableLine from './StudentFlowTableLine'

interface Props {
  setCurrentFlow: (flowId: string) => void
  flows: DashFlow[]
}
export default function StudentActualFlowTable({
  setCurrentFlow,
  flows,
}: Props) {
  return (
    <div>
      {flows.length > 0 &&
        flows.map((flow) => (
          <StudentFlowTableLine
            key={flow.FlowID}
            flow={flow}
            setCurrentFlow={setCurrentFlow}
          />
        ))}
    </div>
  )
}
