import { Repetition } from 'types/Repetition'
import { TaskType } from 'types/Task'

/**
 * Find the next review for a repetition. Return false if there is no review.
 * @param repetition Repetition object
 * @returns the abbreviated date of the next review or false
 */
export default function findNextReviewTask(repetition: Repetition | null) {
  if (!repetition) return false

  for (
    let i = 0;
    i <
    repetition.FK_Tasks.sort((tA, tB) =>
      tA.Title.slice(1, 2) > tB.Title.slice(1, 2) ? 1 : -1,
    ).length;
    i += 1
  ) {
    const task = repetition.FK_Tasks[i]
    if (task.Type === TaskType.REVIEW && !task.Completed) {
      return task
    }
  }

  return false
}
