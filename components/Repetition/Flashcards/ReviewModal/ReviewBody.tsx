import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid'
import classNames from 'classnames'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import { format } from 'date-fns'
import createFlashcardStackReview from 'hooks/repetition/reviewHandlers'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { useState } from 'react'
import { FlashcardStatus } from 'types/Repetition'
import findNextReview from 'utils/repetition/findNextReview'

interface Props {
  repetitionId: string
}

export default function ReviewBody({ repetitionId }: Props) {
  const { repetitionDetails, mutateRepetitionDetails } =
    useRepetitionDetails(repetitionId)

  const [creating, setCreating] = useState(false)
  const [reviewExpanded, setReviewExpanded] = useState(false)

  const nextReview = findNextReview(repetitionDetails)

  return (
    <div className="border-t mt-4 pt-4">
      <h3 className="m-0 p-0 flex items-baseline">
        Reviews{' '}
        {nextReview !== false ? (
          <p className="ml-2 p-0 m-0 font-medium text-sm text-info">
            Next review: {nextReview}
          </p>
        ) : (
          <p className="ml-2 p-0 m-0 font-medium text-sm text-info">
            No review scheduled
          </p>
        )}
      </h3>
      {(repetitionDetails?.FK_FlashcardStack?.FK_FlashcardStackReviews
        ?.length || []) > 0 ? (
        <div className="divide-y">
          {repetitionDetails?.FK_FlashcardStack.FK_FlashcardStackReviews.map(
            (flashcardStackReview) => (
              <div
                key={flashcardStackReview.FlashcardStackReviewID}
                className={classNames(
                  { 'h-24': !reviewExpanded && flashcardStackReview.EndTime },
                  'overflow-y-auto',
                )}
              >
                <p className="p-0 m-0 font-semibold flex items-center">
                  {format(
                    new Date(flashcardStackReview.CreatedTime || 0),
                    'MM/dd',
                  )}{' '}
                  <span className="uppercase text-sm">
                    {!flashcardStackReview.EndTime ? (
                      <div className="flex items-baseline">
                        <span className="text-red-400 ml-3">active</span>
                        <button
                          type="button"
                          className="ml-2 text-green-400 border border-green-400 rounded-md hover:text-white hover:bg-green-400 bg-white py-0 px-1 transition-all duration-200"
                        >
                          Finish review
                        </button>
                      </div>
                    ) : (
                      <span className="text-green-400">complete</span>
                    )}
                  </span>
                </p>
                <div>
                  {(flashcardStackReview.FK_FlashcardReviews || []).map(
                    (flashcardReview) => (
                      <div
                        key={flashcardReview.FlashcardReviewID}
                        className="flex items-center"
                      >
                        {flashcardReview?.Status ===
                          FlashcardStatus.CORRECT && (
                          <div className="w-4 h-4">
                            <CheckCircleIcon className="text-green-500" />
                          </div>
                        )}
                        {flashcardReview?.Status ===
                          FlashcardStatus.INCORRECT && (
                          <div className="w-4 h-4">
                            <XCircleIcon className="text-red-400" />
                          </div>
                        )}
                        {flashcardReview?.Status ===
                          FlashcardStatus.NEUTRAL && (
                          <div className="w-4 h-4">
                            <QuestionMarkCircleIcon className="text-info" />
                          </div>
                        )}
                        {format(
                          new Date(flashcardReview.CreatedTime),
                          'hh:mm aaa',
                        )}
                        <p className="ml-2 text-xs p-0 m-0 font-semibold truncate cursor-pointer">
                          {' '}
                          ({flashcardReview.FK_FlashcardID})
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center mb-4">
            {nextReview === 'Today' ? (
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
              >
                Review now <ButtonSpinner show={creating} />
              </button>
            ) : (
              <button type="button" className="mx-auto alex-button">
                Start extra review
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
