import { Block } from 'types/Flow'
import findCurrentRichTextBlock from './findCurrentRichTextBlock'
import lengthOfPreviousRichText from './lengthOfPreviousRichText'

export default function insertIntoBlock(
  block: Block,
  key: string,
  caretIndex: number,
) {
  const richTexts = block[block.tag]?.richText
  if (!richTexts) return

  const currentRichText = findCurrentRichTextBlock(block, caretIndex)
  if (!currentRichText?.text) return

  const previousLength = lengthOfPreviousRichText(richTexts, currentRichText)
  const relativeCaretIndex = caretIndex - previousLength

  currentRichText.text.content =
    currentRichText.text.content.slice(0, relativeCaretIndex) +
    key +
    currentRichText.text.content.slice(relativeCaretIndex)
}
