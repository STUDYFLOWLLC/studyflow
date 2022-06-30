import { Block } from 'types/Flow'
import findCurrentRichTextBlock from 'utils/flows/findCurrentRichTextBlock'
import lengthOfPreviousRichText from 'utils/flows/lengthOfPreviousRichText'

export default function deleteInBlock(block: Block, caretIndex: number) {
  const richTexts = block[block.tag]?.richText
  if (!richTexts) return

  const currentRichText = findCurrentRichTextBlock(block, caretIndex)
  if (!currentRichText?.text) return

  const previousLength = lengthOfPreviousRichText(richTexts, currentRichText)
  const relativeCaretIndex = caretIndex - previousLength - 1

  currentRichText.text.content =
    currentRichText.text.content.slice(0, relativeCaretIndex) +
    currentRichText.text.content.slice(relativeCaretIndex + 1)
}
