import { CheckIcon } from '@heroicons/react/solid'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import { completeOrUncompleteTask } from 'hooks/tasks/handleTask'
import { archiveTask } from 'hooks/tasks/mutateTask'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface Props {
  TaskID: string
  isCompleted?: boolean
  cute?: boolean
  shouldNotUseUndo?: boolean
}

export default function Checkbox({
  TaskID,
  isCompleted,
  cute,
  shouldNotUseUndo,
}: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)
  const [completed, setCompleted] = useState(false)

  const archiveTaskLocal = (TaskID: string) => {
    let flagg = true
    mutateTasks(
      {
        mutate: true,
        tasks: tasks.map((task) => {
          if (task.TaskID === TaskID) {
            flagg = !task.Completed
            return { ...task, Completed: !task.Completed }
          }
          return task
        }),
      },
      {
        revalidate: false,
      },
    )
    return flagg
  }

  const undoArchiveLocal = () => {
    mutateTasks(
      {
        mutate: true,
        tasks,
      },
      {
        revalidate: false,
      },
    )
  }

  const notify = () => {
    let undo = false
    if (!shouldNotUseUndo)
      toast.custom(
        <div
          className="border bg-secondary/80 text-white p-2 rounded-md rounded-mdn hover:cursor-pointer"
          onClick={() => {
            undoArchiveLocal()
            undo = true
            toast.remove()
          }}
          onKeyDown={() => {
            undoArchiveLocal()
            undo = true
            toast.remove()
          }}
        >
          Undo
        </div>,
        {
          position: 'bottom-right',
        },
      )
    setTimeout(() => {
      if (!undo) {
        toast.remove()
        archiveTask(TaskID, true)
      }
    }, 4000)
  }

  return (
    <div>
      <div
        onClick={() => {
          completeOrUncompleteTask(TaskID, !isCompleted, tasks, mutateTasks)
          // notify()
        }}
        // toast.remove()
        // let flagg = true
        // setTimeout(() => {
        //   notify()
        //   flagg = archiveTaskLocal(TaskID)
        // }, 400)
        // setCompleted(flagg)
        onKeyDown={() => archiveTask(TaskID, true)}
        className={classNames(
          { 'border-transparent bg-gray-700': completed },
          { 'border-2 hover:bg-gray-100': !completed },
          { 'w-4 h-4': cute },
          { 'w-6 h-6': !cute },
          'cursor-pointer mr-3 mt-0.5  border rounded-full border-gray-400 transition-all duration-200 ease-in-out',
        )}
      >
        <CheckIcon
          className={classNames(
            { 'text-white opacity-100': completed },
            {
              'text-gray-400 opacity-0 hover:opacity-100': !completed,
            },
            { 'w-3 h-3': cute },
            { 'w-5 h-5 mt-0.5 ml-px': !cute },
            'transition-all duration-200 ease-in-out ',
          )}
        />
      </div>
    </div>
  )
}
