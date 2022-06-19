export enum BlockTag {
  PARAGRAPH = 'p',
  HEADING_1 = 'h1',
  HEADING_2 = 'h2',
  HEADING_3 = 'h3',
}

export enum Color {
  RED = 'text-red-500',
  GREEN = 'text-green-500',
  BLUE = 'text-blue-500',
  YELLOW = 'text-yellow-500',
  ORANGE = 'text-orange-500',
  PURPLE = 'text-purple-500',
  CYAN = 'text-cyan-500',
  GREY = 'text-gray-500',
}

interface Annotation {
  bold: boolean
  italic: boolean
  underline: boolean
  strikethrough: boolean
  code: boolean
  color: Color
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
