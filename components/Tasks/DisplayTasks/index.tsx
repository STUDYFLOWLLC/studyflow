import { User } from '@supabase/supabase-auth-helpers/nextjs'
import Checkbox from 'components/Tasks/DisplayTasks/Checkbox'
import { Task } from 'hooks/tasks/useTasks'

interface Props {
  user: User
  tasksDisplayed: Task[]
  viewing: string
}

export default function DisplayTasks({ user, tasksDisplayed, viewing }: Props) {
  return (
    <ul>
      {tasksDisplayed.map((task) => (
        <li className="border rounded-lg shadow-md m-4 p-2" key={task.TaskID}>
          <div className="flex">
            <Checkbox TaskID={task.TaskID} />
            <div className="flex flex-col">
              <div className="text-lg font-medium">{task.Title}</div>
              <div className="font-extralight">{task.Description}</div>
              <div>{task.DueDate}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
