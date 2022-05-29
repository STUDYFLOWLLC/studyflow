/* eslint-disable import/no-unresolved */

import AppleButton from 'components/buttons/AppleButton'
import BreadCrumb from 'components/Design/BreadCrumb'
import ToastTester from 'components/Design/ToastTester'
import Deck from 'components/flowparts/Deck'
import FlashCard3 from 'components/flowparts/FlashCard3'
import MainSpinner from 'components/spinners/MainSpinner'
import { FlashcardProps, FlashcardStatus } from 'interfaces/Flashcards'
import { useTheme } from 'next-themes'

export default function index() {
  const { resolvedTheme, setTheme } = useTheme()
  console.log(FlashcardStatus.right)
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
  return (
    <div className="p-4">
      <BreadCrumb />
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
