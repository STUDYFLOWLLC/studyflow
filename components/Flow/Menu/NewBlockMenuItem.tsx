import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Command } from 'types/Flow'

interface Props {
  item: Command
  isSelected: boolean
  onSelect: (item: Command) => void
  onMouseEnter: () => void
  isTop: boolean
}

export default function NewBlockMenuItem({
  item,
  isSelected,
  onSelect,
  onMouseEnter,
  isTop,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      {isTop && (
        <span className="ml-1 mt-1 text-sm uppercase font-medium">
          New Block
        </span>
      )}
      <div
        key={item.label}
        className={classNames(
          { 'bg-gray-200': isSelected && theme === 'light' },
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
            'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
            item.bgColor,
          )}
        >
          {item.icon ? (
            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
          ) : (
            <span className={classNames(item.textSize, 'text-white')}>
              {item.abbreviation}
            </span>
          )}
        </div>
        <div className="ml-4 flex flex-col">
          <span className={classNames('text-lg font-medium')}>
            <span>{item.label}</span>
          </span>
          <span className={classNames('text-sm text-info')}>
            {item.description}
          </span>
        </div>
      </div>
    </>
  )
}
