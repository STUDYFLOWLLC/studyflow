import abbreviateDate from 'utils/abbreviateDate'

interface Props {
  taskDueDateExact: Date | undefined
  setTaskDueDateExact: (taskDueDateExact: Date) => void
}

export default function DateButton({
  taskDueDateExact,
  setTaskDueDateExact,
}: Props) {
  return (
    <div>
      {taskDueDateExact
        ? abbreviateDate(taskDueDateExact, 'America/Los_Angeles')
        : 'Due date'}{' '}
    </div>
  )
}
