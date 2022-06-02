import { SVGProps } from 'react'

export interface QuickAction {
  name: string
  CmdIcon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  shortcut: string
  url: string
  action: () => void
}
