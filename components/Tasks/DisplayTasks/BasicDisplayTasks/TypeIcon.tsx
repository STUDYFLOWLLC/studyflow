import { TagIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { TaskType } from 'types/Task'

interface Props {
  taskType: TaskType | undefined
}

const textColor = (taskType: TaskType | undefined) => {
  if (!taskType) return
  switch (taskType) {
    case 'WORK_ON':
      return 'text-cyan-500'
    case 'DUE':
      return 'text-orange-500'
    case 'REVIEW':
      return 'text-purple-500'
    default:
  }
}

const taskTypeToString = (taskType: TaskType | undefined) => {
  if (!taskType) return
  switch (taskType) {
    case 'WORK_ON':
      return 'Work-on'
    case 'DUE':
      return 'Due'
    case 'REVIEW':
      return 'Review'
    default:
  }
}

export default function TypeIcon({ taskType }: Props) {
  return (
    <div className="text-sm">
      {taskType && (
        <div className={classNames(textColor(taskType), 'flex items-center')}>
          <TagIcon className="w-4 h-4 mr-0.5" />
          <div>{taskTypeToString(taskType)}</div>
        </div>
      )}
    </div>
  )
}
