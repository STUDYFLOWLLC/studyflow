import { BlockTag } from 'types/Flow'

export default function determinePlaceholder(tag: BlockTag) {
  switch (tag) {
    case BlockTag.PARAGRAPH:
      return "Type '/' for commands"
    case BlockTag.HEADING_1:
      return 'Heading 1'
    case BlockTag.HEADING_2:
      return 'Heading 2'
    case BlockTag.HEADING_3:
      return 'Heading 3'
    default:
      return ''
  }
}
