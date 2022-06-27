import { ContentEditableEvent } from 'react-contenteditable'
import { Block, RichText } from 'types/Flow'
import { removeHTMLTags } from 'utils/richTextEditor'
import findCurrentRichTextBlock from './findCurrentRichTextBlock'
import lengthOfPreviousRichText from './lengthOfPreviousRichText'

export default function handleRichTextDeletionAndReturnCurrentRichText(
  e: ContentEditableEvent,
  block: Block,
  richTexts: RichText[],
  caretIndex: number,
) {
  let currentRichText = findCurrentRichTextBlock(block, caretIndex)
  if (!currentRichText) return

  // detect deletion of rich text block
  const previousLength = lengthOfPreviousRichText(richTexts, currentRichText)
  const relativeCaretIndex = caretIndex - previousLength
  const stripped = removeHTMLTags(e.target.value).substring(
    previousLength,
    previousLength + relativeCaretIndex + 1,
  )

  const textContent = currentRichText.text?.content.repeat(1)
  if (textContent === undefined) return

  if (textContent.length >= stripped.length && textContent.length === 0) {
    const currentRichTextIndex = richTexts.indexOf(currentRichText)
    currentRichText = richTexts[currentRichTextIndex - 1]
    richTexts.splice(currentRichTextIndex, 1)
  }

  return currentRichText
}
