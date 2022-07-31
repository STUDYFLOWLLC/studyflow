import { Block } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import { UpdatePropertyWithCaretCommand } from 'utils/commandPattern/common/commands/updatePropertyWithCaret'
import findCurrentRichTextBlock from './findCurrentRichTextBlock'
import lengthOfPreviousRichText from './lengthOfPreviousRichText'

export default function insertIntoBlock(
  block: Block,
  key: string,
  caretIndex: number,
  commandHandler: CommandHandler,
  element: HTMLElement | null,
  shouldBackup: boolean,
) {
  if (!element) return

  const richTexts = block[block.tag]?.richText
  if (!richTexts) return

  const currentRichText = findCurrentRichTextBlock(block, caretIndex)
  if (!currentRichText?.text) return

  const previousLength = lengthOfPreviousRichText(richTexts, currentRichText)
  const relativeCaretIndex = caretIndex - previousLength

  if (shouldBackup) {
    const prop = block[block.tag]
    if (!prop) return
    commandHandler.execute(
      'update-property-with-caret',
      new UpdatePropertyWithCaretCommand({
        target: prop,
        propertyName: 'richText',
        newValue: prop?.richText?.map((richText) => {
          if (richText === currentRichText) {
            return {
              ...richText,
              text: {
                ...richText.text,
                content:
                  (richText?.text?.content.slice(0, relativeCaretIndex) || '') +
                  key +
                  (richText?.text?.content.slice(relativeCaretIndex) || ''),
              },
            }
          }
          return richText
        }),
        element,
        caretIndex,
      }),
    )
  } else {
    currentRichText.text.content =
      currentRichText.text.content.slice(0, relativeCaretIndex) +
      key +
      currentRichText.text.content.slice(relativeCaretIndex)
  }

  // currentRichText.text.content =
  //   currentRichText.text.content.slice(0, relativeCaretIndex) +
  //   key +
  //   currentRichText.text.content.slice(relativeCaretIndex)
}
