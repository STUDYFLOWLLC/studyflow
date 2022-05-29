import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { animated as a, useSpring } from 'react-spring'

interface Props {
  front: string
  back: string
}

export default function FlashCard({ front, back }: Props) {
  const [flipped, setFlipped] = useState(false)

  useHotkeys('up', () => setFlipped(true))
  useHotkeys('down', () => setFlipped(false))

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 600, friction: 70 },
  })

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      onKeyDown={() => setFlipped(!flipped)}
    >
      <a.div
        className="absolute hover:scale-[1.01] max-w-sm rounded overflow-hidden shadow-lg"
        style={{
          willChange: 'transform',
          transform,
        }}
      >
        <a.div
          style={{
            willChange: 'opacity',
            opacity: opacity.to((o) => 1 - o),
          }}
          className="px-6 py-4"
        >
          <p className="text-gray-700 text-base">{front}</p>
        </a.div>
      </a.div>
      <a.div
        className="absolute hover:scale-[1.01] max-w-sm rounded overflow-hidden shadow-lg"
        style={{
          willChange: 'transform, opacity',
          transform: transform.to((t) => `${t} rotateX(180deg)`),
          opacity,
        }}
      >
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{back}</p>
        </div>
      </a.div>
    </div>
  )
}
