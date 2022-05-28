import {
  CalendarIcon,
  CheckCircleIcon,
  HomeIcon,
  StarIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function MainNavs() {
  const { theme } = useTheme()
  const [isBrowser, setIsBrowser] = useState(false)
  const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, keyboard: 'H', current: true },
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

  for (let i = 0; i < navigation.length; i++) {
    console.log(navigation[i].current && theme === 'dark')
  }

  useEffect(() => {
    console.log('here')
    setIsBrowser(typeof window !== 'undefined')
  }, [isBrowser])

  return (
    <div className="space-y-1">
      {isBrowser &&
        navigation.map((item) => (
          <div
            key={item.name}
            className={classnames(
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
                className={classnames(
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
