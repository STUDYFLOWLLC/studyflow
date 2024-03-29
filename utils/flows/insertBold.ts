import { Block, RichText, RichTextType } from 'types/Flow'
import sliceBlock from 'utils/flows/sliceRichText'

export default function insertBold(block: Block, caretIndex: number) {
  const richTexts = block[block.tag]?.richText
  if (!richTexts) return [] as RichText[]

  const insertIndex = sliceBlock(richTexts, caretIndex)
  if (insertIndex === undefined) return [] as RichText[]

  const richTextsCopy = [...richTexts]

  const boldFlagg = richTextsCopy[insertIndex - 1]
    ? !richTextsCopy[insertIndex - 1].annotations?.bold
    : true

  richTextsCopy.splice(insertIndex, 0, {
    type: RichTextType.TEXT,
    text: {
      content: '',
    },
    annotations: {
      bold: boldFlagg,
    },
  })

  return richTextsCopy
}
