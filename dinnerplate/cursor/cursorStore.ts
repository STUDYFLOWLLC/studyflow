/* eslint-disable import/prefer-default-export */
import { createStore } from '@udecode/plate'

export const cursorStore = createStore('cursor')({
  cursors: {},
})
