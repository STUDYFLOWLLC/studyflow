import {
  CalendarIcon,
  CheckCircleIcon,
  ClipboardListIcon,
  StarIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const navigation = [
  {
    name: 'Dash',
    href: '#',
    icon: ClipboardListIcon,
    keyboard: 'D',
    current: true,
  },
  {
    name: 'Favorites',
    href: '#',
    icon: StarIcon,
    keyboard: 'F',
    current: false,
  },
  {
    name: 'Tasks',
    href: '#',
    icon: CheckCircleIcon,
    keyboard: 'T',
    current: false,
  },
  {
    name: 'Calendar',
    href: '#',
    icon: CalendarIcon,
    keyboard: 'C',
    current: false,
  },
  {
    name: 'Social',
    href: '#',
    icon: UserGroupIcon,
    keyboard: 'S',
    current: false,
  },
]

export default function MainNavs() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="space-y-1">
      {navigation.map((item) => (
        <div
          key={item.name}
          className={classNames(
            {
              'text-gray-700 hover:text-gray-900 hover:bg-gray-50':
                !item.current && theme === 'light',
            },
            { 'hover:bg-slate-700': !item.current && theme === 'dark' },
            { 'bg-gray-200': item.current && theme === 'light' },
            { 'bg-slate-600': item.current && theme === 'dark' },
            'group flex items-center justify-between px-2 py-1 text-sm font-medium rounded-md cursor-pointer',
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <div className="flex items-center">
            <item.icon
              className={classNames(
                { 'text-gray-500': item.current },
                { 'text-gray-400 group-hover:text-gray-500': !item.current },
                'mr-3 flex-shrink-0 h-4 w-4',
              )}
              aria-hidden="true"
            />
            <span className="text-sm font-medium">{item.name}</span>
          </div>
          {/* {item.keyboard && (
            <kbd className="kbd kbd-xs w-5 text-xs">{item.keyboard}</kbd>
          )} */}
        </div>
      ))}
    </div>
  )
}
