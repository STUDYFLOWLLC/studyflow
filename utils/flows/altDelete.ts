import { reverse } from 'esrever'
import { Block, RichText } from 'types/Flow'
import { CommandHandler } from 'utils/commandPattern/commandHandler'
import { UpdatePropertyWithCaretCommand } from 'utils/commandPattern/common/commands/updatePropertyWithCaret'
import findCurrentRichText from 'utils/flows/findCurrentRichText'
import lengthOfPreviousRichText from 'utils/flows/lengthOfPreviousRichText'
import numWhiteSpacesInEnd from 'utils/flows/numWhiteSpacesInEnd'

/**
 * Find the last the punctuation, symbol, or space character in a given string.
 * @param str to operate on
 * @returns index of the last punctuation, symbol, or space character (or -1 if none)
 */
const findPunctuationOrSpaceOrSymbolIndex = (str: string) => {
  const reversed = reverse(str)
  const punctuationOrSpaceOrSymbol = /[\s-!$%^&*()_+|~=`{}\\[\]:\\/;<>?,.@#]/
  const index = reversed.search(punctuationOrSpaceOrSymbol)
  if (index === -1) return -1
  return reversed.length - index
}

/**
 * alt-delete the rich text of the current block. this deletes the text from the caret to
 * the nearest space, punctuation, or symbol.
 * @param block to perform alt-delete on
 * @param caretIndex where the caret is at the start of alt delete
 * @returns the rich text of the block after alt-delete
 */
export default function altDelete(
  richTexts: RichText[],
  caretIndex: number,
  block: Block,
  commandHandler: CommandHandler,
  element: HTMLElement | null,
  shouldBackup: boolean,
  halt?: boolean,
): RichText[] | undefined {
  if (!element) return

  const richTextsCopy = [...richTexts]

  const currentRichText = findCurrentRichText(richTextsCopy, caretIndex)

  if (!currentRichText?.text) return

  const previousLength = lengthOfPreviousRichText(
    richTextsCopy,
    currentRichText,
  )
  let relativeCaretIndex = caretIndex - previousLength

  // trim the current rich text if our caret is immediately after a space
  if (
    currentRichText.text.content.charAt(relativeCaretIndex - 1) === ' ' &&
    !halt
  ) {
    const whiteSpacesBeforeCaret = numWhiteSpacesInEnd(
      currentRichText.text.content.slice(0, relativeCaretIndex),
    )
    relativeCaretIndex -= whiteSpacesBeforeCaret
    currentRichText.text.content =
      currentRichText.text.content.slice(0, relativeCaretIndex) +
      currentRichText.text.content.slice(
        relativeCaretIndex + whiteSpacesBeforeCaret,
      )
  }

  // find where we should delete to (space, punctuation, or symbol)
  const altDeleteIndex = findPunctuationOrSpaceOrSymbolIndex(
    currentRichText.text.content.slice(0, relativeCaretIndex),
  )

  if (altDeleteIndex === -1 && richTexts.length > 1) {
    const currentRichTextIndex = richTexts.indexOf(currentRichText)
    richTextsCopy.splice(currentRichTextIndex, 1)
    return altDelete(
      richTextsCopy,
      caretIndex - currentRichText.text.content.length,
      block,
      commandHandler,
      element,
      shouldBackup,
      true,
    )
  }

  // if we found a space or punctuation, delete to that
  if (altDeleteIndex !== -1 && relativeCaretIndex !== altDeleteIndex) {
    currentRichText.text.content =
      currentRichText.text.content.slice(0, altDeleteIndex) +
      currentRichText.text.content.slice(relativeCaretIndex)
  }
  // this handles the case where we only delete one character
  else if (altDeleteIndex === relativeCaretIndex) {
    if (halt) {
      const prop = block[block.tag]
      if (!prop) return [] as RichText[]
      if (shouldBackup) {
        commandHandler.execute(
          'update-property-with-caret',
          new UpdatePropertyWithCaretCommand({
            target: prop,
            propertyName: 'richText',
            newValue: richTextsCopy,
            element,
            caretIndex,
          }),
        )
      } else {
        prop.richText = richTextsCopy
      }
      return richTextsCopy
    }
    currentRichText.text.content =
      currentRichText.text.content.slice(0, altDeleteIndex - 1) +
      currentRichText.text.content.slice(relativeCaretIndex)
  } else if (altDeleteIndex === -1) {
    currentRichText.text.content =
      currentRichText.text.content.slice(relativeCaretIndex)
  }
  // this handles the case where we delete to the end of the string (we don't want to delete the last rich text block)
  else if (richTextsCopy.length === 1) {
    currentRichText.text.content = ''
  }
  // this handles the case where we delete the rich text block (in case of bold, italics, etc.)
  else {
    richTextsCopy.splice(richTextsCopy.indexOf(currentRichText), 1)
  }

  // if we deleted all the content, delete the rich text item
  if (currentRichText.text.content.length === 0 && richTextsCopy.length > 1) {
    richTextsCopy.splice(richTextsCopy.indexOf(currentRichText), 1)
  }

  const prop = block[block.tag]
  if (!prop) return [] as RichText[]
  if (shouldBackup) {
    commandHandler.execute(
      'update-property-with-caret',
      new UpdatePropertyWithCaretCommand({
        target: prop,
        propertyName: 'richText',
        newValue: richTextsCopy,
        element,
        caretIndex,
      }),
    )
  } else {
    prop.richText = richTextsCopy
  }

  // for test cases only
  return richTextsCopy
}
