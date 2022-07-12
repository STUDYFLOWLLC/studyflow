import BasicTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/BasicTask'
import { Task } from 'hooks/tasks/useTasks'

interface Props {
  tasks: Task[]
}

export default function BasicDisplayTasks({ tasks }: Props) {
  return (
    <div className="w-full">
      {tasks.map(
        (task) =>
          !task.Completed && <BasicTask task={task} key={task.TaskID} />,
      )}
    </div>
  )
}
