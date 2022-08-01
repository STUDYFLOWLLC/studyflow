import { SpringRef } from '@react-spring/web'

export default function runApiSlide(
  api: SpringRef<{
    x: number
    rot: number
    scale: number
    y: number
    zIndex: number
  }>,
  current: number,
  newX: number | undefined,
  newY: number | undefined,
  newZIndex: number | undefined,
) {
  api.start((i) => {
    if (current !== i) return // We're only interested in changing spring-data for the current spring
    return {
      x: newX,
      y: newY,
      zIndex: newZIndex,
      rot: 0,
      scale: 1,
      config: { friction: 100, tension: 1000 },
      immediate: (key) => key === 'zIndex',
    }
  })
}
