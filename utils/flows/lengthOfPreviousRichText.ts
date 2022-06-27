// find the content length of all previous rich text blocks

import { RichText } from 'types/Flow'

export default function lengthOfPreviousRichText(
  richTexts: RichText[],
  currentRichText: RichText,
) {
  const currentRichTextIndex = richTexts.indexOf(currentRichText)
  let totalPreviousLength = 0

  for (let i = currentRichTextIndex - 1; i >= 0; i -= 1) {
    const richText = richTexts[i]
    if (richText.text?.content) {
      totalPreviousLength += richText.text.content.length
    }
  }

  return totalPreviousLength
}
