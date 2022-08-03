/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-promise-executor-return, no-nested-ternary, react/no-array-index-key, arrow-body-style */
// @ts-nocheck

import {
  CheckCircleIcon,
  MinusCircleIcon,
  RefreshIcon,
  XCircleIcon,
} from '@heroicons/react/outline'
import { animated, to as interpolate, useSprings } from '@react-spring/web'
import FlashCard3 from 'components/flowparts/FlashCard3'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { Flashcard } from 'types/Repetition'
import from from 'utils/repetition/flashcards/from'
import handleSlide, {
  SlideDirection,
} from 'utils/repetition/flashcards/handleSlide'
import to from 'utils/repetition/flashcards/to'

interface Props {
  cards: Flashcard[]
}

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateY(${r / 10}deg) scale(${s})`

export default function Deck({ cards }: Props) {
  const [current, setCurrent] = useState(cards.length - 1)
  const [gone] = useState(() => new Set<number>()) // The set flags all the cards that are flicked out]
  const [shouldFlip, setShouldFlip] = useState(-1)

  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  // const useGesture = createUseGesture([dragAction])
  // const bind = useGesture({
  //   onDrag: ({
  //     args: [index],
  //     active,
  //     distance,
  //     movement: [mx],
  //     direction: [xDir],
  //     velocity: [vx],
  //   }) => {
  //     const trigger = vx > 0.1 && mx > 200 // If you flick hard enough it should trigger the card to fly out
  //     if (!active && (trigger || mx > 300)) {
  //       gone.add(current)
  //       setCurrent(current - 1)
  //     } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
  //     api.start((i) => {
  //       if (index !== i) return // We're only interested in changing spring-data for the current spring
  //       const isGone = gone.has(index)
  //       const x = isGone ? 350 * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
  //       const rot = isGone ? 0 : 0 // How much the card tilts, flicking it harder makes it rotate faster
  //       const scale = 1
  //       return {
  //         x,
  //         rot,
  //         scale,
  //         zIndex: -10,
  //         delay: undefined,
  //         config: {
  //           friction: 20,
  //           tension: active ? 1000 : isGone ? 200 : 500,
  //         },
  //         immediate: (key) => key === 'zIndex',
  //       }
  //     })
  //     if (!active && gone.size === cards.length) {
  //       setTimeout(() => {
  //         toast.success('Well done!')
  //         gone.clear()
  //         setCurrent(cards.length - 1)
  //         api.start((i) => to(i)).reverse()
  //       }, 600)
  //     }
  //   },
  // })

  useHotkeys(
    'up',
    () =>
      // @ts-expect-error it doesn't like async, but this is ok
      handleSlide(SlideDirection.UP, api, cards, gone, current, setCurrent),
    [current],
  )

  useHotkeys(
    'right',
    () =>
      // @ts-expect-error it doesn't like async, but this is ok
      handleSlide(SlideDirection.RIGHT, api, cards, gone, current, setCurrent),
    [current],
  )

  useHotkeys(
    'left',
    () =>
      // @ts-expect-error it doesn't like async, but this is ok
      handleSlide(SlideDirection.LEFT, api, cards, gone, current, setCurrent),
    [current],
  )

  useHotkeys('space', () => {
    setShouldFlip(gone.size + 1)
  })

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className="w-full deck touch-none justify-center flex">
      {/* eslint-disable-next-line react/prop-types */}
      {props.map(({ x, y, rot, scale, zIndex }, i) => (
        <animated.div
          key={i}
          className="w-full h-48 absolute touch-none flex items-start justify-center"
          style={{
            x,
            y,
            zIndex,
          }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            // {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
            className="touch-none"
          >
            <FlashCard3
              card={cards[cards.length - 1 - i]}
              shouldFlip={shouldFlip}
              setShouldFlip={setShouldFlip}
            />
          </animated.div>
        </animated.div>
      ))}
      <div className="">
        <div className="mt-56 w-96 mx-auto">
          <div className="flex justify-around">
            <div
              className="cursor-pointer border border-red-300 bg-red-50 hover:bg-red-100 rounded-md flex items-center px-2 py-1"
              onClick={() =>
                handleSlide(
                  SlideDirection.LEFT,
                  api,
                  cards,
                  gone,
                  current,
                  setCurrent,
                )
              }
              onKeyDown={() =>
                handleSlide(
                  SlideDirection.LEFT,
                  api,
                  cards,
                  gone,
                  current,
                  setCurrent,
                )
              }
            >
              <XCircleIcon className="w-7 h-7 text-red-500 mr-1" />
              <div className="text-xl font-semibold text-red-500">
                Incorrect
              </div>
            </div>
            <div
              className="cursor-pointer border border-slate-300 bg-slate-50 hover:bg-slate-200 rounded-md flex items-center px-2 py-1"
              onClick={() =>
                handleSlide(
                  SlideDirection.UP,
                  api,
                  cards,
                  gone,
                  current,
                  setCurrent,
                )
              }
              onKeyDown={() =>
                handleSlide(
                  SlideDirection.UP,
                  api,
                  cards,
                  gone,
                  current,
                  setCurrent,
                )
              }
            >
              <MinusCircleIcon className="w-7 h-7 text-slate-500 mr-1" />
              <div className="text-xl font-semibold text-slate-500">Almost</div>
            </div>
            <div
              className="cursor-pointer border border-green-300 bg-green-50 hover:bg-green-100 rounded-md flex items-center px-2 py-1"
              onClick={() =>
                handleSlide(
                  SlideDirection.RIGHT,
                  api,
                  cards,
                  gone,
                  current,
                  setCurrent,
                )
              }
              onKeyDown={() =>
                handleSlide(
                  SlideDirection.RIGHT,
                  api,
                  cards,
                  gone,
                  current,
                  setCurrent,
                )
              }
            >
              <CheckCircleIcon className="w-7 h-7 text-green-500 mr-1" />
              <div className="text-xl font-semibold text-green-500">
                Correct
              </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer border border-gray-300 bg-gray-50 hover:bg-gray-100 rounded-md px-2 py-1 flex items-center">
          <RefreshIcon className="w-7 h-7 text-gray-500 mr-1" />
          <div
            className="text-xl font-semibold text-gray-700"
            onClick={() => setShouldFlip(gone.size + 1)}
            onKeyDown={() => setShouldFlip(gone.size + 1)}
          >
            Flip
          </div>
        </div>
      </div>
    </div>
  )
}
