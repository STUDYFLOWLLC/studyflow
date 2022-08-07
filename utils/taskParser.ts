import { ParsedResult } from 'chrono-node'
import { removeHTMLTags } from './flows/richTextEditor'

export default function taskParser(text: string, dateResult: ParsedResult) {
  if (removeHTMLTags(text) === '') return ''
  const html = []
  const startIndex = dateResult.index
  const endIndex = startIndex + dateResult.text.length
  html.push(text.substring(0, dateResult.index))
  html.push('<span id="date">')
  html.push(text.substring(dateResult.index, endIndex))
  html.push('</span>')
  html.push(text.substring(endIndex))

  console.log(html.join(''))
  return html.join('')
}
