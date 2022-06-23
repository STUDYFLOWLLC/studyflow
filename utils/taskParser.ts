import { ParsedResult } from 'chrono-node'
import { removeHTMLTags } from './richTextEditor'

export default function taskParser(
  text: string,
  dateResult: ParsedResult[],
  exemptWords: number,
) {
  if (removeHTMLTags(text) === '') return ''
  const tempText = removeHTMLTags(text)
  const html = []
  html.push('<p>')
  if (dateResult.length > 0 + exemptWords) {
    const dateItem = dateResult[dateResult.length - 1]
    const dateText = dateItem.text
    const startIndex = dateItem.index
    const endIndex = dateItem.index + dateItem.text.length
    html.push(tempText.substring(0, startIndex))
    html.push('<span id="date">')
    html.push(dateText)
    html.push('</span>')
    html.push('<span>')
    html.push(tempText.substring(endIndex))
    html.push('</span>')
  } else {
    html.push(tempText)
  }
  html.push('</p>')

  return html.join('')
}
