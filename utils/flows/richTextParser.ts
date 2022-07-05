import { RichText, RichTextType } from 'types/Flow'

const convertSpaces = (text: string | undefined) => {
  if (!text) return ''
  return text.replace(/\s/g, '&nbsp;')
}

export default function richTextParser(richTexts: RichText[] | undefined) {
  if (!richTexts) return ''
  let allhtml = ''
  for (let i = 0; i < richTexts.length; i += 1) {
    const html = []
    const richText = richTexts[i]
    const encoded = convertSpaces(richText.text?.content)
    if (richText.type === RichTextType.TEXT) {
      if (richText.annotations?.bold) {
        html.push('<b>')
        html.push(encoded)
        html.push('</b>')
      } else if (richText.annotations?.italic) {
        html.push('<i>')
        html.push(encoded)
        html.push('</i>')
      } else {
        html.push('<span>')
        html.push(encoded)
        html.push('</span>')
      }
      if (richText.text?.link) {
        html.unshift(`<a href="${richText.text.link.url}" target="_blank">`)
        html.push('</a>')
      }
    }
    allhtml += html.join('')
  }
  return allhtml
}
