import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function FlowInfo() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className={classNames(
        { 'bg-white': theme === 'light' },
        { 'bg-slate-700': theme === 'dark' },
        'p-2 flow-root rounded-md transition duration-150 ease-in-out',
      )}
    >
      <span className="block text-xs text-info">
        All flows are <span className="font-bold">100%</span> customizable.
        Templates are only used to&nbsp;
        <span className="underline decoration-primary decoration-2">
          spark your creativity
        </span>{' '}
        and organize your flows.
      </span>
    </div>
  )
}
