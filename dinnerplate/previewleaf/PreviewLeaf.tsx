/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import { RenderLeaf } from '@udecode/plate'
import { getPreviewLeafStyles } from 'dinnerplate/previewleaf/PreviewLeaf.styles'

export const PreviewLeaf: RenderLeaf = (props) => {
  const { children, attributes, leaf } = props

  const { root } = getPreviewLeafStyles(leaf as any)

  return (
    // @ts-expect-error trust me
    <span {...attributes} css={root.css} className={root.className}>
      {children}
    </span>
  )
}
