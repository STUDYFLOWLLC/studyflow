/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import { BaseEditor } from 'slate'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'

// eslint-disable-next-line no-use-before-define
export type CustomElement = {
  type: ElementType
  align?: ElementAlign
  children: CustomText[]
}
export type CustomText = {
  text: string
  placeholder?: string
  bold?: true
  italic?: true
  underline?: true
  code?: true
}
export type MentionElement = {
  type: ElementType
  character: string
  children: CustomText[]
}

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}

export interface RenderElementProps {
  attributes: any
  children: CustomText[]
  element: CustomElement
  character?: string
}

export interface RenderLeafProps {
  placeholder?: string
  attributes: any
  children: CustomText[]
  leaf: CustomText
}

export enum Format {
  PARAGRAPH = 'paragraph',
  BOLD = 'bold',
  ITALIC = 'italic',
  UNDERLINE = 'underline',
  CODE = 'code',
  HEADING_ONE = 'heading-one',
  HEADING_TWO = 'heading-two',
  HEADING_THREE = 'heading-three',
  BLOCK_QUOTE = 'block-quote',
  NUMBERED_LIST = 'numbered-list',
  BULLETED_LIST = 'bulleted-list',
  ALIGN_LEFT = 'left',
  ALIGN_CENTER = 'center',
  ALIGN_RIGHT = 'right',
}

export enum ElementType {
  PARAGRAPH = 'paragraph',
  HEADING_ONE = 'heading-one',
  HEADING_TWO = 'heading-two',
  HEADING_THREE = 'heading-three',
  BLOCK_QUOTE = 'block-quote',
  NUMBERED_LIST = 'numbered-list',
  BULLETED_LIST = 'bulleted-list',
  LIST_ITEM = 'list-item',
  MENTION = 'mention',
}

export enum ElementAlign {
  ALIGN_LEFT = 'left',
  ALIGN_CENTER = 'center',
  ALIGN_RIGHT = 'right',
}
