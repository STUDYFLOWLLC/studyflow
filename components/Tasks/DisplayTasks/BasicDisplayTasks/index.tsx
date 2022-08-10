import BasicTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/BasicTask'
import { Task } from 'hooks/tasks/useTasks'
import { Toaster } from 'react-hot-toast'
import sortByDueDate from 'utils/tasks/sortTasks'

interface Props {
  tasks: Task[]
  groupBy: 'Today' | 'All' | number
  readOnly?: boolean
  cute?: boolean
  shouldNotUseUndo?: boolean
  showCompleted?: boolean
  repetitionId?: string
  flowId?: string
}

export default function BasicDisplayTasks({
  tasks,
  groupBy,
  readOnly,
  cute,
  shouldNotUseUndo,
  showCompleted,
  repetitionId,
  flowId,
}: Props) {
  return (
    <div className="w-full">
      {tasks
        .sort((taskA, taskB) => sortByDueDate(taskA, taskB, true))
        .sort((taskA, taskB) => {
          if (taskA.Completed && !taskB.Completed) {
            return 1
          }
          if (!taskA.Completed && taskB.Completed) {
            return -1
          }
          return 0
        })
        .map(
          (task) =>
            (!task.Completed || showCompleted) && (
              <BasicTask
                task={task}
                groupBy={groupBy}
                key={task.TaskID}
                cute={cute}
                readOnly={readOnly}
                shouldNotUseUndo={shouldNotUseUndo}
                repetitionId={repetitionId}
                flowId={flowId}
              />
            ),
        )}
      <Toaster />
    </div>
  )
}
