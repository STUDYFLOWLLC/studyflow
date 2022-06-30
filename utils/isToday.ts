import { Task } from 'hooks/tasks/useTasks'

export default function isToday(task: Task) {
  const today = new Date()
  const dueDate = new Date(task.DueDate)
  return (
    today.getDate() === dueDate.getDate() &&
    today.getMonth() === dueDate.getMonth() &&
    today.getFullYear() === dueDate.getFullYear()
  )
}
