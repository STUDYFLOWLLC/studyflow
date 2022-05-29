/* eslint-disable no-promise-executor-return */
import {
  CheckCircleIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
} from '@heroicons/react/solid'
import classnames from 'classnames'
import { FlashcardProps, FlashcardStatus } from 'interfaces/Flashcards'
import { useState } from 'react'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export default function Flashcard({ front, back, status }: FlashcardProps) {
  const [flip, setFlip] = useState(false)
  const [showBack, setShowBack] = useState(false)

  const flipper = async (val: boolean) => {
    setFlip(val)
    await delay(90)
    setShowBack(val)
  }

  return (
    <div
      className={classnames(
        'card',
        'flex justify-center items-center relative rounded shadow-lg cursor-pointer w-96 h-48 border-2 border-gray-100 bg-white',
        { flip },
      )}
      onClick={() => flipper(!flip)}
      onKeyDown={() => flipper(!flip)}
    >
      {status === FlashcardStatus.right && (
        <div className="w-6 h-6 absolute top-1 left-1">
          <CheckCircleIcon className="text-green-500" />
        </div>
      )}
      {status === FlashcardStatus.wrong && (
        <div className="w-6 h-6 absolute top-1 left-1">
          <XCircleIcon className="text-red-400" />
        </div>
      )}
      {status === FlashcardStatus.neutral && (
        <div className="w-6 h-6 absolute top-1 left-1">
          <QuestionMarkCircleIcon className="text-stone-800" />
        </div>
      )}
      <div className="card front text-stone-800">{front}</div>
      <div className={classnames('card back text-stone-800')}>
        {showBack && back}
      </div>
    </div>
  )
}
