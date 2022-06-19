import { RichText, RichTextType } from 'types/Flow'

export function removeHTMLTags(html: string) {
  return html.replace(/<[^>]*>/g, '')
}

export default function richTextEditor(
  richText: RichText | undefined,
  newContent: string,
) {
  if (!richText) return newContent
  if (richText.type === RichTextType.TEXT && richText.text) {
    const stripped = removeHTMLTags(newContent)
    const newRichText: RichText = { ...richText }
    if (newRichText.text) newRichText.text.content = stripped
    return newRichText
  }
}
