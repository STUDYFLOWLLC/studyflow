import { Block, RichText, RichTextType } from 'types/Flow'
import sliceRichText from 'utils/flows/sliceRichText'

export default function insertCode(block: Block, caretIndex: number) {
  const richTexts = block[block.tag]?.richText
  if (!richTexts) return [] as RichText[]

  const insertIndex = sliceRichText(richTexts, caretIndex)
  if (insertIndex === undefined) return [] as RichText[]

  const richTextsCopy = [...richTexts]

  const codeFlagg = richTextsCopy[insertIndex - 1]
    ? !richTextsCopy[insertIndex - 1].annotations?.code
    : true

  richTextsCopy.splice(insertIndex, 0, {
    type: RichTextType.TEXT,
    text: {
      content: '',
    },
    annotations: {
      code: codeFlagg,
    },
  })

  return richTextsCopy
}
