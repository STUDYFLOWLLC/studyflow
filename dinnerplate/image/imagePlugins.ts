/* eslint-disable import/prefer-default-export */
import {
  createBasicElementsPlugin,
  createImagePlugin,
  createSelectOnBackspacePlugin,
} from '@udecode/plate'
import { plateUI } from 'dinnerplate/common/plateUI'
import { selectOnBackspacePlugin } from 'dinnerplate/common/selectOnBackspacePlugin'
import { basicMarksPlugins } from 'dinnerplate/marks/basicMarksPlugins'
import { createMyPlugins } from 'dinnerplate/types/plateTypes'

export const imagePlugins = createMyPlugins(
  [
    createBasicElementsPlugin(),
    ...basicMarksPlugins,
    createImagePlugin(),
    createSelectOnBackspacePlugin(selectOnBackspacePlugin),
  ],
  {
    components: plateUI,
  },
)
