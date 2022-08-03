import ActualFlowTable from 'components/FlowTable/ActualFlowTable'
import { DashFlow } from 'hooks/flows/useDashFlows'

interface Props {
  PublicFlows: DashFlow[]
}

export default function PublicFlowsDisplay({ PublicFlows }: Props) {
  return (
    <table className="mt-2 w-full">
      <ActualFlowTable flows={PublicFlows} social />
    </table>
  )
}
