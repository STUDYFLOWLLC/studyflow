import FlowHeader from 'components/Flow/FlowHeader'
import FlowProperties from 'components/Flow/FlowProperties'
import FlowTask from 'components/Flow/FlowTask'
import FlowFlashcardStacks from 'components/Repetition/Flashcards/FlowFlashcardStacks'
import { useEffect, useState } from 'react'

export interface Props {
  flowId: string
  closeModal: () => void
  flowTitle: string
  saving: boolean
}

export default function FlowTop({
  flowId,
  closeModal,
  flowTitle,
  saving,
}: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <FlowHeader flowId={flowId} closeModal={closeModal} saving={saving} />
      <div className="border-b pb-4 mb-4 prose max-w-3xl mx-auto">
        <FlowProperties flowId={flowId} saving={saving} />
        <FlowTask flowId={flowId} flowTitle={flowTitle} />
        <FlowFlashcardStacks flowId={flowId} />
      </div>
    </>
  )
}
