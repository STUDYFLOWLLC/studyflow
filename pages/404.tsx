import {
  BeakerIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClipboardListIcon,
  CogIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import CMDRaw from 'components/CMDPalette/CMDRaw'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { QuickAction } from 'types/CMDPalette'

export default function FourOFour() {
  const router = useRouter()

  const [query, setQuery] = useState('')
  const [selectedAction, setSelectedAction] = useState<QuickAction | null>(null)

  const quickActions: QuickAction[] = [
    {
      name: 'Dash',
      CmdIcon: ClipboardListIcon,
      shortcut: 'D',
      url: '#',
      action: () => router.push('/dash'),
    },
    {
      name: 'Tasks',
      CmdIcon: CheckCircleIcon,
      shortcut: 'D',
      url: '#',
      action: () => router.push('/tasks'),
    },
    {
      name: 'Calendar',
      CmdIcon: CalendarIcon,
      shortcut: 'D',
      url: '#',
      action: () => router.push('/calendar'),
    },
    {
      name: 'Social',
      CmdIcon: UserGroupIcon,
      shortcut: 'D',
      url: '#',
      action: () => router.push('/social'),
    },
    {
      name: 'Automation',
      CmdIcon: BeakerIcon,
      shortcut: 'D',
      url: '#',
      action: () => router.push('/automatino'),
    },
    {
      name: 'Settings',
      CmdIcon: CogIcon,
      shortcut: 'D',
      url: '#',
      action: () => router.push('/settings'),
    },
  ]

  return (
    <div className="bg-[url('../images/404bg.svg')] bg-cover min-h-full h-screen">
      <div className="flex flex-col justify-end h-screen p-2">
        <div className="h-80 min-h-80 max-h-80">
          <CMDRaw
            placeholder="Search for pages, flows, etc."
            quickActions={quickActions}
            filteredProjects={quickActions}
            query={query}
            setQuery={setQuery}
            selectedAction={selectedAction}
            setSelectedAction={setSelectedAction}
          />
        </div>
        <div>
          <div className="sm:flex items-baseline" style={{ color: '#D4F6F2' }}>
            <p className="leading-none mt-36 sm:mt-0 sm:leading-normal text-9xl md:text-10xl lg:text-11xl font-semibold md:mr-2 lg:mr-4">
              404
            </p>{' '}
            <p className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              Page not found.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
