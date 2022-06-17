import { User } from '@supabase/supabase-auth-helpers/nextjs'
import { Task } from 'hooks/tasks/useTasks'

interface Props {
  user: User
  tasks: Task[]
}

export default function DisplayTasks({ user, tasks }: Props) {
  console.log(tasks)
  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div key={task.TaskID}>
          <div>{task.Title}</div>
          <div>{task.Description}</div>
          <div>{task.DueDate}</div>
        </div>
      ))}
    </div>
  )
}
