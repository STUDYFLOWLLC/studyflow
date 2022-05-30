/* eslint-disable react/no-unused-prop-types */

import { Menu } from '@headlessui/react'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  name: string
  href: string
}

interface MenuItemProps {
  active: boolean
}

export default function BigProfileButtonMenuItem({ name, href }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu.Item>
      {({ active }: MenuItemProps) => (
        <a
          href={href}
          className={classnames(
            {
              'bg-gray-100 text-gray-900': active && theme !== 'dark',
            },
            {
              'bg-slate-600': active && theme === 'dark',
            },
            { 'text-gray-700': !active && theme !== 'dark' },
            'block px-4 py-2 text-sm',
          )}
        >
          {name}
        </a>
      )}
    </Menu.Item>
  )
}
