import { format } from 'date-fns'
import { finishReview } from 'hooks/repetition/reviewHandlers'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { FlashcardStackReview } from 'types/Repetition'

interface Props {
  repetitionId: string
  flashcardStackReview: FlashcardStackReview
}

export default function FlashcardStackReviewHeader({
  repetitionId,
  flashcardStackReview,
}: Props) {
  const { repetitionDetails, mutateRepetitionDetails } =
    useRepetitionDetails(repetitionId)

  return (
    <p className="p-0 m-0 font-semibold flex items-center">
      {format(new Date(flashcardStackReview.CreatedTime || 0), 'MM/dd')}{' '}
      <span className="uppercase text-sm">
        {!flashcardStackReview.EndTime ? (
          <div className="flex items-baseline">
            <span className="text-red-400 ml-3">active</span>
            <button
              type="button"
              className="ml-2 text-green-400 border border-green-400 rounded-md hover:text-white hover:bg-green-400 bg-white py-0 px-1 transition-all duration-200"
              onClick={() =>
                finishReview(
                  flashcardStackReview.FlashcardStackReviewID,
                  repetitionDetails,
                  mutateRepetitionDetails,
                )
              }
              onKeyDown={() =>
                finishReview(
                  flashcardStackReview.FlashcardStackReviewID,
                  repetitionDetails,
                  mutateRepetitionDetails,
                )
              }
            >
              Finish review
            </button>
          </div>
        ) : (
          <div>
            <span className="text-green-400 ml-3">complete</span>
            <span className="text-primary ml-3 cursor-pointer">
              See details
            </span>
          </div>
        )}
      </span>
    </p>
  )
}
