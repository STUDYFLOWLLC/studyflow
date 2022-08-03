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

      {flowDetails?.FK_Repetition && (
        <FlowRepetition
          key={flowDetails.FK_Repetition.RepetitionID}
          flowId={flowId}
          repetitionId={flowDetails.FK_Repetition.RepetitionID}
        />
      )}
      {!flowDetails?.FK_Repetition && (
        <AddRepetition
          flowId={flowId}
          setCurrentRepetition={setCurrentRepetition}
        />
      )}
    </div>
  )
}
