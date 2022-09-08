import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline'

import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  setSidebarOpen: (open: boolean) => void
}

export default function OpenButton({ setSidebarOpen }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      type="button"
      className={classNames(
        { 'border-gray-200 text-gray-500': theme === 'light' },
        { 'bg-base-200': theme === 'dark' },
        'px-4 border-r  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary lg:hidden',
      )}
      onClick={() => setSidebarOpen(true)}
    >
      <span className="sr-only">Open sidebar</span>
      <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}
