/* eslint-disable import/prefer-default-export */
import { Keyboard } from '@styled-icons/material/Keyboard'
import { getPluginType, MarkToolbarButton, MARK_KBD } from '@udecode/plate'
import { useMyPlateEditorRef } from 'dinnerplate/types/plateTypes'

export const KbdToolbarButton = () => {
  const editor = useMyPlateEditorRef()!

  return (
    <MarkToolbarButton
      type={getPluginType(editor, MARK_KBD)}
      icon={<Keyboard />}
    />
  )
}
