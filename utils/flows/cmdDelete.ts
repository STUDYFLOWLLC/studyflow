import { Block, RichText } from 'types/Flow'
import findCurrentRichText from 'utils/flows/findCurrentRichText'
import lengthOfPreviousRichText from 'utils/flows/lengthOfPreviousRichText'

/**
 * cmd-delete the rich text of the current block. this deletes the text from the caret
 * position all the way to the beginning of the first rich text block
 * @param block to perform cmd-delete on
 * @param caretIndex where the caret is at the start of cmd delete
 * @returns the rich text of the block after cmd-delete
 */
export default function cmdDelete(block: Block, caretIndex: number) {
  const richTexts = block[block.tag]?.richText
  if (!richTexts) return [] as RichText[]

  const richTextsCopy = [...richTexts]

  const currentRichText = findCurrentRichText(richTextsCopy, caretIndex)
  if (!currentRichText?.text) return [] as RichText[]

  const previousLength = lengthOfPreviousRichText(
    richTextsCopy,
    currentRichText,
  )
  const relativeCaretIndex = caretIndex - previousLength

  // slice the current rich text
  currentRichText.text.content =
    currentRichText.text.content.slice(relativeCaretIndex)

  // delete all previous rich text
  const currentRichTextIndex = richTextsCopy.indexOf(currentRichText)
  richTextsCopy.splice(
    currentRichTextIndex + 1,
    richTextsCopy.length - (currentRichTextIndex + 1),
  )

  return richTextsCopy
}
