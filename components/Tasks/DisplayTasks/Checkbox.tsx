import { CheckIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { archiveTask } from 'hooks/tasks/mutateTask'
import { useState } from 'react'

interface Props {
  TaskID: number
  archiveTaskLocal: (TaskID: number) => void
}

export default function Checkbox({ TaskID, archiveTaskLocal }: Props) {
  const [completed, setCompleted] = useState(false)

  return (
    <div
      onClick={() => {
        archiveTask(TaskID, true)
        setCompleted(true)
        setTimeout(() => {
          setCompleted(false)
          archiveTaskLocal(TaskID)
        }, 400)
      }}
      onKeyDown={() => archiveTask(TaskID, true)}
      className={classNames(
        { 'border-transparent bg-gray-500': completed },
        { 'border-2 hover:bg-gray-50': !completed },
        'cursor-pointer w-6 mr-3 mt-0.5 h-6 border-2 rounded-full  transition-all duration-200 ease-in-out',
      )}
    >
      <CheckIcon
        className={classNames(
          { 'text-white opacity-100': completed },
          { 'text-gray-400 opacity-0 hover:opacity-100': !completed },
          'w-5 h-5 transition-all duration-200 ease-in-out',
        )}
      />
    </div>
  )
}
