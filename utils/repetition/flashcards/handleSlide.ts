/* eslint-disable no-nested-ternary */

import { SpringRef } from '@react-spring/web'
import toast from 'react-hot-toast'
import { FlashcardProps } from 'types/Flashcards'
import delay from 'utils/delay'
import runApiSlide from 'utils/repetition/flashcards/runApiSlide'
import to from 'utils/repetition/flashcards/to'

export enum SlideDirection {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  UP = 'UP',
}

export default async function handleSlide(
  direction: SlideDirection,
  api: SpringRef<{
    x: number
    rot: number
    scale: number
    y: number
    zIndex: number
  }>,
  cards: FlashcardProps[],
  gone: Set<number>,
  current: number,
  setCurrent: (newCurrent: number) => void,
) {
  const x =
    direction === SlideDirection.LEFT
      ? -500
      : direction === SlideDirection.RIGHT
      ? 500
      : 0
  const y = direction === SlideDirection.UP ? -225 : 0
  runApiSlide(api, current, x, y, 500)

  await delay(300)
  gone.add(current)
  setCurrent(current - 1)

  runApiSlide(api, current, 0, 0, 400)

  if (gone.size === cards.length) {
    setTimeout(() => {
      toast.success('Well done!')
      gone.clear()
      setCurrent(cards.length - 1)
      api.start((i) => to(i))
    }, 600)
  }
}
