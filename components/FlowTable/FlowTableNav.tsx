import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { ViewTypes } from 'utils/flows/sortFlows'

interface Props {
  viewing: ViewTypes | null
  setViewing: (viewing: ViewTypes) => void
}

const tabs = Object.values(ViewTypes)

export default function SettingsNavBig({ viewing, setViewing }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <th
      className={classNames(
        {
          'bg-gray-50 text-gray-500': theme === 'light',
        },
        'ml-4 flex absolute bottom-0 text-left text-xs font-medium uppercase tracking-wider h-full',
      )}
    >
      {tabs.map((tab) => (
        <span
          key={tab}
          className={classNames(
            {
              'border-primary text-primary': tab === viewing,
            },
            {
              'border-transparent hover:border-gray-300':
                tab !== viewing && theme === 'light',
            },
            {
              'border-transparent hover:border-gray-300':
                tab !== viewing && theme === 'dark',
            },
            'mx-2 h-full whitespace-nowrap cursor-pointer py-2 px-1 border-b-2 font-medium transition',
          )}
          onClick={() => {
            setViewing(tab as ViewTypes)
          }}
          onKeyDown={() => {
            setViewing(tab as ViewTypes)
          }}
        >
          {tab}
        </span>
      ))}
    </th>
  )
}
