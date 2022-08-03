import BasicTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/BasicTask'
import { Task } from 'hooks/tasks/useTasks'
import { Toaster } from 'react-hot-toast'
import sortByDueDate from 'utils/tasks/sortTasks'

interface Props {
  tasks: Task[]
  readOnly?: boolean
  cute?: boolean
  shouldNotUseUndo?: boolean
  showCompleted?: boolean
}

export default function BasicDisplayTasks({
  tasks,
  readOnly,
  cute,
  shouldNotUseUndo,
  showCompleted,
}: Props) {
  return (
    <div className="w-full">
      {tasks
        .sort((taskA, taskB) => sortByDueDate(taskA, taskB, true))
        .map(
          (task) =>
            (!task.Completed || showCompleted) && (
              <BasicTask
                task={task}
                key={task.TaskID}
                cute={cute}
                readOnly={readOnly}
                shouldNotUseUndo={shouldNotUseUndo}
              />
            ),
        )}
      <Toaster />
    </div>
  )
}
