import {
  BeakerIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClipboardCopyIcon,
  ClipboardListIcon,
  CogIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { NextRouter } from 'next/router'
import { SVGProps } from 'react'

export enum ActionType {
  JUMPTO = 'Jump To',
  SCHOOL = 'Schools',
  STUDENT = 'Students',
}

export interface QuickAction {
  name: string
  CmdIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  shortcut: string
  actionType: ActionType
  action?: (param1?: any, ...params: any[]) => any
  sortValue?: number
}

export const jumpTo: QuickAction[] = [
  {
    name: 'Dash',
    CmdIcon: ClipboardListIcon,
    shortcut: 'cmd+shift+1',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/dash'),
  },
  {
    name: 'Tasks',
    CmdIcon: CheckCircleIcon,
    shortcut: 'cmd+shift+2',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/tasks'),
  },
  {
    name: 'Calendar',
    CmdIcon: CalendarIcon,
    shortcut: 'cmd+shift+3',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/calendar'),
  },
  {
    name: 'Explore',
    CmdIcon: UserGroupIcon,
    shortcut: 'cmd+shift+4',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/explore'),
  },
  {
    name: 'Automation',
    CmdIcon: BeakerIcon,
    shortcut: 'cmd+shift+5',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/automatino'),
  },
  {
    name: 'Settings',
    CmdIcon: CogIcon,
    shortcut: 'cmd+shift+6',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/settings'),
  },
]

export const schools: QuickAction[] = [
  {
    name: 'Cornell University',
    CmdIcon: ClipboardCopyIcon,
    shortcut: '',
    actionType: ActionType.SCHOOL,
    action: (router: NextRouter) => router.push('/school/cornell'),
  },
]
