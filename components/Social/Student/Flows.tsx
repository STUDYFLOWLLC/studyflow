import FlowTable from 'components/FlowTable'
import { PublicUser } from 'types/Social'

interface Props {
  PublicUser: PublicUser | undefined
}

export default function Flows({ PublicUser }: Props) {
  return (
    <div>
      <FlowTable />
    </div>
  )
}
