import { Combobox } from '@headlessui/react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { QuickAction } from 'types/CMDPalette'

interface Props {
  quickAction: QuickAction
  isFirst?: boolean
}

export default function CMDEntry({ quickAction, isFirst }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      {isFirst && (
        <span className="mb-2 px-3 text-xs font-semibold text-info">
          {quickAction.actionType}
        </span>
      )}
      <Combobox.Option
        key={quickAction.name}
        value={quickAction}
        className={({ active }) =>
          classNames(
            { 'bg-primary text-stone-100': active && theme === 'light' },
            { 'bg-primary text-stone-200': active && theme === 'dark' },
            'flex cursor-default select-none items-center rounded-md px-3 py-2',
          )
        }
      >
        {({ active }) => (
          <>
            <quickAction.CmdIcon
              className={classNames(
                { 'text-info': !active },
                'h-6 w-6 flex-none',
              )}
              aria-hidden="true"
            />
            <span className="ml-3 flex-auto truncate">{quickAction.name}</span>
            {quickAction.shortcut && (
              <kbd
                className={classNames(
                  { 'text-gray-500': active && theme === 'light' },
                  { 'text-gray-300': active && theme === 'dark' },
                  'py-0.5 px-1.5 kbd kbd-xs',
                )}
              >
                {quickAction.shortcut}
              </kbd>
            )}
          </>
        )}
      </Combobox.Option>
    </>
  )
}
