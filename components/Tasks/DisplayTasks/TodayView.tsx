import { Task } from 'hooks/tasks/useTasks'
import BasicDisplayTasks from './BasicDisplayTasks'

interface Props {
  tasks: Task[]
  archiveTaskLocal: (TaskID: number) => void
}

export default function TodayView({ tasks, archiveTaskLocal }: Props) {
  const isToday = (task: Task) => {
    const today = new Date()
    const dueDate = new Date(task.DueDate)
    return (
      today.getDate() === dueDate.getDate() &&
      today.getMonth() === dueDate.getMonth() &&
      today.getFullYear() === dueDate.getFullYear()
    )
  }

  return (
    <BasicDisplayTasks
      archiveTaskLocal={archiveTaskLocal}
      tasks={tasks.filter((task) => isToday(task))}
    />
  )
}
