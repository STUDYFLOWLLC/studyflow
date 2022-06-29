import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { bgColor } from 'types/Colors'
import { Command } from 'types/Flow'

interface Props {
  item: Command
  isSelected: boolean
  onSelect: (item: Command) => void
  onMouseEnter: () => void
}

export default function NewBlockMenuItem({
  item,
  isSelected,
  onSelect,
  onMouseEnter,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      key={item.label}
      className={classNames(
        { 'bg-gray-100': isSelected && theme === 'light' },
        { 'bg-slate-600': isSelected && theme === 'dark' },
        'flex items-center px-2 py-1 first-of-type:rounded-t-md last-of-type:rounded-b-md',
      )}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(item)}
      onKeyDown={() => onSelect(item)}
      onMouseEnter={() => onMouseEnter()}
    >
      <div
        className={classNames(
          'flex h-4 w-4 flex-none items-center justify-center rounded-sm',
          item.bgColor,
          {
            'bg-slate-600':
              item.bgColor === bgColor.DEFAULT && theme === 'light',
          },
          {
            'bg-slate-300':
              item.bgColor === bgColor.DEFAULT && theme === 'dark',
          },
        )}
      >
        <span className={classNames(item.textSize, 'text-white')}>
          {item.abbreviation}
        </span>
      </div>
      <div className="ml-4 flex flex-col">
        <span className={classNames('text-lg font-medium')}>
          <span>{item.label}</span>
        </span>
        <span className="text-sm text-info" />
      </div>
    </div>
  )
}
