import { Task } from 'hooks/tasks/useTasks'

/**
 * Sort tasks by DueDate. Put tasks with no DueDate at the end.
 * @param taskA the first task to compare
 * @param taskB the second task to compare
 * @returns 1 if taskA is more recent than taskB, -1 if taskB is more recent than taskA.
 * These are reversed to make the sort ascending.
 */
export default function sortByDueDate(taskA: Task, taskB: Task, asc?: boolean) {
  if (taskA.DueDate <= taskB.DueDate) return asc ? -1 : 1
  if (taskA.DueDate > taskB.DueDate) return asc ? 1 : -1
  if (!taskA.DueDate && taskB.DueDate) return asc ? 1 : -1
  if (taskA.DueDate && !taskB.DueDate) return asc ? -1 : 1
  return 0
}
