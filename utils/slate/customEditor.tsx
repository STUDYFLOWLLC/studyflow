/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-nested-ternary */
import { BaseEditor, Editor, Element as SlateElement, Transforms } from 'slate'
import { HistoryEditor } from 'slate-history'
import { ReactEditor } from 'slate-react'
import { ElementAlign, ElementType, Format } from 'types/CustomSlate'

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

// Define our own custom set of helpers.
const CustomEditor = {
  isBlockActive(
    editor: BaseEditor & ReactEditor & HistoryEditor,
    format: Format,
    blockType = 'type',
  ) {
    const { selection } = editor
    if (!selection) return false

    const [match] = Array.from(
      Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (n) =>
          !Editor.isEditor(n) &&
          SlateElement.isElement(n) &&
          n.type === (format as unknown as ElementType),
      }),
    )

    return !!match
  },

  isMarkActive(
    editor: BaseEditor & ReactEditor & HistoryEditor,
    format: Format,
  ) {
    const marks = Editor.marks(editor)
    // @ts-ignore-error fix this later
    return marks ? marks[format] === true : false
  },

  toggleBlock(
    editor: BaseEditor & ReactEditor & HistoryEditor,
    format: Format,
  ) {
    const isActive = this.isBlockActive(
      editor,
      format,
      TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
    )
    const isList = LIST_TYPES.includes(format)

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        LIST_TYPES.includes(n.type) &&
        !TEXT_ALIGN_TYPES.includes(format),
      split: true,
    })
    let newProperties: Partial<SlateElement>
    if (TEXT_ALIGN_TYPES.includes(format)) {
      newProperties = {
        align: isActive
          ? ElementAlign.ALIGN_LEFT
          : (format as unknown as ElementAlign),
      }
    } else {
      newProperties = {
        type: isActive
          ? ElementType.PARAGRAPH
          : isList
          ? ElementType.LIST_ITEM
          : (format as unknown as ElementType),
      }
    }
    Transforms.setNodes<SlateElement>(editor, newProperties)

    if (!isActive && isList) {
      const block = {
        type: format as unknown as ElementType,
        children: [],
        align: ElementAlign.ALIGN_LEFT,
      }
      Transforms.wrapNodes(editor, block)
    }
  },

  toggleMark(editor: BaseEditor & ReactEditor & HistoryEditor, format: Format) {
    const isActive = this.isMarkActive(editor, format)

    if (isActive) {
      Editor.removeMark(editor, format)
    } else {
      Editor.addMark(editor, format, true)
    }
  },
}
export default CustomEditor
