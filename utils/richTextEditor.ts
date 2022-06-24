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
) {
  if (!richText) return newContent
  if (richText.type === RichTextType.TEXT && richText.text) {
    const stripped = removeHTMLTags(newContent)
    const lastStripped = stripped.substring(caretIndex, caretIndex + 1)
    console.log(lastStripped)
    console.log(richText.text.content)
    // if the user deletes the most recent character
    if (totalLength > stripped.length) {
      const textContent = richText.text.content
      console.log(textContent)
      richText.text.content = textContent.substring(0, textContent.length - 1)
    } else {
      richText.text.content =
        richText.text.content.slice(0, caretIndex) +
        lastStripped +
        richText.text.content.slice(caretIndex)
    }
    // const newRichText: RichText = { ...richText }
    // if (newRichText.text) newRichText.text.content = stripped
    // return newRichText
  }
}
