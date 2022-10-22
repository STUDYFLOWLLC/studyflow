/* eslint-disable react/no-unused-prop-types */

import { Menu } from '@headlessui/react'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'

interface Props {
  name: string
  handler: () => void
  hasDivider?: boolean
  roundedT?: boolean
  roundedB?: boolean
}

export default function BigProfileButtonMenuItem({
  name,
  handler,
  hasDivider,
  roundedT,
  roundedB,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu.Item>
      {({ active }: ActiveProps) => (
        <div
          className={classnames(
            {
              'bg-gray-100 text-gray-900': active && theme !== 'dark',
            },
            {
              'bg-slate-600': active && theme === 'dark',
            },
            { 'text-gray-700': !active && theme !== 'dark' },
            { 'rounded-t-md pt-3 pb-2': roundedT },
            { 'rounded-b-md pb-3 pt-2': roundedB },
            { 'border-t': hasDivider },
            'transition-all block px-4 py-2 text-sm cursor-pointer',
          )}
          onClick={() => handler()}
          onKeyDown={() => handler()}
        >
          {name}
        </div>
      )}
    </Menu.Item>
  )
}
