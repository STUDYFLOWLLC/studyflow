import { CalendarIcon } from '@heroicons/react/outline'
import abbreviateDate from 'utils/abbreviateDate'

interface Props {
  taskDueDateExact: Date | undefined
  setTaskDueDateExact: (taskDueDateExact: Date) => void
}

export default function DateButton({
  taskDueDateExact,
  setTaskDueDateExact,
}: Props) {
  console.log(taskDueDateExact)
  return (
    <div className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 border border-gray-300 rounded-md shadow-sm mx-2 text-sm font-medium">
      <CalendarIcon className="w-4 mr-2" />
      {taskDueDateExact
        ? abbreviateDate(taskDueDateExact, 'America/Los_Angeles')
        : 'Due date'}{' '}
    </div>
  )
}
