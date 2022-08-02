/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import DeleteStack from 'components/Repetition/Flashcards/DeleteStack'
import FlashcardReviewModal from 'components/Repetition/Flashcards/ReviewModal/FlashcardReviewModal'
import useFlashcardStack from 'hooks/repetition/useFlashcardStack'
import { useState } from 'react'

interface Props {
  flowId: string
  flashcardStackId: string
  editing: string
  setEditing: (editing: string) => void
  title?: string
  length?: number
}

export default function FlowFlashcardStack({
  flowId,
  flashcardStackId,
  editing,
  setEditing,
  title,
  length,
}: Props) {
  const { flashcardStack, flashcardStackLoading, mutateFlashcardStack } =
    useFlashcardStack(flashcardStackId)

  const [reviewing, setReviewing] = useState(false)

  return (
    <div className="p-2">
      <FlashcardReviewModal
        flashcardStackId={flashcardStackId}
        editing={editing}
        reviewing={reviewing}
        setEditing={setEditing}
        setReviewing={setReviewing}
      />
      <div className="border py-1 px-2 rounded-md w-72 relative">
        <div className="absolute top-0 right-0">
          <DeleteStack flowId={flowId} flashcardStackId={flashcardStackId} />
        </div>
        <h3 className="m-0 p-0 truncate flex items-baseline">
          {title || flashcardStack?.Title || 'Untitled'}
          <p className="m-0 ml-2 p-0 text-sm">
            {flashcardStack?.FK_Flashcards.length || length || 0} cards
          </p>
        </h3>
        <div className="w-full flex justify-center">
          <span
            className="cursor-pointer uppercase text-sm font-medium ml-4 p-0 m-0"
            onClick={() => setReviewing(true)}
            onKeyDown={() => setReviewing(true)}
          >
            Review
          </span>
          <span
            className="cursor-pointer uppercase text-sm font-medium ml-4 p-0 m-0"
            onClick={() => setEditing(flashcardStackId)}
            onKeyDown={() => setEditing(flashcardStackId)}
          >
            Edit
          </span>
        </div>
      </div>
    </div>
  )
}
