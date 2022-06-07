import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  succeed: boolean
}

export default function OrLine({ succeed }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="mt-6 relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      {!succeed && (
        <div className="relative flex justify-center">
          <span
            className={classNames(
              { 'bg-white text-gray-500': theme === 'light' },
              { 'bg-base-100 text-gray-300': theme === 'dark' },
              'z-10 px-4 text-base',
            )}
          >
            Or
          </span>
        </div>
      )}
    </div>
  )
}
