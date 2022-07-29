import DisplayFlowBody from 'components/Social/Flow/DisplayFlowBody'
import DisplayFlowHeader from 'components/Social/Flow/DisplayFlowHeader'
import { PublicFlowDetail } from 'hooks/flows/getFlowDetails'
import { useEffect, useState } from 'react'
import { Block } from 'types/Flow'

interface Props {
  flow: PublicFlowDetail
}

export default function DisplayFlow({ flow }: Props) {
  const [blocks, setBlocks] = useState<Block[]>(
    JSON.parse(flow.Body) as Block[],
  )

  useEffect(() => setBlocks(JSON.parse(flow.Body) as Block[]), [flow])

  return (
    <>
      <DisplayFlowHeader flow={flow} />
      <DisplayFlowBody blocks={blocks} />
    </>
  )
}
