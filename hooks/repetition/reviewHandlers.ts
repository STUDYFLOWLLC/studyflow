/* eslint-disable @typescript-eslint/no-unused-vars */

import mutateCreateFlashcardStackReview, {
  mutateFlashcardStackReviewEndTime,
} from 'hooks/repetition/mutateReviews'
import { completeOrUncompleteTask } from 'hooks/tasks/handleTask'
import { Task } from 'hooks/tasks/useTasks'
import { KeyedMutator } from 'swr'
import { Repetition } from 'types/Repetition'
import findNextReviewTask from 'utils/repetition/findNextReviewTask'

export default async function createFlashcardStackReview(
  repetitionDetails: Repetition | null,
  mutateRepetitionDetails: KeyedMutator<any>,
  setCreating: (creating: boolean) => void,
) {
  if (!repetitionDetails) return

  setCreating(true)

  // create in backend
  const newReview = await mutateCreateFlashcardStackReview(
    repetitionDetails.FK_FlashcardStackID,
  )

  // create locally
  mutateRepetitionDetails(
    {
      mutate: true,
      newRepetition: {
        ...repetitionDetails,
        FK_FlashcardStack: {
          ...repetitionDetails.FK_FlashcardStack,
          FK_FlashcardStackReviews: [
            { ...newReview, FK_FlashcardReviews: [] },
            ...repetitionDetails.FK_FlashcardStack.FK_FlashcardStackReviews,
          ],
        },
      },
    },
    {
      revalidate: false,
    },
  )

  setCreating(false)
}

export function finishReview(
  flashcardStackReviewId: string,
  repetitionDetails: Repetition | null,
  mutateRepetitionDetails: KeyedMutator<any>,
  completeTask?: boolean,
  tasks?: Task[],
  mutateTasks?: KeyedMutator<any>,
) {
  if (!repetitionDetails) return

  // mutate in backend
  mutateFlashcardStackReviewEndTime(
    flashcardStackReviewId,
    new Date().toISOString(),
  )

  const nextReviewTask = findNextReviewTask(repetitionDetails)

  // mutate locally
  mutateRepetitionDetails(
    {
      mutate: true,
      newRepetition: {
        ...repetitionDetails,
        FK_Tasks: completeTask
          ? repetitionDetails.FK_Tasks.map((task) => {
              if (nextReviewTask && task.TaskID === nextReviewTask.TaskID) {
                return {
                  ...task,
                  Completed: true,
                }
              }
              return task
            })
          : repetitionDetails.FK_Tasks,
        FK_FlashcardStack: {
          ...repetitionDetails.FK_FlashcardStack,
          FK_FlashcardStackReviews:
            repetitionDetails.FK_FlashcardStack.FK_FlashcardStackReviews.map(
              (flashcardStackReview) => {
                if (
                  flashcardStackReview.FlashcardStackReviewID ===
                  flashcardStackReviewId
                ) {
                  return {
                    ...flashcardStackReview,
                    EndTime: new Date().toISOString(),
                  }
                }
                return flashcardStackReview
              },
            ),
        },
      },
    },
    { revalidate: false },
  )

  if (completeTask && nextReviewTask && tasks && mutateTasks) {
    completeOrUncompleteTask(
      nextReviewTask.TaskID,
      true,
      tasks,
      mutateTasks,
      true,
    )
  }
}
