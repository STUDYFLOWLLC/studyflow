import FlashcardStack from 'components/Repetition/Flashcards/FlashcardStack'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { Task } from 'hooks/tasks/useTasks'

interface Props {
  flowId: string
  repetitionId: string
}

export default function FlowRepetition({ flowId, repetitionId }: Props) {
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)
  const { repetitionDetails, mutateRepetitionDetails } =
    useRepetitionDetails(repetitionId)

  console.log(repetitionDetails)

  return (
    <div className="w-4/5 mx-auto border h-24 overflow-y-auto relative">
      <div className="w-1/2">
        <BasicDisplayTasks
          tasks={
            (repetitionDetails?.FK_Tasks.map((task) => ({
              ...task,
              FK_CourseOnTerm: repetitionDetails?.FK_Tasks,
            })) || []) as unknown as Task[]
          }
          cute
          readOnly
        />
      </div>
      {repetitionDetails?.FK_FlashcardStack && (
        <div className="absolute bottom-3 right-4 flex my-auto">
          <FlashcardStack
            cards={repetitionDetails.FK_FlashcardStack.FK_Flashcards}
            hideControls
            disabled
            cute
          />
          <div className="ml-3">
            <p className="cursor-pointer m-0 mb-2 p-0 uppercase text-xs">
              Edit
            </p>
            <p className="cursor-pointer m-0 p-0 uppercase text-xs">Review</p>
          </div>
        </div>
      )}
    </div>
  )
}
