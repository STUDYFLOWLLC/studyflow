/* eslint-disable no-promise-executor-return */
import { TrashIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { deleteOrUndeleteTask } from 'hooks/tasks/handleTask'
import useTasks, { Task } from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'

interface Props {
  task: Task
  groupBy?: 'Today' | 'All' | number
}

export default function DeleteTask({ task, groupBy }: Props) {
  const user = useUser()
  const { userDetails } = useUserDetails(user.user?.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID, groupBy)

  return (
    <div>
      <TrashIcon
        onClick={() => {
          deleteOrUndeleteTask(task, true, tasks, mutateTasks)
        }}
        onKeyDown={() => {
          deleteOrUndeleteTask(task, true, tasks, mutateTasks)
        }}
        className="w-5 h-5 text-gray-400 hover:text-black hover:cursor-pointer"
      />
    </div>
  )
}
