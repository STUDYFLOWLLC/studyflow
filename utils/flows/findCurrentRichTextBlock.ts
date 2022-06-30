import { Block, RichText } from 'types/Flow'
import decodeHTML from 'utils/decodeHTML'

// iterate through blocks and find the current block based on caret index
export default function findCurrentRichTextBlock(
  block: Block,
  caretIndex: number,
): RichText | undefined {
  let charactersProgressed = 0

  const blockRichText = block[block.tag]?.richText
  if (!blockRichText) return

  for (let i = 0; i < blockRichText.length; i += 1) {
    const currentRichText = blockRichText[i]
    const nextRichText = blockRichText[i + 1]

    if (currentRichText.text?.content === undefined) return currentRichText
    if (!nextRichText) return currentRichText

    const { length } = decodeHTML(currentRichText.text.content)

    if (length === 0 && charactersProgressed === caretIndex)
      return currentRichText

    if (
      caretIndex >= charactersProgressed &&
      caretIndex < charactersProgressed + length
    ) {
      return blockRichText[i]
    }

    if (
      caretIndex === charactersProgressed + length &&
      nextRichText.text?.content
    ) {
      return currentRichText
    }

    if (
      caretIndex === charactersProgressed + length &&
      !nextRichText.text?.content
    ) {
      return nextRichText
    }

    charactersProgressed += currentRichText.text.content.length
  }
  return blockRichText[blockRichText.length - 1]
}
