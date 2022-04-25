import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { useHotkeys } from 'react-hotkeys-hook'

export default function FlashCard() {
  const [flipped, setFlipped] = useState(false)
  useHotkeys('up', () => setFlipped(true))
  useHotkeys('down', () => setFlipped(false))

  return (
    <div>
      <ReactCardFlip
        flipSpeedBackToFront={0.4}
        flipSpeedFrontToBack={0.4}
        isFlipped={flipped}
        flipDirection="vertical"
      >
        <div
          onClick={() => setFlipped(!flipped)}
          className="hover:scale-[1.01] max-w-sm rounded overflow-hidden shadow-lg"
        >
          <div className="dark:bg-slate-900 px-6 py-4">
            <div className="font- bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div
          onClick={() => setFlipped(!flipped)}
          className="hover:scale-[1.01] max-w-sm rounded overflow-hidden shadow-lg"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  )
}
