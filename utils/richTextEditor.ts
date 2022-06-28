import { RichText, RichTextType } from 'types/Flow'
import decodeHtml from 'utils/decodeHTML'
import lengthOfPreviousRichText from './flows/lengthOfPreviousRichText'

export function removeHTMLTags(html: string | undefined) {
  if (!html) return ''
  return decodeHtml(html.replace(/<[^>]*>/g, ''))
}

export default function richTextEditor(
  richTexts: RichText[],
  currentRichText: RichText | undefined,
  newContent: string,
  caretIndex: number,
): string {
  if (!currentRichText) return newContent
  if (currentRichText.type === RichTextType.TEXT && currentRichText.text) {
    const previousLength = lengthOfPreviousRichText(richTexts, currentRichText)
    const relativeCaretIndex = caretIndex - previousLength
    const stripped = removeHTMLTags(newContent).substring(
      previousLength,
      previousLength + relativeCaretIndex + 1,
    )

    console.log(currentRichText)
    console.log(`Previous length: ${previousLength}`)
    console.log(`Relative caret index: ${relativeCaretIndex}`)
    console.log(`Stripped: "${stripped}"`)

    const lastStripped = stripped.substring(
      relativeCaretIndex,
      relativeCaretIndex + 1,
    )
    const textContent = currentRichText.text.content.repeat(1)

    // detect if the user deletes a character
    if (textContent.length >= stripped.length) {
      console.log('deleted a character')
      return (
        textContent.slice(0, relativeCaretIndex - 1) +
        textContent.slice(relativeCaretIndex)
      )
    }
    if (lastStripped.length === 0) return stripped.slice(-1)

    return (
      textContent.slice(0, relativeCaretIndex) +
      (lastStripped || stripped.slice(-1)) +
      textContent.slice(relativeCaretIndex)
    )

    // const newRichText: RichText = { ...richText }
    // if (newRichText.text) newRichText.text.content = stripped
    // return newRichText
  }
  return ''
}
