import AddRepetition from 'components/Repetition/Flow/AddRepetition'
import CreateRepetitionModal from 'components/Repetition/Flow/CreateRepetitionModal'
import useFlowDetails from 'hooks/flows/useFlowDetails'

import { useState } from 'react'
import FlowRepetition from './FlowRepetition'

interface Props {
  flowId: string
}

export default function FlowRepetitions({ flowId }: Props) {
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)

  const [currentRepetition, setCurrentRepetition] = useState<string | null>(
    null,
  )

  return (
    <div>
      <CreateRepetitionModal
        flowId={flowId}
        currentRepetition={currentRepetition}
        setCurrentRepetition={setCurrentRepetition}
      />

      {flowDetails?.FK_Repetitions?.map((repetition) => (
        <FlowRepetition
          key={repetition.RepetitionID}
          flowId={flowId}
          repetitionId={repetition.RepetitionID}
        />
      ))}
      <AddRepetition
        flowId={flowId}
        setCurrentRepetition={setCurrentRepetition}
      />
    </div>
  )
}
