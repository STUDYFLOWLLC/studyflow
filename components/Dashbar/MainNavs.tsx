import { HomeIcon, UserGroupIcon, ViewListIcon } from '@heroicons/react/outline'

export default function MainNavs() {
  const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, keyboard: '', current: true },
    {
      name: 'Tasks',
      href: '#',
      icon: ViewListIcon,
      keyboard: 'T',
      current: false
    },
    {
      name: 'Community',
      href: '#',
      icon: UserGroupIcon,
      keyboard: 'C',
      current: false
    }
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="space-y-1">
      {navigation.map(item => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            item.current
              ? 'bg-gray-200 text-gray-900'
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
            'group flex items-center justify-between px-2 py-2 text-sm font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <div className="flex">
            <item.icon
              className={classNames(
                item.current
                  ? 'text-gray-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                'mr-3 flex-shrink-0 h-6 w-6'
              )}
              aria-hidden="true"
            />
            {item.name}
          </div>
          {item.keyboard ? (
            <kbd className="kbd kbd-xs w-5">{item.keyboard}</kbd>
          ) : (
            <span></span>
          )}
        </a>
      ))}
    </div>
  )
}
