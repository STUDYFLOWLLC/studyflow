import { Block, BlockTag } from 'types/Flow'
import richTextParser from './richTextParser'

export default function blockParser(block: Block) {
  const html = []
  if (block.tag === BlockTag.PARAGRAPH) {
    html.push('<p>')
    html.push(richTextParser(block.paragraph?.richText))
    html.push('</p>')
  }
  return html.join('')
}
