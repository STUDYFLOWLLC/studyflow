/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlowDetail } from 'hooks/flows/useFlowDetails'
import makeFlashcardStack from 'hooks/repetition/makeFlashcardStack'
import mutateDeleteFlashcardStack, {
  mutateFlashcardStackTitle,
} from 'hooks/repetition/mutateFlashcardStack'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import { FlashcardStack } from 'types/Repetition'

export default async function createFlashcardStack(
  flowId: string,
  mutateFlashcardStack: KeyedMutator<any>,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
  setCreating: (creating: boolean) => void,
) {
  if (!flowDetails) return

  setCreating(true)

  // create on server
  const flashcardStackReal = await makeFlashcardStack(flowId)

  // mutate on client
  mutateFlashcardStack(
    {
      mutate: true,
      mutatedFlashcardStack: { ...flashcardStackReal },
    },
    {
      revalidate: false,
    },
  )
  mutateFlowDetails(
    {
      mutate: true,
      mutatedFlow: {
        ...flowDetails,
        FK_FlashcardStacks: [
          ...flowDetails.FK_FlashcardStacks,
          {
            FlashcardStackID: flashcardStackReal.FlashcardStackID,
            Title: flashcardStackReal.Title,
            Description: flashcardStackReal.Description,
            FK_Flashcards: flashcardStackReal.FK_Flashcards.map(
              (flashcard) => ({
                FlashcardID: flashcard.FlashcardID,
              }),
            ),
          },
        ],
      },
    },
    {
      revalidate: false,
    },
  )

  setCreating(false)

  return flashcardStackReal.FlashcardStackID
}

export function deleteFlashcardStack(
  flashcardStackId: string,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
) {
  if (!flowDetails) return

  // delete on server
  mutateDeleteFlashcardStack(flashcardStackId)

  // mutate on client
  mutateFlowDetails(
    {
      mutate: true,
      mutatedFlow: {
        ...flowDetails,
        FK_FlashcardStacks: flowDetails.FK_FlashcardStacks.filter(
          (flashcardStack) =>
            flashcardStack.FlashcardStackID !== flashcardStackId,
        ),
      },
    },
    {
      revalidate: false,
    },
  )

  toast.success('Stack deleted')
}

export async function changeTitle(
  newTitle: string,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
  flashcardStack: FlashcardStack | null,
  mutateFlashcardStack: KeyedMutator<any>,
  setSaving: (saving: boolean) => void,
) {
  if (!flashcardStack) return

  setSaving(true)

  // mutate locally
  mutateFlashcardStack(
    {
      mutate: true,
      mutatedFlashcardStack: {
        ...flashcardStack,
        Title: newTitle,
      },
    },
    {
      revalidate: false,
    },
  )
  if (flowDetails) {
    mutateFlowDetails(
      {
        mutate: true,
        mutatedFlow: {
          ...flowDetails,
          FK_FlashcardStacks: flowDetails.FK_FlashcardStacks.map((fs) => {
            if (fs.FlashcardStackID === flashcardStack.FlashcardStackID) {
              return {
                ...flashcardStack,
                Title: newTitle,
              }
            }
            return flashcardStack
          }),
        },
      },
      {
        revalidate: false,
      },
    )
  }

  await mutateFlashcardStackTitle(flashcardStack.FlashcardStackID, newTitle)

  setSaving(false)
}
