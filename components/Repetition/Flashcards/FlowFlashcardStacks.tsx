import AddFlashcardStack from 'components/Repetition/Flashcards/AddFlashcardStack'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import { useState } from 'react'
import FlowFlashcardStack from './FlowFlashcardStack'

interface Props {
  flowId: string
}

export default function FlowFlashcardStacks({ flowId }: Props) {
  const { flowDetails } = useFlowDetails(flowId)

  const [editing, setEditing] = useState('')

  console.log(flowDetails?.FK_FlashcardStacks)

  return (
    <div>
      <AddFlashcardStack
        flowId={flowId}
        editing={editing}
        setEditing={setEditing}
      />
      <div className="flex w-full flex-wrap justify-center">
        {flowDetails?.FK_FlashcardStacks.map((flashcardStack) => (
          <FlowFlashcardStack
            key={flashcardStack.FlashcardStackID}
            flowId={flowId}
            title={flashcardStack.Title}
            length={flashcardStack.FK_Flashcards.length}
            flashcardStackId={flashcardStack.FlashcardStackID}
            editing={editing}
            setEditing={setEditing}
          />
        ))}
      </div>
    </div>
  )
}
