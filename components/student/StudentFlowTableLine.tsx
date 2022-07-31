import { DashFlow } from 'hooks/flows/useDashFlows'

interface Props {
  setCurrentFlow: (flowId: string) => void
  flow: DashFlow
}

export default function StudentFlowTableLine({ setCurrentFlow, flow }: Props) {
  return <div>{flow.Title}</div>
}
