import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  dimension?: string
}

export default function RainbowPublicIcon({ dimension }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames(dimension, { 'h-6 w-6': !dimension })}
      fill="none"
      viewBox="0 0 24 24"
      stroke="url(#myGradient)"
      strokeWidth="1.5"
      opacity={theme === 'light' ? 0.6 : 0.9}
    >
      <defs>
        <linearGradient id="myGradient" gradientTransform="rotate(45)">
          <stop offset="0.09" stopColor="rgba(255, 0, 0, 1)" />
          <stop offset="0.18" stopColor="rgba(255, 154, 0, 1)" />
          <stop offset="0.27" stopColor="rgba(208, 222, 33, 1)" />
          <stop offset="0.36" stopColor="rgba(79, 220, 74, 1)" />
          <stop offset="0.45" stopColor="rgba(63, 218, 216, 1)" />
          <stop offset="0.54" stopColor="rgba(47, 201, 226, 1)" />
          <stop offset="0.63" stopColor="rgba(28, 127, 238, 1)" />
          <stop offset="0.72" stopColor="rgba(95, 21, 242, 1)" />
          <stop offset="0.81" stopColor="rgba(186, 12, 248, 1)" />
          <stop offset="0.9" stopColor="rgba(251, 7, 217, 1)" />
          <stop offset="1" stopColor="rgba(255, 0, 0, 1)" />
        </linearGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
