/* eslint-disable import/prefer-default-export */
import {
  createBlockquotePlugin,
  createCodeBlockPlugin,
  createHeadingPlugin,
  createParagraphPlugin,
} from '@udecode/plate'
import { plateUI } from 'dinnerplate/common/plateUI'
import { createMyPlugins } from 'dinnerplate/types/plateTypes'

export const basicElementsPlugins = createMyPlugins(
  [
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHeadingPlugin(),
    createParagraphPlugin(),
  ],
  {
    components: plateUI,
  },
)
