import { CheckIcon } from '@heroicons/react/solid'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import { archiveTask } from 'hooks/tasks/mutateTask'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

interface Props {
  TaskID: string
}

export default function Checkbox({ TaskID }: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)
  const [completed, setCompleted] = useState(false)

  const archiveTaskLocal = (TaskID: string) => {
    mutateTasks(
      {
        mutate: true,
        tasks: tasks.map((task) => {
          if (task.TaskID === TaskID) {
            return { ...task, Completed: true }
          }
          return task
        }),
      },
      {
        revalidate: false,
      },
    )
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
          toast.remove()
          setTimeout(() => {
            notify()
            archiveTaskLocal(TaskID)
          }, 400)
          setCompleted(true)
        }}
        onKeyDown={() => archiveTask(TaskID, true)}
        className={classNames(
          { 'border-transparent bg-gray-700': completed },
          { 'border-2 hover:bg-gray-100': !completed },
          'cursor-pointer w-6 mr-3 mt-0.5 h-6 border rounded-full border-gray-400 transition-all duration-200 ease-in-out',
        )}
      >
        <CheckIcon
          className={classNames(
            { 'text-white opacity-100': completed },
            {
              'text-gray-400 opacity-0 hover:opacity-100': !completed,
            },
            'w-5 h-5 transition-all duration-200 ease-in-out mt-0.5 ml-px',
          )}
        />
      </div>
      <Toaster />
    </div>
  )
}
