import { Block, BlockTag } from 'types/Flow'
import richTextParser from './richTextParser'

export default function blockParser(block: Block) {
  const html = []
  if (block.tag === BlockTag.PARAGRAPH) {
    html.push('<p>')
    const richText = richTextParser(block.p?.richText)
    if (richText === '<span></span>') return ''
    html.push(richTextParser(block.p?.richText))
    html.push('</p>')
  }
  if (block.tag === BlockTag.HEADING_1) {
    html.push('<h1>')
    const richText = richTextParser(block.h1?.richText)
    if (richText === '<span></span>') return ''
    html.push(richTextParser(block.h1?.richText))
    html.push('</h1>')
    console.log(html.join(''))
  }
  return html.join('')
}
