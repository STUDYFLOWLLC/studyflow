/* eslint-disable import/prefer-default-export */
import {
  createBasicElementsPlugin,
  createImagePlugin,
  createSelectOnBackspacePlugin,
} from '@udecode/plate'
import { plateUI } from 'dinnerplate/common/plateUI'
import { basicMarksPlugins } from 'dinnerplate/marks/basicMarksPlugins'
import { selectOnBackspacePlugin } from 'dinnerplate/selectonbackspace/selectOnBackspacePlugin'
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
