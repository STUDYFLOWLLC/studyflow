/* eslint-disable no-promise-executor-return */
import { TrashIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import deleteTask from 'hooks/tasks/deleteTask'
import useTasks, { Task } from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'

interface Props {
  task: Task
}

export default function DeleteTask({ task }: Props) {
  const [deletePrompt, setDeletePrompt] = useState(false)

  const user = useUser()
  const { userDetails } = useUserDetails(user.user?.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)

  const deleteTasks = async () => {
    // Mutate locally
    mutateTasks(
      {
        tasks: tasks.filter((taskFilter) => task.TaskID !== taskFilter.TaskID),
      },
      {
        revalidate: false,
      },
    )

    // Reset local state
    setDeletePrompt(false)

    // Delete remotely
    deleteTask(task.TaskID)
  }

  return (
    <>
      {!deletePrompt && (
        <TrashIcon
          onClick={() => {
            deleteTasks()
          }}
          onKeyDown={() => deleteTasks()}
          className="w-5 h-5 text-gray-400 hover:text-black hover:cursor-pointer"
        />
      )}
      {deletePrompt && (
        <div className="border px-1 items-center flex">
          <span className="border mr-1.5">Delete</span>
          <span>Cancel</span>
        </div>
      )}
    </>
  )
}
