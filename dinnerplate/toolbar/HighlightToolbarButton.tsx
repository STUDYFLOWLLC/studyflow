/* eslint-disable import/prefer-default-export */
import { Highlight } from '@styled-icons/boxicons-regular/Highlight'
import {
  getPluginType,
  MarkToolbarButton,
  MARK_HIGHLIGHT,
} from '@udecode/plate'
import { useMyPlateEditorRef } from 'dinnerplate/types/plateTypes'

export const HighlightToolbarButton = () => {
  const editor = useMyPlateEditorRef()!

  return (
    <MarkToolbarButton
      type={getPluginType(editor, MARK_HIGHLIGHT)}
      icon={<Highlight />}
    />
  )
}
