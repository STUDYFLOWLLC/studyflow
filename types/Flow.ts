import { PencilAltIcon } from '@heroicons/react/outline'
import { SVGProps } from 'react'
import { bgColor, Color } from 'types/Colors'

export enum BlockTag {
  PARAGRAPH = 'p',
  HEADING_1 = 'h1',
  HEADING_2 = 'h2',
  HEADING_3 = 'h3',
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
  bgColor: bgColor
  textSize?: string
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
  tag?: BlockTag
  color?: Color
}

export const commandItems: Command[] = [
  {
    commandType: 'new',
    new: true,
    type: 'tag',
    label: 'Heading 1',
    description: 'Big header',
    abbreviation: 'H1',
    textSize: 'text-3xl',
    bgColor: bgColor.ROSE,
    tag: BlockTag.HEADING_1,
  },
  {
    commandType: 'new',
    new: true,
    type: 'tag',
    label: 'Heading 2',
    description: 'Medium header',
    abbreviation: 'H2',
    textSize: 'text-2xl',
    bgColor: bgColor.CYAN,
    tag: BlockTag.HEADING_2,
  },
  {
    commandType: 'new',
    new: true,
    type: 'tag',
    label: 'Heading 3',
    description: 'Small header',
    abbreviation: 'H3',
    textSize: 'text-xl',
    bgColor: bgColor.INDIGO,
    tag: BlockTag.HEADING_3,
  },
  {
    commandType: 'new',
    new: true,
    type: 'tag',
    label: 'Text',
    description: 'Normal text',
    abbreviation: 'P',
    bgColor: bgColor.GREEN,
    tag: BlockTag.PARAGRAPH,
    icon: PencilAltIcon,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Default',
    description: 'default normal color',
    abbreviation: '',
    bgColor: bgColor.DEFAULT,
    color: Color.DEFAULT,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Red',
    description: 'red rose color',
    abbreviation: '',
    bgColor: bgColor.RED,
    color: Color.RED,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Rose',
    description: 'rose red color',
    abbreviation: '',
    bgColor: bgColor.ROSE,
    color: Color.ROSE,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Green',
    description: 'green lime color',
    abbreviation: '',
    bgColor: bgColor.GREEN,
    color: Color.GREEN,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Lime',
    description: 'lime green color',
    abbreviation: '',
    bgColor: bgColor.LIME,
    color: Color.LIME,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Blue',
    description: 'blue cyan color',
    abbreviation: '',
    bgColor: bgColor.BLUE,
    color: Color.BLUE,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Cyan',
    description: 'cyan blue color',
    abbreviation: '',
    bgColor: bgColor.CYAN,
    color: Color.CYAN,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Yellow',
    description: 'yellow orange color',
    abbreviation: '',
    bgColor: bgColor.YELLOW,
    color: Color.YELLOW,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Orange',
    description: 'orange yellow color',
    abbreviation: '',
    bgColor: bgColor.ORANGE,
    color: Color.ORANGE,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Purple',
    description: 'purple indigo color',
    abbreviation: '',
    bgColor: bgColor.PURPLE,
    color: Color.PURPLE,
  },
  {
    commandType: 'color',
    new: false,
    type: 'color',
    label: 'Indigo',
    description: 'indigo purple color',
    abbreviation: '',
    bgColor: bgColor.INDIGO,
    color: Color.INDIGO,
  },
]
