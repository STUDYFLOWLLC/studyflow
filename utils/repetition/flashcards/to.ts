export default function to(i: number): {
  x: number
  y: number
  scale: number
  rot: number
  zIndex: number
  delay: number
} {
  return {
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    zIndex: 500,
    delay: i * 100,
  }
}
