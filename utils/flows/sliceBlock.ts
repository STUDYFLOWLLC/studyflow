import { Block } from 'types/Flow'
import findCurrentRichTextBlock from './findCurrentRichTextBlock'
import lengthOfPreviousRichText from './lengthOfPreviousRichText'

export default function sliceBlock(block: Block, caretIndex: number) {
  const richTexts = block[block.tag]?.richText
  if (!richTexts) return

  const currentRichText = findCurrentRichTextBlock(block, caretIndex)
  if (!currentRichText?.text) return

  const previousLength = lengthOfPreviousRichText(richTexts, currentRichText)
  const relativeCaretIndex = caretIndex - previousLength

  if (previousLength === 0 && caretIndex === 0) return 0

  const currentRichTextIndex = richTexts.indexOf(currentRichText)
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
