/* eslint-disable import/prefer-default-export */
import { findEventRange } from '@udecode/plate'
import { cursorStore } from 'dinnerplate/cursor/cursorStore'
import { MyPlatePlugin } from 'dinnerplate/types/plateTypes'

export const dragOverCursorPlugin: MyPlatePlugin = {
  key: 'drag-over-cursor',
  handlers: {
    onDragOver: (editor) => (event) => {
      if (editor.isDragging) return

      const range = findEventRange(editor, event)
      if (!range) return

      cursorStore.set.cursors({
        drag: {
          key: 'drag',
          data: {
            style: {
              backgroundColor: '#fc00ff',
              backgroundImage: 'linear-gradient(0deg, #fc00ff, #00dbde)',
              width: 3,
            },
          },
          selection: range,
        },
      })
    },
    onDragLeave: () => () => {
      cursorStore.set.cursors({})
    },
    onDragEnd: () => () => {
      cursorStore.set.cursors({})
    },
    onDrop: () => () => {
      cursorStore.set.cursors({})
    },
  },
}
