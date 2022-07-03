import { Block } from 'types/Flow'

export default function getRawTextLength(block: Block) {
  const richText = block[block.tag]?.richText
  let totalLength = 0

  if (richText) {
    for (let i = 0; i < richText.length; i += 1) {
      const richTextItem = richText[i]
      if (richTextItem.text) {
        totalLength += richTextItem.text.content.length
      }
    }
  }

  return totalLength
}
