import { RichText, RichTextType } from 'types/Flow'
import decodeHtml from 'utils/decodeHTML'

export function removeHTMLTags(html: string | undefined) {
  if (!html) return ''
  return decodeHtml(html.replace(/<[^>]*>/g, ''))
}

export default function richTextEditor(
  richText: RichText | undefined,
  newContent: string,
  caretIndex: number,
  totalLength: number,
): string {
  if (!richText) return newContent
  if (richText.type === RichTextType.TEXT && richText.text) {
    const stripped = removeHTMLTags(newContent)
    const lastStripped = stripped.substring(caretIndex, caretIndex + 1)
    const textContent = richText.text.content.repeat(1)

    // detect if the user deletes a character
    if (totalLength > stripped.length) {
      return (
        textContent.slice(0, caretIndex - 1) + textContent.slice(caretIndex)
      )
    }
    if (lastStripped.length === 0) return stripped.slice(-1)

    return (
      textContent.slice(0, caretIndex) +
      (lastStripped || stripped.slice(-1)) +
      textContent.slice(caretIndex)
    )

    // const newRichText: RichText = { ...richText }
    // if (newRichText.text) newRichText.text.content = stripped
    // return newRichText
  }
  return ''
}
