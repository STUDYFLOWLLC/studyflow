import { BanIcon } from '@heroicons/react/outline'
import DisplayFlowBody from 'components/Social/Flow/DisplayFlowBody'
import DisplayFlowHeader from 'components/Social/Flow/DisplayFlowHeader'
import { PublicFlowDetail } from 'hooks/flows/getFlowDetails'
import { useEffect, useState } from 'react'
import { Block, FlowVisibility } from 'types/Flow'
import DisplayPrivateFlow from './DisplayPrivateFlow'

interface Props {
  flow: PublicFlowDetail
}

export default function DisplayFlow({ flow }: Props) {
  const [blocks, setBlocks] = useState<Block[]>(
    JSON.parse(flow.Body) as Block[],
  )

  useEffect(() => setBlocks(JSON.parse(flow.Body) as Block[]), [flow])

  if (flow.Visibility === FlowVisibility.PUBLIC) {
    return (
      <>
        <DisplayFlowHeader flow={flow} />
        <DisplayFlowBody blocks={blocks} />
      </>
    )
  }

  if (flow.Visibility === FlowVisibility.PRIVATE) {
    return <DisplayPrivateFlow flow={flow} blocks={blocks} />
  }

  if (flow.Visibility === FlowVisibility.HIDDEN) {
    return (
      <div>
        <DisplayFlowHeader flow={flow} />
        <div className="w-72 mx-auto flex flex-col items-center">
          <BanIcon className="w-12 h-12" />
          <p>This flow is hidden. Sorry!</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <DisplayFlowHeader flow={flow} />
      <DisplayFlowBody blocks={blocks} />
    </>
  )
}
