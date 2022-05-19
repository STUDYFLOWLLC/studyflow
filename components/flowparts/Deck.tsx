/* eslint-disable no-promise-executor-return */
import { createUseGesture, dragAction } from '@use-gesture/react'
import FlashCard3 from 'components/flowparts/FlashCard3'
import { DeckProps } from 'interfaces/Flashcards'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useHotkeys } from 'react-hotkeys-hook'
import { animated, to as interpolate, useSprings } from 'react-spring'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => {
  console.log('to')
  return {
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  }
}
const to2 = (i: number) => {
  console.log('to')
  return {
    x: 50,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  }
}
const from = (_i: number) => {
  console.log('from')
  return { x: 50, rot: 0, scale: 1.1, y: -75 }
}

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateY(${r / 10}deg) scale(${s})`

export default function Deck({ cards }: DeckProps) {
  const [current, setCurrent] = useState(cards.length - 1)
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out]
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const useGesture = createUseGesture([dragAction])
  const bind = useGesture({
    onDragEnd: () => {
      console.log('test')
      // api.start((i) => to(i))
    },
    onDrag: ({
      args: [index],
      active,
      movement: [mx],
      direction: [xDir],
      velocity: [vx],
    }) => {
      const trigger = vx > 0.1 // If you flick hard enough it should trigger the card to fly out
      if (!active && (trigger || mx > 300)) {
        gone.add(index)
        setCurrent(current - 1)
      } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        const x = isGone ? 350 * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = isGone ? 0 : 0 // How much the card tilts, flicking it harder makes it rotate faster
        const scale = 0.1
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: {
            friction: 20,
            tension: active ? 1000 : isGone ? 200 : 500,
          },
        }
      })
      if (!active && gone.size === cards.length) {
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
    'j',
    () => {
      gone.add(current)
      setCurrent(current - 1)
      api.start((i) => {
        if (current !== i) return // We're only interested in changing spring-data for the current spring
        const x = 400 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = 0 // How much the card tilts, flicking it harder makes it rotate faster
        const scale = 1 // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 100, tension: 1000 },
        }
      })
      if (gone.size === cards.length) {
        setTimeout(() => {
          toast.success('Well done!')
          gone.clear()
          setCurrent(cards.length - 1)
          api.start((i) => to(i))
        }, 600)
      }
    },
    [current],
  )
  useHotkeys(
    'k',
    () => {
      gone.add(current)
      setCurrent(current - 1)
      api.start((i) => {
        if (current !== i) return // We're only interested in changing spring-data for the current spring
        const x = -400 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = 0 // How much the card tilts, flicking it harder makes it rotate faster
        const scale = 1 // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 30, tension: 500 },
        }
      })
      if (gone.size === cards.length) {
        setTimeout(() => {
          toast.success('Well done!')
          gone.clear()
          setCurrent(cards.length - 1)
          api.start((i) => to(i))
        }, 600)
      }
    },
    [current],
  )

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <div className="bg-white">
      {props.map(({ x, y, rot, scale, zIndex }, i) => (
        <animated.div
          className="w-96 h-48 deck absolute flex items-start justify-center"
          key={i}
          style={{ x, y }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              zIndex,
            }}
          >
            <FlashCard3
              front={cards[cards.length - 1 - i].front}
              back={cards[cards.length - 1 - i].back}
              flipped={cards[cards.length - 1 - i].flipped}
              status={cards[cards.length - 1 - i].status}
            />{' '}
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}
