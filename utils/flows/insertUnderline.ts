import { Block, RichText, RichTextType } from 'types/Flow'
import sliceRichText from 'utils/flows/sliceRichText'

export default function insertUnderline(block: Block, caretIndex: number) {
  const richTexts = block[block.tag]?.richText
  if (!richTexts) return [] as RichText[]

  const insertIndex = sliceRichText(richTexts, caretIndex)
  if (insertIndex === undefined) return [] as RichText[]

  const richTextsCopy = [...richTexts]

  const underlineFlagg = richTextsCopy[insertIndex - 1]
    ? !richTextsCopy[insertIndex - 1].annotations?.underline
    : true

  richTextsCopy.splice(insertIndex, 0, {
    type: RichTextType.TEXT,
    text: {
      content: '',
    },
    annotations: {
      underline: underlineFlagg,
    },
  })

  return richTextsCopy
}
