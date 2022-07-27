import structuredClone from '@ungap/structured-clone'
import { Block, RichText } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import { UpdatePropertyWithCaretCommand } from 'utils/commandPattern/common/commands/updatePropertyWithCaret'
import findCurrentRichText from 'utils/flows/findCurrentRichText'
import lengthOfPreviousRichText from 'utils/flows/lengthOfPreviousRichText'

/**
 * cmd-delete the rich text of the current block. this deletes the text from the caret
 * position all the way to the beginning of the first rich text block
 * @param block to perform cmd-delete on
 * @param caretIndex where the caret is at the start of cmd delete
 * @returns the rich text of the block after cmd-delete
 */
export default function cmdDelete(
  block: Block,
  caretIndex: number,
  commandHandler: CommandHandler,
  element: HTMLElement | null,
  shouldBackup: boolean,
) {
  if (!element) return [] as RichText[]

  const richTexts = block[block.tag]?.richText
  if (!richTexts) return [] as RichText[]

  const richTextsCopy = structuredClone(richTexts)

  const currentRichText = findCurrentRichText(richTextsCopy, caretIndex)
  if (!currentRichText?.text) return [] as RichText[]

  const previousLength = lengthOfPreviousRichText(
    richTextsCopy,
    currentRichText,
  )
  const relativeCaretIndex = caretIndex - previousLength

  // slice the current rich text
  currentRichText.text.content =
    currentRichText.text.content.slice(relativeCaretIndex)

  // delete all previous rich text
  const currentRichTextIndex = richTextsCopy.indexOf(currentRichText)
  const richTextsSliced = richTextsCopy.slice(currentRichTextIndex)

  const prop = block[block.tag]
  if (!prop) return [] as RichText[]

  if (shouldBackup) {
    commandHandler.execute(
      'update-property-with-caret',
      new UpdatePropertyWithCaretCommand({
        target: prop,
        propertyName: 'richText',
        newValue: richTextsSliced,
        element,
        caretIndex,
      }),
    )
  } else if (block[block.tag]?.richText !== undefined) {
    prop.richText = richTextsSliced
  }

  return richTextsSliced
}
