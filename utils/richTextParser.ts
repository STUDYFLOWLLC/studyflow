import { RichText, RichTextType } from 'types/Flow'

export default function richTextParser(richTexts: RichText[] | undefined) {
  if (!richTexts) return ''
  let allhtml = ''
  for (let i = 0; i < richTexts.length; i += 1) {
    const html = []
    const richText = richTexts[i]
    if (richText.type === RichTextType.TEXT) {
      html.push('<span>')
      html.push(richText.text?.content)
      html.push('</span>')
      if (richText.text?.link) {
        html.unshift(`<a href="${richText.text.link.url}" target="_blank">`)
        html.push('</a>')
      }
    }
    allhtml += html.join('')
  }
  return allhtml
}
