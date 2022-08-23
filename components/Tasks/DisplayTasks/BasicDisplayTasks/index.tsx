import FlowPaginationButtons from 'components/FlowTable/FlowPaginationButtons'
import BasicTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/BasicTask'
import { Task } from 'hooks/tasks/useTasks'
import { Toaster } from 'react-hot-toast'
import sortByDueDate from 'utils/tasks/sortTasks'

interface Props {
  tasks: Task[]
  groupBy: 'Today' | 'All' | number
  index?: number
  setIndex?: (index: number) => void
  readOnly?: boolean
  cute?: boolean
  shouldNotUseUndo?: boolean
  showCompleted?: boolean
  repetitionId?: string
  flowId?: string
}

export default function BasicDisplayTasks({
  tasks,
  index,
  setIndex,
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
      <Toaster />
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
                index={index}
                showCompleted={showCompleted}
              />
            ),
        )}
      {index !== undefined && setIndex && (
        <div>
          {(index > 0 || tasks.length >= 8) && (
            <FlowPaginationButtons
              index={index}
              setIndex={setIndex}
              flowLength={tasks.length}
            />
          )}
        </div>
      )}
    </div>
  )
}
