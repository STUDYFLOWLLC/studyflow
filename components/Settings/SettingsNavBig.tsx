import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Tab } from 'pages/settings'
import { useEffect, useState } from 'react'

interface Props {
  tabs: Tab[]
  activeTab: string
  setActiveTab: (value: string) => void
}

export default function SettingsNavBig({
  tabs,
  activeTab,
  setActiveTab,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="hidden lg:block">
      <div
        className={classNames(
          { 'border-gray-200': theme === 'light' },
          { 'border-gray-500': theme === 'dark' },
          'border-b',
        )}
      >
        <nav className="-mb-px flex justify-between">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              className={classNames(
                {
                  'border-primary text-primary': tab.name === activeTab,
                },
                {
                  'border-transparent hover:border-gray-300':
                    tab.name !== activeTab && theme === 'light',
                },
                {
                  'border-transparent hover:border-gray-300':
                    tab.name !== activeTab && theme === 'dark',
                },
                'whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-sm transition',
              )}
              onClick={() => {
                setActiveTab(tab.name)
                tab.handler()
              }}
              onKeyDown={() => {
                setActiveTab(tab.name)
                tab.handler()
              }}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
