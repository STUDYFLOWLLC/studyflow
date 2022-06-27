import { ArrowLeftIcon, TrashIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import deleteTask from 'hooks/tasks/deleteTask'
import useTasks, { Task } from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import toast from 'react-hot-toast'

interface Props {
  task: Task
}

export default function DeleteTask({ task }: Props) {
  const user = useUser()
  const { userDetails } = useUserDetails(user.user?.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)

  const [undo, setUndo] = useState(false)

  const revertTask = () => {
    setUndo(true)
    mutateTasks(
      {
        mutate: true,
        tasks: [tasks.filter((taskMap) => taskMap.TaskID !== task.TaskID)],
        task,
      },
      {
        revalidate: false,
      },
    )
  }

  const notify = () =>
    toast.custom(
      !undo ? (
        <div
          className="flex border bg-red-200 border-transparent p-1 hover:bg-red-400 cursor-pointer rounded-md mb-4"
          onClick={() => revertTask()}
          onKeyDown={() => revertTask()}
        >
          <span className="mr-1">Undo</span>
          <ArrowLeftIcon className="w-4" />
        </div>
      ) : (
        <div />
      ),
      {
        duration: 4000,
        position: 'bottom-right',
      },
    )

  const deleteTaskLocal = () => {
    notify()
    mutateTasks(
      {
        mutate: true,
        tasks: tasks.filter((taskFilter) => task.TaskID !== taskFilter.TaskID),
      },
      {
        revalidate: false,
      },
    )
    setTimeout(() => {
      if (!undo) deleteTask(task.TaskID)
    }, 4100)
  }

  return (
    <TrashIcon
      onClick={() => deleteTaskLocal()}
      onKeyDown={() => deleteTaskLocal()}
      className="w-5 h-5 text-gray-400 hover:text-black hover:cursor-pointer"
    />
  )
}
