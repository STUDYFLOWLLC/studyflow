import { SVGProps } from 'react'

export enum BlockTag {
  PARAGRAPH = 'p',
  HEADING_1 = 'h1',
  HEADING_2 = 'h2',
  HEADING_3 = 'h3',
}

export enum Color {
  DEFAULT = 'text-gray-900',
  GREY = 'text-slate-500',
  RED = 'text-red-500',
  ROSE = 'text-rose-400',
  GREEN = 'text-green-400',
  LIME = 'text-lime-400',
  BLUE = 'text-sky-500',
  CYAN = 'text-cyan-500',
  YELLOW = 'text-yellow-500',
  ORANGE = 'text-orange-500',
  PURPLE = 'text-purple-500',
  INDIGO = 'text-indigo-500',
}

interface Annotation {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  code?: boolean
  color?: Color
}

export enum RichTextType {
  TEXT = 'text',
  MENTION = 'mention',
  EQUATION = 'equation',
}

interface Link {
  type: 'url'
  url: string
}

interface Text {
  content: string
  link?: Link
}

enum Mentions {
  USER = 'user',
  FLOW = 'flow',
}

interface Mention {
  type: Mentions
}

interface Equation {
  expression: string
}

export interface RichText {
  type: RichTextType
  plain_text?: string
  href?: string
  annotations?: Annotation
  text?: Text
  mention?: Mention
  equation?: Equation
}

interface Paragraph {
  richText: RichText[]
  color: Color
}

interface Heading_1 {
  richText: RichText[]
  color: Color
}

interface Heading_2 {
  richText: RichText[]
  color: Color
}

interface Heading_3 {
  richText: RichText[]
  color: Color
}

export interface Block {
  id: string
  index: number
  tag: BlockTag
  p?: Paragraph
  h1?: Heading_1
  h2?: Heading_2
  h3?: Heading_3
}

export interface Command {
  commandType: 'new' | 'color' | 'turn into'
  new: boolean
  type: 'color' | 'tag'
  label: string
  description: string
  abbreviation: string
  bgColor:
    | 'bg-gray-900'
    | 'bg-slate-500'
    | 'bg-red-500'
    | 'bg-rose-400'
    | 'bg-green-400'
    | 'bg-lime-400'
    | 'bg-sky-500'
    | 'bg-cyan-500'
    | 'bg-yellow-500'
    | 'bg-orange-500'
    | 'bg-purple-500'
    | 'bg-indigo-500'
  textSize?: string
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
  tag?: BlockTag
  color?: Color
}
