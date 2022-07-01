import { Block } from 'types/Flow'
import findCurrentRichTextBlock from 'utils/flows/findCurrentRichTextBlock'
import lengthOfPreviousRichText from 'utils/flows/lengthOfPreviousRichText'

const findPunctuationOrSpaceOrSymbolIndex = (str: string) => {
  const punctuationOrSpaceOrSymbol = /[-!$%^&*()_+|~=`{}\\[\]:\\/;<>?,.@#]/
  const index = str.search(punctuationOrSpaceOrSymbol)
  if (index === -1) return undefined
  return str.length - index
}

export default function altDeleteRichText(block: Block, caretIndex: number) {
  const richTexts = block[block.tag]?.richText
  if (!richTexts) return

  const currentRichText = findCurrentRichTextBlock(block, caretIndex)
  if (!currentRichText?.text) return

  const previousLength = lengthOfPreviousRichText(richTexts, currentRichText)
  const relativeCaretIndex = caretIndex - previousLength

  // find where we should delete to (space, punctuation, or symbol)
  const altDeleteIndex = findPunctuationOrSpaceOrSymbolIndex(
    currentRichText.text.content
      .slice(0, relativeCaretIndex)
      .split('')
      .reverse()
      .join(''),
  )

  // if we found a space or punctuation, delete to that
  if (
    altDeleteIndex !== undefined &&
    altDeleteIndex !== currentRichText.text.content.length
  ) {
    currentRichText.text.content =
      currentRichText.text.content.slice(0, altDeleteIndex) +
      currentRichText.text.content.slice(relativeCaretIndex)
  }
  // this handles the case where we only delete one character
  else if (altDeleteIndex === currentRichText.text.content.length) {
    currentRichText.text.content = currentRichText.text.content.slice(
      0,
      altDeleteIndex - 1,
    )
  } else if (altDeleteIndex === undefined) {
    currentRichText.text.content =
      currentRichText.text.content.slice(relativeCaretIndex)
    return true
  }
  // this handles the case where we delete to the end of the string (we don't want to delete the last rich text block)
  else if (richTexts.length === 1) {
    currentRichText.text.content = ''
  }
  // this handles the case where we delete the rich text block (in case of bold, italics, etc.)
  else {
    richTexts.splice(richTexts.indexOf(currentRichText), 1)
  }
}
