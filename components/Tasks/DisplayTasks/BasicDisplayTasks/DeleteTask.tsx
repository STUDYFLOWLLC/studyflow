/* eslint-disable no-promise-executor-return */
import { TrashIcon } from '@heroicons/react/24/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import { deleteOrUndeleteTask } from 'hooks/tasks/handleTask'
import useTasks, { Task } from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'

interface Props {
  task: Task
  groupBy?: 'Today' | 'All' | number
  flowId?: string
  showCompleted?: boolean
}

export default function DeleteTask({
  task,
  groupBy,
  flowId,
  showCompleted,
}: Props) {
  const user = useUser()
  const { userDetails } = useUserDetails(user.user?.id)
  const { tasks, mutateTasks } = useTasks(
    userDetails?.UserID,
    groupBy,
    showCompleted,
  )
  console.log(groupBy)
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)

  return (
    <div>
      <TrashIcon
        onClick={() => {
          deleteOrUndeleteTask(
            task,
            true,
            tasks,
            mutateTasks,
            flowDetails,
            mutateFlowDetails,
            !!flowId,
          )
        }}
        onKeyDown={() => {
          deleteOrUndeleteTask(
            task,
            true,
            tasks,
            mutateTasks,
            flowDetails,
            mutateFlowDetails,
            !!flowId,
          )
        }}
        className="w-4 h-4 text-info hover:text-info/80 hover:cursor-pointer"
      />
    </div>
  )
}
