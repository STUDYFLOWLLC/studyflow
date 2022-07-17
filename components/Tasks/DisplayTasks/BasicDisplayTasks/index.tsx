import BasicTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/BasicTask'
import { Task } from 'hooks/tasks/useTasks'
import { Toaster } from 'react-hot-toast'
import sortByDueDate from 'utils/tasks/sortTasks'

interface Props {
  tasks: Task[]
}

export default function BasicDisplayTasks({ tasks }: Props) {
  return (
    <div className="w-full">
      {tasks
        .sort((taskA, taskB) => sortByDueDate(taskA, taskB, true))
        .map(
          (task) =>
            !task.Completed && <BasicTask task={task} key={task.TaskID} />,
        )}
      <Toaster />
    </div>
  )
}
