import { Block, RichTextType } from 'types/Flow'
import sliceBlock from 'utils/flows/sliceBlock'

export default function insertBold(block: Block, caretIndex: number) {
  const insertIndex = sliceBlock(block, caretIndex)
  if (insertIndex === undefined) return

  const richTexts = block[block.tag]?.richText
  if (!richTexts) return

  const boldFlagg = richTexts[insertIndex - 1]
    ? !richTexts[insertIndex - 1].annotations?.bold
    : true

  richTexts.splice(insertIndex, 0, {
    type: RichTextType.TEXT,
    text: {
      content: '',
    },
    annotations: {
      bold: boldFlagg,
    },
  })
}
