import { Block, RichText } from 'types/Flow'
import findCurrentRichText from 'utils/flows/findCurrentRichText'
import lengthOfPreviousRichText from './lengthOfPreviousRichText'

/**
 * Return the rich text array of the block after keypress or paste when the user has
 * selected some text.
 * @param block to perform insert in selection on
 * @param startIndex the absolute (in terms of line) start index of the selection
 * @param endIndex the absolute (in terms of line) end index of the selection
 * @param text the text to insert in replacement
 * @returns the rich text of the block after insert in selection
 */
export default function insertInSelection(
  block: Block,
  startIndex: number,
  endIndex: number,
  text: string,
) {
  const richTexts = block[block.tag]?.richText
  if (!richTexts) return [] as RichText[]

  const richTextsCopy = [...richTexts]

  const startRichText = findCurrentRichText(richTextsCopy, startIndex)
  if (!startRichText?.text) return [] as RichText[]
  const previousLengthFromStart = lengthOfPreviousRichText(
    richTexts,
    startRichText,
  )
  const relativeStartIndex = startIndex - previousLengthFromStart

  const endRichText = findCurrentRichText(richTextsCopy, endIndex)
  if (!endRichText?.text) return [] as RichText[]
  const previousLengthFromEnd = lengthOfPreviousRichText(richTexts, endRichText)
  const relativeEndIndex = endIndex - previousLengthFromEnd

  if (startRichText === endRichText) {
    startRichText.text.content =
      startRichText.text.content.slice(0, relativeStartIndex) +
      text +
      startRichText.text.content.slice(relativeEndIndex)
  } else {
    const startRichTextIndex = richTextsCopy.indexOf(startRichText)
    let endRichTextIndex = richTextsCopy.indexOf(endRichText)

    // remove middle elements (if any)
    richTextsCopy.splice(
      startRichTextIndex + 1,
      endRichTextIndex - startRichTextIndex - 1,
    )

    endRichTextIndex = richTextsCopy.indexOf(endRichText)

    // update end and remove if empty
    endRichText.text.content = endRichText.text.content.slice(relativeEndIndex)
    if (endRichText.text.content === '' && richTextsCopy.length > 1) {
      richTextsCopy.splice(endRichTextIndex, 1)
    }

    // update start and remove if empty
    startRichText.text.content =
      startRichText.text.content.slice(0, relativeStartIndex) + text
    if (startRichText.text.content === '' && richTextsCopy.length > 1) {
      richTextsCopy.splice(startRichTextIndex, 1)
    }
  }

  return richTextsCopy
}
