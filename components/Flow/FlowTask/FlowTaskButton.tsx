import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'
import shorten from 'utils/shorten'

interface Props {
  title: string
}

export default function FlowTaskButton({ title }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Tippy
      content="task is connected to this flow"
      placement="bottom"
      arrow={false}
      delay={TOOLTIP_DELAY}
      offset={TOOLTIP_OFFSET}
    >
      <div
        className={classNames(
          {
            ' hover:border-gray-300 border-slate-300': theme === 'light',
          },
          {
            'border-slate-600  text-gray-100': theme === 'dark',
          },
          'flex items-center px-2 py-1 rounded-md mr-2 shadow-sm text-sm font-medium border',
        )}
      >
        {shorten(title || 'Untitled', 12)}
      </div>
    </Tippy>
  )
}
