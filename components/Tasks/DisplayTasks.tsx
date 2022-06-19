import { User } from '@supabase/supabase-auth-helpers/nextjs'
import Checkbox from 'components/Tasks/Checkbox'
import { Task } from 'hooks/tasks/useTasks'

interface Props {
  user: User
  tasksDisplayed: Task[]
  viewing: string
}

export default function DisplayTasks({ user, tasksDisplayed, viewing }: Props) {
  return (
    <div>
      <div className="ml-20 mr-20 mx-auto border-t border-gray-300 m-6" />
      <div className="flex justify-center">
        <ul>
          {tasksDisplayed.map((task) => (
            <li key={task.TaskID}>
              <div className="flex">
                <Checkbox TaskID={task.TaskID} />
                <div className="flex flex-col">
                  <div className="text-lg font-medium">{task.Title}</div>
                  <div className="font-extralight">{task.Description}</div>
                  <div>{task.DueDate}</div>
                </div>
              </div>

              <div className=" mx-auto border-t border-gray-300 m-6" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
