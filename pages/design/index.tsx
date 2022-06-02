/* eslint-disable import/no-unresolved */

import AppleButton from 'components/buttons/AppleButton'
import ToastTester from 'components/Design/ToastTester'
import Deck from 'components/flowparts/Deck'
import FlashCard3 from 'components/flowparts/FlashCard3'
import MainSpinner from 'components/spinners/MainSpinner'
import { useTheme } from 'next-themes'
import { FlashcardProps, FlashcardStatus } from 'types/Flashcards'

const cards: FlashcardProps[] = [
  {
    front: 'front1',
    back: 'back1',
    status: FlashcardStatus.right,
  },
  {
    front: 'front2',
    back: 'back2',
    status: FlashcardStatus.wrong,
  },
  {
    front: 'front3',
    back: 'back3',
    status: FlashcardStatus.neutral,
  },
]

export default function index() {
  const { setTheme } = useTheme()

  return (
    <div className="p-4">
      <ToastTester />
      <AppleButton />
      <MainSpinner />
      <FlashCard3 front="front" back="back" status={FlashcardStatus.neutral} />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setTheme('light')}
      >
        switch theme
      </button>
      <Deck cards={cards} />
    </div>
  )
}
