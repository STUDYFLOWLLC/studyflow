import { Menu } from '@headlessui/react'
import classnames from 'classnames'
import { useTheme } from 'next-themes'

interface Props {
  active: boolean
  name: string
  href: string
}

export default function BigProfileButtonMenuItem(props: Props) {
  const { active, name, href } = props
  const { theme, setTheme } = useTheme()

  return (
    <Menu.Item>
      {({ active }) => (
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
