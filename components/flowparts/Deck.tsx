/* eslint-disable no-promise-executor-return, no-nested-ternary, react/no-array-index-key, arrow-body-style */
import { animated, to as interpolate, useSprings } from '@react-spring/web'
import { createUseGesture, dragAction } from '@use-gesture/react'
import FlashCard3 from 'components/flowparts/FlashCard3'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useHotkeys } from 'react-hotkeys-hook'
import { FlashcardProps } from 'types/Flashcards'
import from from 'utils/repetition/flashcards/from'
import handleSlide, {
  SlideDirection,
} from 'utils/repetition/flashcards/handleSlide'
import to from 'utils/repetition/flashcards/to'

interface Props {
  cards: FlashcardProps[]
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
  const useGesture = createUseGesture([dragAction])
  const bind = useGesture({
    onDrag: ({
      args: [index],
      active,
      distance,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.1 && mx > 200 // If you flick hard enough it should trigger the card to fly out
      if (!active && (trigger || mx > 300)) {
        gone.add(current)
        setCurrent(current - 1)
      } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        const x = isGone ? 350 * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = isGone ? 0 : 0 // How much the card tilts, flicking it harder makes it rotate faster
        const scale = 1
        return {
          x,
          rot,
          scale,
          zIndex: -10,
          delay: undefined,
          config: {
            friction: 20,
            tension: active ? 1000 : isGone ? 200 : 500,
          },
          immediate: (key) => key === 'zIndex',
        }
      })
      if (!active && gone.size === cards.length) {
        console.log('hi')
        setTimeout(() => {
          toast.success('Well done!')
          gone.clear()
          setCurrent(cards.length - 1)
          api.start((i) => to(i)).reverse()
        }, 600)
      }
    },
  })

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
    setShouldFlip(gone.size)
  })

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div>
      {props.map(({ x, y, rot, scale, zIndex }, i) => (
        <animated.div
          key={i}
          className="w-96 h-48 absolute flex items-start justify-center"
          style={{
            x,
            y,
            zIndex,
          }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            <FlashCard3
              card={cards[cards.length - 1 - i]}
              shouldFlip={shouldFlip}
              setShouldFlip={setShouldFlip}
            />
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}
