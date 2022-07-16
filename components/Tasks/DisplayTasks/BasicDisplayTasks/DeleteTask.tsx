/* eslint-disable no-promise-executor-return */
import { TrashIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import deleteTask from 'hooks/tasks/deleteTask'
import useTasks, { Task } from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import toast from 'react-hot-toast'

interface Props {
  task: Task
}

export default function DeleteTask({ task }: Props) {
  const user = useUser()
  const { userDetails } = useUserDetails(user.user?.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)

  const deleteTaskLocal = async () => {
    // Mutate locally
    mutateTasks(
      {
        tasks: tasks.filter((taskFilter) => task.TaskID !== taskFilter.TaskID),
      },
      {
        revalidate: false,
      },
    )
  }

  const undoDeleteLocal = () => {
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
          undoDeleteLocal()
          undo = true
          toast.remove()
        }}
        onKeyDown={() => {
          undoDeleteLocal()
          undo = true
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
        deleteTask(task.TaskID)
      }
    }, 4000)
  }

  return (
    <div>
      <TrashIcon
        onClick={() => {
          toast.remove()
          notify()
          deleteTaskLocal()
        }}
        onKeyDown={() => {
          toast.remove()
          notify()
          deleteTaskLocal()
        }}
        className="w-5 h-5 text-gray-400 hover:text-black hover:cursor-pointer"
      />
    </div>
  )
}
