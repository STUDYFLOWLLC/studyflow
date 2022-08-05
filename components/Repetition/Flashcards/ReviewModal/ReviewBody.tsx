import classNames from 'classnames'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import createFlashcardStackReview from 'hooks/repetition/reviewHandlers'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { useState } from 'react'
import abbreviateDate from 'utils/abbreviateDate'
import findNextReviewTask from 'utils/repetition/findNextReviewTask'
import FlashcardReviewLine from './FlashcardReviewLine'
import FlashcardStackReviewHeader from './FlashcardStackReviewHeader'

interface Props {
  repetitionId: string
}

export default function ReviewBody({ repetitionId }: Props) {
  const { repetitionDetails, mutateRepetitionDetails } =
    useRepetitionDetails(repetitionId)

  const [creating, setCreating] = useState(false)
  const [reviewExpanded, setReviewExpanded] = useState(false)

  const nextReviewTask = findNextReviewTask(repetitionDetails)
  const reviewDue =
    nextReviewTask &&
    nextReviewTask.DueDate &&
    new Date().getTime() - new Date(nextReviewTask.DueDate).getTime() > 0

  return (
    <div className="border-t mt-4 pt-4 w-full px-4">
      <h3 className="m-0 p-0 flex items-baseline">
        Reviews{' '}
        {nextReviewTask !== false ? (
          <p className="ml-2 p-0 m-0 font-medium text-sm text-info">
            Next review:{' '}
            <span className={classNames({ 'text-red-400': reviewDue })}>
              {abbreviateDate(new Date(nextReviewTask?.DueDate || 0))}
            </span>
          </p>
        ) : (
          <p className="ml-2 p-0 m-0 font-medium text-sm text-info">
            No review scheduled
          </p>
        )}
      </h3>
      {repetitionDetails?.FK_FlashcardStack.FK_FlashcardStackReviews[0]
        .EndTime && (
        <div className="flex flex-col items-center mb-4">
          <div>
            {reviewDue ? (
              <button
                type="button"
                className="mx-auto alex-button"
                disabled={creating}
                onClick={() =>
                  createFlashcardStackReview(
                    repetitionDetails,
                    mutateRepetitionDetails,
                    setCreating,
                  )
                }
                onKeyDown={() =>
                  createFlashcardStackReview(
                    repetitionDetails,
                    mutateRepetitionDetails,
                    setCreating,
                  )
                }
              >
                Review now <ButtonSpinner show={creating} />
              </button>
            ) : (
              <button
                type="button"
                className="mx-auto alex-button"
                onClick={() =>
                  createFlashcardStackReview(
                    repetitionDetails,
                    mutateRepetitionDetails,
                    setCreating,
                  )
                }
                onKeyDown={() =>
                  createFlashcardStackReview(
                    repetitionDetails,
                    mutateRepetitionDetails,
                    setCreating,
                  )
                }
              >
                Start extra review <ButtonSpinner show={creating} />
              </button>
            )}
          </div>
        </div>
      )}
      <div className="border-y my-2 py-2">
        {repetitionDetails?.FK_FlashcardStack.FK_FlashcardStackReviews.map(
          (flashcardStackReview) => (
            <div
              key={flashcardStackReview.FlashcardStackReviewID}
              className="overflow-y-auto max-h-24"
            >
              <FlashcardStackReviewHeader
                repetitionId={repetitionId}
                flashcardStackReview={flashcardStackReview}
              />
              {!flashcardStackReview.EndTime && (
                <div>
                  {(flashcardStackReview.FK_FlashcardReviews || []).map(
                    (flashcardReview) => (
                      <FlashcardReviewLine
                        key={flashcardReview.FlashcardReviewID}
                        flashcardReview={flashcardReview}
                      />
                    ),
                  )}
                  {flashcardStackReview.FK_FlashcardReviews.length === 0 && (
                    <p className="px-0 m-0 py-1 text-sm">
                      No reviews yet! Use a flashcard for a review to show.
                    </p>
                  )}
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  )
}
