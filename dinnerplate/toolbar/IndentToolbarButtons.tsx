/* eslint-disable import/prefer-default-export */

import { FormatIndentDecrease } from '@styled-icons/material/FormatIndentDecrease'
import { FormatIndentIncrease } from '@styled-icons/material/FormatIndentIncrease'
import { TippyProps } from '@tippyjs/react'
import { indent, outdent, ToolbarButton } from '@udecode/plate'
import { useMyPlateEditorRef } from 'dinnerplate/types/plateTypes'

export const IndentToolbarButtons = () => {
  const editor = useMyPlateEditorRef()!

  const tooltip: TippyProps = {
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: false,
    offset: [0, 5],
    placement: 'top',
  }
  const decreaseTT: TippyProps = { content: 'Decrease Indent', ...tooltip }
  const increaseTT: TippyProps = { content: 'Increase Indent', ...tooltip }

  return (
    <>
      <ToolbarButton
        onMouseDown={(e) => {
          if (!editor) return

          outdent(editor)
          e.preventDefault()
        }}
        icon={<FormatIndentDecrease />}
        tooltip={decreaseTT}
      />
      <ToolbarButton
        onMouseDown={(e) => {
          if (!editor) return

          indent(editor)
          e.preventDefault()
        }}
        icon={<FormatIndentIncrease />}
        tooltip={increaseTT}
      />
    </>
  )
}
