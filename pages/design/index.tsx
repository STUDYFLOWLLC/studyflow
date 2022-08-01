/* eslint-disable import/no-unresolved */

import AppleButton from 'components/buttons/AppleButton'
import ToastTester from 'components/Design/ToastTester'
import CourseDropDown, { Item } from 'components/dropdowns/CourseDropdown'
import Deck from 'components/flowparts/Deck'
import FlashCard3 from 'components/flowparts/FlashCard3'
import MainSpinner from 'components/spinners/MainSpinner'
import { useTheme } from 'next-themes'
import { FlashcardProps, FlashcardStatus } from 'types/Flashcards'

const cardsInit: FlashcardProps[] = [
  {
    index: 0,
    front: 'front1',
    back: 'back1',
    status: FlashcardStatus.right,
  },
  {
    index: 1,
    front: 'front2',
    back: 'back2',
    status: FlashcardStatus.wrong,
  },
  {
    index: 2,
    front: 'front3',
    back: 'back3',
    status: FlashcardStatus.neutral,
  },
]

const a = 'a'
const b = 'b'
const c = 'c'

const dropdownItems: Item[] = [
  {
    color: 'bg-red-300',
    name: 'MATH2210fjdlajflkdsajflk',
    handler: () => console.log('Math2210'),
  },
  {
    color: 'bg-blue-300',
    name: 'CS2110',
    handler: (a: number, b: number, c: number) => console.log('Cs2110'),
  },
]

export default function index() {
  const { setTheme } = useTheme()

  return (
    <div className="p-4">
      <ToastTester />
      <AppleButton />
      <MainSpinner />
      <FlashCard3 card={cardsInit[0]} />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setTheme('light')}
      >
        switch theme
      </button>
      <div className="pl-32 mb-12 mt-6">
        <CourseDropDown
          items={dropdownItems}
          title="Course"
          hasGeneral
          loading={false}
        />
      </div>
      <Deck cards={cardsInit} />
    </div>
  )
}
