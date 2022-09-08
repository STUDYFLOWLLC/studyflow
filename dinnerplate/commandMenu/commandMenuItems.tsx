/* eslint-disable no-console */
import { GlobeAltIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { PlateEditor, TComboboxItem, Value } from '@udecode/plate'
import { SVGProps } from 'react'
import { bgColor, Color } from 'types/Colors'

export interface CommandItem {
  label: string
  description: string
  abbreviation: string
  bgColor: bgColor
  textSize?: string
  color?: Color
  icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export interface TCommandMenuItem extends TComboboxItem {
  data: {
    itemDetails: CommandItem
    onSelect: (item: TCommandMenuItem, editor: PlateEditor<Value>) => void
  }
}

/* eslint-disable import/prefer-default-export */
export const COMMAND_MENU_ITEMS: TCommandMenuItem[] = [
  {
    key: '0',
    text: 'heading 1',
    data: {
      itemDetails: {
        label: 'Heading 1',
        description: 'Insert a large header',
        abbreviation: 'H1',
        textSize: 'text-3xl',
        bgColor: bgColor.ROSE,
      },
      onSelect: (item, editor) => {
        if (!editor) return
        editor.insertBreak()
        editor.insertFragment([
          {
            type: 'h1',
            children: [{ text: '' }],
          },
        ])
      },
    },
  },
  {
    key: '1',
    text: 'heading 2',
    data: {
      itemDetails: {
        label: 'Heading 2',
        description: 'Insert a medium header',
        abbreviation: 'H2',
        textSize: 'text-2xl',
        bgColor: bgColor.CYAN,
      },
      onSelect: (item, editor) => {
        if (!editor) return
        editor.insertBreak()
        editor.insertFragment([
          {
            type: 'h2',
            children: [{ text: '' }],
          },
        ])
      },
    },
  },
  {
    key: '2',
    text: 'heading 3',
    data: {
      itemDetails: {
        label: 'Heading 3',
        description: 'Insert a small header',
        abbreviation: 'H3',
        textSize: 'text-xl',
        bgColor: bgColor.INDIGO,
      },
      onSelect: (item, editor) => {
        if (!editor) return
        editor.insertBreak()
        editor.insertFragment([
          {
            type: 'h3',
            children: [{ text: '' }],
          },
        ])
      },
    },
  },
  {
    key: '3',
    text: 'blockquote',
    data: {
      itemDetails: {
        label: 'Blockquote',
        description: 'Insert a blockquote',
        abbreviation: '""',
        textSize: 'text-2xl',
        bgColor: bgColor.ORANGE,
      },
      onSelect: (item, editor) => {
        if (!editor) return
        editor.insertBreak()
        editor.insertFragment([
          {
            type: 'blockquote',
            children: [{ text: '' }],
          },
        ])
      },
    },
  },
  {
    key: '4',
    text: 'image',
    data: {
      itemDetails: {
        label: 'Image',
        description: 'Insert an image',
        abbreviation: '',
        textSize: 'text-2xl',
        bgColor: bgColor.LIME,
        icon: PhotoIcon,
      },
      onSelect: (item, editor) => {
        if (!editor) return
        editor.insertBreak()
        editor.insertFragment([
          {
            type: 'img',
            url: '',
            width: '75%',
            children: [{ text: '' }],
          },
        ])
      },
    },
  },
  {
    key: '4',
    text: 'VideoWebpate',
    data: {
      itemDetails: {
        label: 'Video/Webpage',
        description: 'Insert a video or webpage',
        abbreviation: '',
        textSize: 'text-2xl',
        bgColor: bgColor.YELLOW,
        icon: GlobeAltIcon,
      },
      onSelect: (item, editor) => {
        if (!editor) return
        editor.insertBreak()
        editor.insertFragment([
          {
            type: 'media_embed',
            url: '',
            width: '75%',
            children: [{ text: '' }],
          },
        ])
      },
    },
  },
]
