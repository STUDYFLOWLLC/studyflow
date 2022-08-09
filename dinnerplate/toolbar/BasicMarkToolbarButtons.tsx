/* eslint-disable import/prefer-default-export */
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt'
import { Subscript } from '@styled-icons/foundation/Subscript'
import { Superscript } from '@styled-icons/foundation/Superscript'
import { FormatBold } from '@styled-icons/material/FormatBold'
import { FormatItalic } from '@styled-icons/material/FormatItalic'
import { FormatStrikethrough } from '@styled-icons/material/FormatStrikethrough'
import { FormatUnderlined } from '@styled-icons/material/FormatUnderlined'
import { TippyProps } from '@tippyjs/react'
import {
  getPluginType,
  MarkToolbarButton,
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from '@udecode/plate'
import { useMyPlateEditorRef } from 'dinnerplate/types/plateTypes'

export const BasicMarkToolbarButtons = () => {
  const editor = useMyPlateEditorRef()!

  const tooltip: TippyProps = {
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: false,
    offset: [0, 5],
    placement: 'top',
  }
  const boldTooltip: TippyProps = { content: 'Bold (⌘B)', ...tooltip }
  const italicTooltip: TippyProps = { content: 'Italic (⌘I)', ...tooltip }
  const underlineTooltip: TippyProps = {
    content: 'Underline (⌘U)',
    ...tooltip,
  }
  const strikethroughTooltip: TippyProps = {
    content: 'Strikethrough (⌘+⇧+S)',
    ...tooltip,
  }
  const codeTooltip: TippyProps = { content: 'Code (⌘E)', ...tooltip }
  const superTooltip: TippyProps = { content: 'Superscript', ...tooltip }
  const subTooltip: TippyProps = { content: 'Subscript', ...tooltip }

  return (
    <>
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
        tooltip={boldTooltip}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
        tooltip={italicTooltip}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
        tooltip={underlineTooltip}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_STRIKETHROUGH)}
        icon={<FormatStrikethrough />}
        tooltip={strikethroughTooltip}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_CODE)}
        icon={<CodeAlt />}
        tooltip={codeTooltip}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_SUPERSCRIPT)}
        clear={getPluginType(editor, MARK_SUBSCRIPT)}
        icon={<Superscript />}
        tooltip={superTooltip}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_SUBSCRIPT)}
        clear={getPluginType(editor, MARK_SUPERSCRIPT)}
        icon={<Subscript />}
        tooltip={subTooltip}
      />
    </>
  )
}
