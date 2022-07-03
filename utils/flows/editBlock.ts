import { ContentEditableEvent } from 'react-contenteditable'
import { Block } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import { UpdatePropertyWithCaretCommand } from 'utils/commandPattern/common/commands/updatePropertyWithCaret'
import richTextEditor from 'utils/flows/richTextEditor'
import handleRichTextDeletionAndReturnCurrentRichText from './handleRichTextDeletionAndReturnCurrentRichText'

export default function editBlock(
  commandHandler: CommandHandler,
  e: ContentEditableEvent,
  element: HTMLElement | null,
  block: Block,
  caretIndex: number,
) {
  if (!element) return

  const richTexts = block[block.tag]?.richText
  if (!richTexts) return

  const currentRichText = handleRichTextDeletionAndReturnCurrentRichText(
    e,
    block,
    richTexts,
    caretIndex,
  )
  if (!currentRichText?.text) return

  commandHandler.execute(
    'update-property-with-caret',
    new UpdatePropertyWithCaretCommand({
      target: currentRichText.text,
      propertyName: 'content',
      newValue: richTextEditor(
        richTexts,
        currentRichText,
        e.target.value,
        caretIndex,
      ),
      element,
      caretIndex,
    }),
  )
}
