/* eslint-disable no-promise-executor-return */
import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Flashcard, FlashcardReview, FlashcardStatus } from 'types/Repetition'
import delay from 'utils/delay'
import decodeHTML from 'utils/flows/decodeHTML'

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

  const lastReview: FlashcardReview | undefined = card.FK_FlashcardReviews[0]

  return (
    <div
      className={classNames(
        { 'w-36 h-20': cute },
        { 'w-96 h-48': !cute },
        'card',
        'flex touch-none justify-center items-center relative rounded shadow-lg cursor-pointer border-2 border-info/10 bg-base-100',
        { flip },
      )}
      onClick={() => flipper(!flip)}
      onKeyDown={() => flipper(!flip)}
    >
      {lastReview?.Status === FlashcardStatus.CORRECT && (
        <div className="w-6 h-6 absolute top-1 left-1">
          <CheckCircleIcon
            className={classNames(
              { 'h-6 w-6': !cute },
              { 'h-3 w-3': cute },
              'text-green-500',
            )}
          />
        </div>
      )}
      {lastReview?.Status === FlashcardStatus.INCORRECT && (
        <div className="w-6 h-6 absolute top-1 left-1">
          <XCircleIcon
            className={classNames(
              { 'h-6 w-6': !cute },
              { 'h-3 w-3': cute },
              'text-red-400',
            )}
          />
        </div>
      )}
      {(!lastReview || lastReview?.Status === FlashcardStatus.NEUTRAL) && (
        <div className="w-6 h-6 absolute top-1 left-1">
          <QuestionMarkCircleIcon
            className={classNames({ 'h-6 w-6': !cute }, { 'h-3 w-3': cute })}
          />
        </div>
      )}
      <div
        className={classNames(
          { 'text-2xs': cute },
          { 'p-4': !cute },
          'card front text-center',
        )}
      >
        {decodeHTML(card.Front)}
      </div>
      <div
        className={classNames(
          { 'text-2xs text-clip': cute },
          { 'p-4': !cute },
          'card back text-center',
        )}
      >
        {showBack && decodeHTML(card.Back)}
      </div>
    </div>
  )
}
