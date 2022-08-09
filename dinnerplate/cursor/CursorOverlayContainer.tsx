/* eslint-disable import/prefer-default-export */
import { CursorOverlay, CursorOverlayProps } from '@udecode/plate'
import { cursorStore } from 'dinnerplate/cursor/cursorStore'

export const CursorOverlayContainer = ({
  cursors,
  ...props
}: CursorOverlayProps) => {
  const dynamicCursors = cursorStore.use.cursors()

  const allCursors = { ...cursors, ...dynamicCursors }

  return <CursorOverlay {...props} cursors={allCursors} />
}
