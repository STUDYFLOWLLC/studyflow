import { Block, RichTextType } from 'types/Flow'
import sliceBlock from './sliceBlock'

export default function insertBold(block: Block, caretIndex: number) {
  const insertIndex = sliceBlock(block, caretIndex)

  if (!insertIndex) return

  const richTexts = block[block.tag]?.richText
  if (!richTexts) return

  richTexts.splice(insertIndex, 0, {
    type: RichTextType.TEXT,
    text: {
      content: '',
    },
    annotations: {
      bold: true,
    },
  })
}
