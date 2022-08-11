/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { EyeOffIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import FlashcardStack from 'components/Repetition/Flashcards/FlashcardStack'
import FlashcardReviewModal from 'components/Repetition/Flashcards/ReviewModal/FlashcardReviewModal'
import LoadWithText from 'components/spinners/LoadWithText'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import useFlowDetails, { FlowTask } from 'hooks/flows/useFlowDetails'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { Task } from 'hooks/tasks/useTasks'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import abbreviateDate from 'utils/abbreviateDate'
import DeleteRepetition from './DeleteRepetition'

interface Props {
  flowId: string
  repetitionId: string
}

export default function FlowRepetition({ flowId, repetitionId }: Props) {
  const { theme } = useTheme()
  const { flowDetails } = useFlowDetails(flowId)
  const { repetitionDetails, repetitionDetailsLoading } =
    useRepetitionDetails(repetitionId)
  const { flashcardStack, flashcardStackLoading } = useFlashcardStack(
    repetitionDetails?.FK_FlashcardStackID,
  )

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
        Show {flashcardStack?.Title}
      </span>
    )

  if (repetitionDetailsLoading || flashcardStackLoading) {
    return (
      <div className="flex flex-col items-center">
        <LoadWithText size={SpinnerSizes.medium} text="Loading repetition" />
      </div>
    )
  }

  return (
    <div
      className={classNames(
        'w-full flex justify-between overflow-y-auto relative',
      )}
    >
      <FlashcardReviewModal
        flowId={flowId}
        repetitionId={repetitionId}
        flashcardStackId={repetitionDetails?.FK_FlashcardStackID || ''}
        editing={editing}
        setEditing={setEditing}
        reviewing={reviewing}
        setReviewing={setReviewing}
      />
      <div className="w-1/2 pl-2">
        <div className="flex h-16 justify-center absolute top-0 right-0">
          <DeleteRepetition flowId={flowId} repetitionId={repetitionId} />
          <EyeOffIcon
            className="mt-0.5 w-5 h-5 cursor-pointer"
            onClick={() => setRepetitionHidden(true)}
            onKeyDown={() => setRepetitionHidden(true)}
          />
        </div>
        <p
          className="p-0 m-0 font-semibold cursor-pointer"
          onClick={() => {
            setEditing(flashcardStack?.FlashcardStackID || '')
          }}
          onKeyDown={() => {
            setEditing(flashcardStack?.FlashcardStackID || '')
          }}
        >
          {repetitionDetails?.FK_FlashcardStack.Title}
          <span className="text-sm text-info/70 ml-2">
            started{' '}
            {abbreviateDate(new Date(repetitionDetails?.CreatedTime || 0))}
          </span>
        </p>
        <BasicDisplayTasks
          tasks={
            (repetitionDetails?.FK_Tasks.map((task: FlowTask) => ({
              ...task,
              FK_CourseOnTerm: repetitionDetails?.FK_Tasks,
            })) || []) as unknown as Task[]
          }
          groupBy={flowDetails?.FK_CourseOnTerm.CourseOnTermID || 0}
          repetitionId={repetitionId}
          cute
          readOnly
          shouldNotUseUndo
          showCompleted
        />
      </div>
      {flashcardStack?.FK_Flashcards && (
        <div className="my-auto mx-auto">
          <div className="mb-8 flex justify-center items-center">
            <button
              type="button"
              className={classNames(
                { 'hover:bg-gray-200': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'uppercase text-md mx-2 font-medium cursor-pointer rounded-md px-2 py-0.5',
              )}
              onClick={() => {
                setEditing(repetitionDetails?.FK_FlashcardStackID || '')
                setReviewing(false)
              }}
              onKeyDown={() => {
                setEditing(repetitionDetails?.FK_FlashcardStackID || '')
                setReviewing(false)
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className={classNames(
                { 'hover:bg-gray-200': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'uppercase text-md mx-2 font-medium cursor-pointer rounded-md px-2 py-0.5',
              )}
              onClick={() => {
                setEditing(flashcardStack?.FlashcardStackID)
                setReviewing(true)
              }}
              onKeyDown={() => {
                setEditing(flashcardStack?.FlashcardStackID)
                setReviewing(true)
              }}
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
