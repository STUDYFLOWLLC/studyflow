import FlowHeader from 'components/Flow/FlowHeader'
import FlowProperties from 'components/Flow/FlowProperties'

interface Props {
  flowId: string
  saving: boolean
}

export default function FlowTop({ flowId, saving }: Props) {
  return (
    <>
      <FlowHeader flowId={flowId} saving={saving} />
      <FlowProperties flowId={flowId} saving={saving} />
    </>
  )
}
