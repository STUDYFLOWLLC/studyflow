import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid'
import { format } from 'date-fns'
import { FlashcardReview, FlashcardStatus } from 'types/Repetition'

interface Props {
  flashcardReview: FlashcardReview
}

export default function FlashcardReviewLine({ flashcardReview }: Props) {
  return (
    <div key={flashcardReview.FlashcardReviewID} className="flex items-center">
      {flashcardReview?.Status === FlashcardStatus.CORRECT && (
        <div className="w-4 h-4">
          <CheckCircleIcon className="text-green-500" />
        </div>
      )}
      {flashcardReview?.Status === FlashcardStatus.INCORRECT && (
        <div className="w-4 h-4">
          <XCircleIcon className="text-red-400" />
        </div>
      )}
      {flashcardReview?.Status === FlashcardStatus.NEUTRAL && (
        <div className="w-4 h-4">
          <QuestionMarkCircleIcon className="text-info" />
        </div>
      )}
      {format(new Date(flashcardReview.CreatedTime || 0), 'hh:mm aaa')}
      <p className="ml-2 text-xs p-0 m-0 font-semibold truncate cursor-pointer">
        {' '}
        ({flashcardReview.FK_FlashcardID})
      </p>
    </div>
  )
}
