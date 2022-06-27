import { Block, RichText } from 'types/Flow'

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
    if (currentRichText.text?.content === undefined) return currentRichText

    if (
      charactersProgressed + currentRichText.text.content.length - 1 >=
      caretIndex
    ) {
      return blockRichText[i]
    }

    charactersProgressed += currentRichText.text.content.length
  }
  return blockRichText[blockRichText.length - 1]
}
