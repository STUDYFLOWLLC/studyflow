import { RichText } from 'types/Flow'
import decodeHTML from 'utils/flows/decodeHTML'

export default function findCurrentRichText(
  richTexts: RichText[],
  caretIndex: number,
) {
  let charactersProgressed = 0

  for (let i = 0; i < richTexts.length; i += 1) {
    const currentRichText = richTexts[i]
    const nextRichText = richTexts[i + 1]

    if (currentRichText.text?.content === undefined) return currentRichText
    if (!nextRichText) return currentRichText

    const { length } = decodeHTML(currentRichText.text.content)

    if (length === 0 && charactersProgressed === caretIndex)
      return currentRichText

    if (
      caretIndex >= charactersProgressed &&
      caretIndex < charactersProgressed + length
    ) {
      return richTexts[i]
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
  return richTexts[richTexts.length - 1]
}
