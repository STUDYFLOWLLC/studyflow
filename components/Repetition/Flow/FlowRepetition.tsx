import { EyeOffIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import FlashcardStack from 'components/Repetition/Flashcards/FlashcardStack'
import FlashcardReviewModal from 'components/Repetition/Flashcards/ReviewModal/FlashcardReviewModal'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { Task } from 'hooks/tasks/useTasks'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import abbreviateDate from 'utils/abbreviateDate'

interface Props {
  flowId: string
  repetitionId: string
}

export default function FlowRepetition({ flowId, repetitionId }: Props) {
  const { theme } = useTheme()
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)
  const {
    repetitionDetails,
    repetitionDetailsLoading,
    mutateRepetitionDetails,
  } = useRepetitionDetails(repetitionId)
  const { flashcardStack, mutateFlashcardStack } = useFlashcardStack(
    repetitionDetails?.FK_FlashcardStackID,
  )

  console.log(repetitionDetails)

  const [mounted, setMounted] = useState(false)
  const [repetitionHidden, setRepetitionHidden] = useState(false)
  const [editing, setEditing] = useState('')
  const [reviewing, setReviewing] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (repetitionHidden)
    return (
      <span
        className={classNames(
          { 'hover:bg-gray-200': theme === 'light' },
          { 'hover:bg-slate-600': theme === 'dark' },
          'uppercase text-sm font-medium cursor-pointer rounded-md px-0.5 py-0.5',
        )}
        onClick={() => setRepetitionHidden(false)}
        onKeyDown={() => setRepetitionHidden(false)}
      >
        Show repetition
      </span>
    )

  return (
    <div
      className={classNames(
        'w-full flex justify-between overflow-y-auto relative',
      )}
    >
      <FlashcardReviewModal
        flowId={flowId}
        flashcardStackId={repetitionDetails?.FK_FlashcardStackID || ''}
        editing={editing}
        setEditing={setEditing}
        reviewing={reviewing}
        setReviewing={setReviewing}
      />
      <div className="w-1/2 pl-2">
        <div className="flex h-16 justify-center absolute top-0 right-0">
          <EyeOffIcon
            className="w-5 h-5 cursor-pointer"
            onClick={() => setRepetitionHidden(true)}
          />
        </div>
        <p className="p-0 m-0 font-semibold">
          {repetitionDetails?.FK_FlashcardStack.Title}
          <span className="text-sm text-info/70 ml-2">
            created{' '}
            {abbreviateDate(new Date(repetitionDetails?.CreatedTime || 0))}
          </span>
        </p>
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
      {flashcardStack?.FK_Flashcards && (
        <div className="my-auto w-1/2 ">
          <div className="mb-6 flex justify-center items-center">
            <button
              type="button"
              className={classNames(
                { 'hover:bg-gray-200': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'uppercase text-md mx-2 font-medium cursor-pointer rounded-md px-1 py-0.5',
              )}
              onClick={() =>
                setEditing(repetitionDetails?.FK_FlashcardStackID || '')
              }
              onKeyDown={() =>
                setEditing(repetitionDetails?.FK_FlashcardStackID || '')
              }
            >
              Edit
            </button>
            <button
              type="button"
              className={classNames(
                { 'hover:bg-gray-200': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'uppercase text-md mx-2 font-medium cursor-pointer rounded-md px-0.5 py-0.5',
              )}
            >
              Review
            </button>
          </div>
          <FlashcardStack
            cards={flashcardStack.FK_Flashcards}
            hideControls
            disabled
            cute
          />
        </div>
      )}
    </div>
  )
}
