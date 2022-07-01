import { Block } from 'types/Flow'
import findCurrentRichTextBlock from 'utils/flows/findCurrentRichTextBlock'
import lengthOfPreviousRichText from 'utils/flows/lengthOfPreviousRichText'

export default function cmdDeleteRichText(block: Block, caretIndex: number) {
  const richTexts = block[block.tag]?.richText
  if (!richTexts) return

  const currentRichText = findCurrentRichTextBlock(block, caretIndex)
  if (!currentRichText?.text) return

  const previousLength = lengthOfPreviousRichText(richTexts, currentRichText)
  const relativeCaretIndex = caretIndex - previousLength

  // slice the current rich text
  currentRichText.text.content =
    currentRichText.text.content.slice(relativeCaretIndex)

  // delete all previous rich text
  const currentRichTextIndex = richTexts.indexOf(currentRichText)
  richTexts.splice(
    currentRichTextIndex + 1,
    richTexts.length - (currentRichTextIndex + 1),
  )
}
