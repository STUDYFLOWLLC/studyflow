import {
  BeakerIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  CogIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { NextRouter } from 'next/router'
import { SVGProps } from 'react'

export enum ActionType {
  JUMPTO = 'Jump To',
  SCHOOL = 'Schools',
  STUDENT = 'Students',
  FLOW = 'Flows',
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
    CmdIcon: ClipboardDocumentIcon,
    shortcut: '',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/dash'),
  },
  {
    name: 'Tasks',
    CmdIcon: CheckCircleIcon,
    shortcut: '',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/tasks'),
  },
  {
    name: 'Calendar',
    CmdIcon: CalendarIcon,
    shortcut: '',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/calendar'),
  },
  {
    name: 'Explore',
    CmdIcon: UserGroupIcon,
    shortcut: '',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/explore'),
  },
  {
    name: 'Automation',
    CmdIcon: BeakerIcon,
    shortcut: '',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/automation'),
  },
  {
    name: 'Settings',
    CmdIcon: CogIcon,
    shortcut: '',
    actionType: ActionType.JUMPTO,
    action: (router: NextRouter) => router.push('/settings'),
  },
]

export const schools: QuickAction[] = [
  {
    name: 'Cornell University',
    CmdIcon: ClipboardDocumentCheckIcon,
    shortcut: '',
    actionType: ActionType.SCHOOL,
    action: (router: NextRouter) => router.push('/school/cornell'),
  },
]

export interface FlowHit {
  Title: string
  CreatedTime: string
  FlowID: string
  Visibility: string
  Type: string
  UserEnteredDate: string
  WasAutomated: boolean
}
