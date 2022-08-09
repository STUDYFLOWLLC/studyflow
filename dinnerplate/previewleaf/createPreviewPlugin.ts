/* eslint-disable import/prefer-default-export */
import { createPluginFactory } from '@udecode/plate'
import { decoratePreview } from 'dinnerplate/previewleaf/decoratePreview'

export const createPreviewPlugin = createPluginFactory({
  key: 'preview-md',
  decorate: decoratePreview,
})
