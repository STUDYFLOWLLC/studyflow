import { RichText } from 'types/Flow'
import findCurrentRichText from './findCurrentRichText'
import lengthOfPreviousRichText from './lengthOfPreviousRichText'

/**
 * Slice the block and insert a new rich text item at the caret index. Will potentially
 * return the current rich text index if the caret is at the beginnng, no content, or at
 * the end of the block.
 * @param block the block to slice
 * @param caretIndex the caret index at which to slice the block
 * @returns the index of the current block
 */
export default function sliceRichText(
  richTexts: RichText[],
  caretIndex: number,
) {
  const currentRichText = findCurrentRichText(richTexts, caretIndex)
  if (!currentRichText?.text) return -1

  const previousLength = lengthOfPreviousRichText(richTexts, currentRichText)
  const relativeCaretIndex = caretIndex - previousLength

  if (previousLength === 0 && caretIndex === 0) return 0

  const currentRichTextIndex = richTexts.indexOf(currentRichText)
  // special case: there is already a blank block
  if (currentRichText.text.content === '') return currentRichTextIndex
  if (relativeCaretIndex === currentRichText.text.content.length)
    return currentRichTextIndex + 1

  const richText1 = {
    ...currentRichText,
    text: {
      content: currentRichText.text.content.slice(0, relativeCaretIndex),
    },
  }
  const richText2 = {
    ...currentRichText,
    text: {
      content: currentRichText.text.content.slice(relativeCaretIndex),
    },
  }

  richTexts.splice(currentRichTextIndex, 1, richText1)
  richTexts.splice(currentRichTextIndex + 1, 0, richText2)

  return currentRichTextIndex + 1
}
