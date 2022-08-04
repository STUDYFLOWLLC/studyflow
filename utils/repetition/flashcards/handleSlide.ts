/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-nested-ternary */

import { SpringRef } from '@react-spring/web'
import handleSlideInBackend from 'hooks/repetition/handleSlideInBackend'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import { FlashcardProps } from 'types/Flashcards'
import { FlashcardStack, Repetition } from 'types/Repetition'
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
  setTempDisabled: (tempDisabled: boolean) => void,
  flashcardStack?: FlashcardStack | null,
  mutateFlashcardStack?: KeyedMutator<any>,
  repetitionDetails?: Repetition | null,
  mutateRepetitionDetails?: KeyedMutator<any>,
) {
  setTempDisabled(true)

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

  if (
    flashcardStack &&
    mutateFlashcardStack &&
    repetitionDetails &&
    mutateRepetitionDetails
  )
    handleSlideInBackend(
      direction,
      cards,
      current,
      flashcardStack,
      mutateFlashcardStack,
      repetitionDetails,
      mutateRepetitionDetails,
    )

  if (gone.size === cards.length) {
    setTimeout(() => {
      toast.success('Review complete!')
      gone.clear()
      setCurrent(cards.length - 1)
      api.start((i) => to(i))
    }, 600)
  }

  setTempDisabled(false)
}
