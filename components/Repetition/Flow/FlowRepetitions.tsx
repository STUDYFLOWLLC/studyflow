import AddRepetition from 'components/Repetition/Flow/AddRepetition'
import CreateRepetitionModal from 'components/Repetition/Flow/CreateRepetitionModal'

import { useState } from 'react'

interface Props {
  flowId: string
}

export default function FlowRepetitions({ flowId }: Props) {
  const [currentRepetition, setCurrentRepetition] = useState<string | null>(
    null,
  )

  return (
    <div>
      <AddRepetition
        flowId={flowId}
        setCurrentRepetition={setCurrentRepetition}
      />
      <CreateRepetitionModal
        flowId={flowId}
        currentRepetition={currentRepetition}
        setCurrentRepetition={setCurrentRepetition}
      />
    </div>
  )
}
