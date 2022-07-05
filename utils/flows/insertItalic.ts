import { Block, RichText, RichTextType } from 'types/Flow'
import sliceBlock from 'utils/flows/sliceBlock'

export default function insertBold(block: Block, caretIndex: number) {
  const insertIndex = sliceBlock(block, caretIndex)
  if (insertIndex === undefined) return [] as RichText[]

  const richTexts = block[block.tag]?.richText
  if (!richTexts) return [] as RichText[]

  const richTextsCopy = [...richTexts]

  const italicFlagg = richTextsCopy[insertIndex - 1]
    ? !richTextsCopy[insertIndex - 1].annotations?.bold
    : true

  richTextsCopy.splice(insertIndex, 0, {
    type: RichTextType.TEXT,
    text: {
      content: '',
    },
    annotations: {
      italic: italicFlagg,
    },
  })

  return richTextsCopy
}
