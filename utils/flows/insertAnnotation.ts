import { Annotations, RichText, RichTextType } from 'types/Flow'
import sliceRichText from 'utils/flows/sliceRichText'
import findCurrentRichText from './findCurrentRichText'

export default function insertAnnotation(
  richTexts: RichText[],
  caretIndex: number,
  annotationType: Annotations,
) {
  const richTextsCopy = [...richTexts]

  const currentRichText = findCurrentRichText(richTextsCopy, caretIndex)
  if (!currentRichText) return [] as RichText[]

  // handles if we do not need to create a new richText
  const currentRichTextIndex = richTexts.indexOf(currentRichText)
  const currentAnnotationHolder = currentRichText.annotations || {}
  if (currentRichText.text?.content === '') {
    richTextsCopy[currentRichTextIndex] = {
      ...currentRichText,
      annotations: {
        ...currentAnnotationHolder,
        [annotationType]: true,
      },
    }
    return richTextsCopy
  }

  const insertIndex = sliceRichText(richTexts, caretIndex)
  if (insertIndex === -1) return [] as RichText[]

  const previousAnnotationHolder =
    richTextsCopy[insertIndex - 1].annotations || {}
  const flagg = richTextsCopy[insertIndex - 1]
    ? !previousAnnotationHolder[annotationType]
    : true

  richTextsCopy.splice(insertIndex, 0, {
    type: RichTextType.TEXT,
    text: {
      content: '',
    },
    annotations: {
      ...previousAnnotationHolder,
      [annotationType]: flagg,
    },
  })

  return richTextsCopy
}
