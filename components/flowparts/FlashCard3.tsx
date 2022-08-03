/* eslint-disable no-promise-executor-return */
import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid'
import classnames from 'classnames'
import { useEffect, useState } from 'react'
import { Flashcard, FlashcardReview, FlashcardStatus } from 'types/Repetition'
import delay from 'utils/delay'

interface Props {
  card: Flashcard
  shouldFlip?: number
  setShouldFlip?: (shouldFlip: number) => void
  cute: boolean
}

export default function Flashcard3({
  card,
  shouldFlip,
  setShouldFlip,
  cute,
}: Props) {
  const [flip, setFlip] = useState(false)
  const [showBack, setShowBack] = useState(false)

  const flipper = async (val: boolean) => {
    console.log(card.Position)
    setFlip(val)
    await delay(90)
    setShowBack(val)
  }

  useEffect(() => {
    if (shouldFlip === card.Position) {
      flipper(!flip)
      if (setShouldFlip) setShouldFlip(-1)
    }
  }, [shouldFlip])

  const lastReview: FlashcardReview | undefined =
    card.FK_FlashcardReviews[card.FK_FlashcardReviews.length - 1]

  return (
    <div
      className={classnames(
        { 'w-24 h-12': cute },
        { 'w-96 h-48': !cute },
        'card',
        'flex touch-none justify-center items-center relative rounded shadow-lg cursor-pointer border-2 border-gray-100 bg-white',
        { flip },
      )}
      onClick={() => flipper(!flip)}
      onKeyDown={() => flipper(!flip)}
    >
      {lastReview?.Status === FlashcardStatus.CORRECT && (
        <div className="w-6 h-6 absolute top-1 left-1">
          <CheckCircleIcon className="text-green-500" />
        </div>
      )}
      {lastReview?.Status === FlashcardStatus.INCORRECT && (
        <div className="w-6 h-6 absolute top-1 left-1">
          <XCircleIcon className="text-red-400" />
        </div>
      )}
      {!lastReview ||
        (lastReview?.Status === FlashcardStatus.NEUTRAL && (
          <div className="w-6 h-6 absolute top-1 left-1">
            <QuestionMarkCircleIcon className="text-stone-800" />
          </div>
        ))}
      <div className="card front text-stone-800">{card.Front}</div>
      <div className={classnames('card back text-stone-800')}>
        {showBack && card.Back}
      </div>
    </div>
  )
}
