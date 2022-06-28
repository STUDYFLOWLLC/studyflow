import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  text: string
}

export default function SettingsButton({ text }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <span className="ml-4 flex-shrink-0">
      <button
        type="button"
        className="rounded-md font-medium text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      >
        {text}
      </button>
    </span>
  )
}
