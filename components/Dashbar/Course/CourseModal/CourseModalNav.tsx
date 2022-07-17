import classNames from 'classnames'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export interface Tab {
  key: number
  name: string
  handler: () => void
}

interface Props {
  tabs: Tab[]
  selectedCourse: CourseOnTerm | undefined | null
}

export default function SettingsNavBig({ tabs, selectedCourse }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className={classNames(
        { 'border-gray-200': theme === 'light' },
        { 'border-gray-500': theme === 'dark' },
        'border-b mt-2 mb-2',
      )}
    >
      <nav className="flex justify-between">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={classNames(
              {
                'border-primary text-primary':
                  tab.key === selectedCourse?.CourseOnTermID ||
                  (!selectedCourse && tab.key === -1),
              },
              {
                'border-transparent hover:border-gray-300':
                  tab.key !== selectedCourse?.CourseOnTermID &&
                  theme === 'light',
              },
              {
                'border-transparent hover:border-gray-300':
                  tab.key !== selectedCourse?.CourseOnTermID &&
                  theme === 'dark',
              },
              'whitespace-nowrap cursor-pointer py-2 px-1 border-b-2 font-medium text-sm transition',
            )}
            onClick={() => {
              tab.handler()
            }}
            onKeyDown={() => {
              tab.handler()
            }}
          >
            {tab.name}
          </div>
        ))}
      </nav>
    </div>
  )
}
