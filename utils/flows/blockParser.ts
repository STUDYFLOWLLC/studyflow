import { Block } from 'types/Flow'
import richTextParser from './richTextParser'

export default function blockParser(block: Block, theme?: string) {
  const html = []
  html.push(`<${block.tag}>`)

  const richText = richTextParser(block[block.tag]?.richText, theme)
  if (richText === '<span></span>') return ''
  html.push(richText)
  html.push(`</${block.tag}>`)
  return html.join('')
}
