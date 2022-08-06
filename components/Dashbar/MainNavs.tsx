import {
  BeakerIcon,
  CheckCircleIcon,
  ClipboardListIcon,
  SupportIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function MainNavs() {
  const { theme } = useTheme()
  const router = useRouter()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const navigation = [
    {
      name: 'Dash',
      href: '#',
      icon: ClipboardListIcon,
      keyboard: 'D',
      current: router.pathname === '/dash',
      handler: () => router.push('/dash'),
    },

    {
      name: 'Tasks',
      href: '#',
      icon: CheckCircleIcon,
      keyboard: 'T',
      current: router.pathname === '/tasks',
      handler: () => router.push('/tasks'),
    },
    // {
    //   name: 'Calendar',
    //   href: '#',
    //   icon: CalendarIcon,
    //   keyboard: 'C',
    //   current: router.pathname === '/calendar',
    //   handler: () => router.push('/calendar'),
    // },
    {
      name: 'Explore',
      href: '#',
      icon: UserGroupIcon,
      keyboard: 'S',
      current: router.pathname === '/explore',
      handler: () => router.push('/explore'),
    },
    {
      name: 'Beta Center',
      href: '#',
      icon: SupportIcon,
      keyboard: 'S',
      current: router.pathname === '/beta',
      handler: () => router.push('/beta'),
    },
    {
      name: 'Automation',
      href: '#',
      icon: BeakerIcon,
      keyboard: 'S',
      current: router.pathname === '/automation',
      handler: () => router.push('/automation'),
    },
  ]

  return (
    <div className="space-y-1">
      {navigation.map((item) => (
        <div
          key={item.name}
          className={classNames(
            {
              'hover:text-gray-900 hover:bg-gray-50':
                !item.current && theme === 'light',
            },
            { 'hover:bg-slate-700': !item.current && theme === 'dark' },
            { 'bg-gray-200': item.current && theme === 'light' },
            { 'bg-slate-600': item.current && theme === 'dark' },
            'group flex items-center justify-between px-2 py-1 text-sm font-medium rounded-md cursor-pointer',
          )}
          onClick={() => item.handler()}
          onKeyDown={() => item.handler()}
          aria-current={item.current ? 'page' : undefined}
        >
          <div className="flex items-center w-full">
            <item.icon
              className={classNames(
                { 'text-gray-500': item.current },
                { 'text-gray-400 group-hover:text-gray-500': !item.current },
                'mr-3 flex-shrink-0 h-4 w-4',
              )}
              aria-hidden="true"
            />
            <div className="flex justify-between items-center w-full">
              <span className="text-sm font-medium">{item.name}</span>
              {item.name === 'Automation' && (
                <span className="bg-accent rounded-md px-1.5 uppercase text-xs text-gray-900">
                  alpha
                </span>
              )}
            </div>
          </div>
          {/* {item.keyboard && (
            <kbd className="kbd kbd-xs w-5 text-xs">{item.keyboard}</kbd>
          )} */}
        </div>
      ))}
    </div>
  )
}
