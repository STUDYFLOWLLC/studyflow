import {
  ArrowPathIcon,
  BriefcaseIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { TaskType } from 'types/Task'

interface Props {
  taskType: TaskType | undefined
  kanban?: boolean
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
      return 'Work on'
    case 'DUE':
      return 'Due'
    case 'REVIEW':
      return 'Review'
    default:
  }
}

const taskTypeToIcon = (taskType: TaskType | undefined) => {
  if (!taskType) return
  switch (taskType) {
    case 'WORK_ON':
      return BriefcaseIcon
    case 'DUE':
      return ExclamationCircleIcon
    case 'REVIEW':
      return ArrowPathIcon
    default:
  }
}

export default function TypeIcon({ taskType, kanban }: Props) {
  const Icon = taskTypeToIcon(taskType)
  return (
    <div className="text-xs">
      {taskType && (
        <div className={classNames(textColor(taskType), 'flex items-center')}>
          {Icon && <Icon className="w-3.5 h-3.5 mr-1" />}
          {!kanban && <div>{taskTypeToString(taskType)}</div>}
        </div>
      )}
    </div>
  )
}
