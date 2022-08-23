import { CheckIcon } from '@heroicons/react/solid'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { completeOrUncompleteTask } from 'hooks/tasks/handleTask'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'

interface Props {
  TaskID: string
  groupBy?: 'Today' | 'All' | number
  isCompleted?: boolean
  cute?: boolean
  repetitionId?: string
  flowId?: string
  index?: number
  showCompleted?: boolean
}

export default function Checkbox({
  TaskID,
  groupBy,
  isCompleted,
  cute,
  repetitionId,
  flowId,
  index,
  showCompleted,
}: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { tasks, mutateTasks } = useTasks(
    userDetails?.UserID,
    groupBy,
    index,
    showCompleted,
  )
  const { repetitionDetails, mutateRepetitionDetails } =
    useRepetitionDetails(repetitionId)
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)

  return (
    <div>
      <div
        onClick={() => {
          completeOrUncompleteTask(
            TaskID,
            !isCompleted,
            tasks,
            mutateTasks,
            !!repetitionId || !!flowId,
            repetitionDetails,
            mutateRepetitionDetails,
            flowDetails,
            mutateFlowDetails,
          )
        }}
        onKeyDown={() => {
          completeOrUncompleteTask(
            TaskID,
            !isCompleted,
            tasks,
            mutateTasks,
            !!repetitionId,
            repetitionDetails,
            mutateRepetitionDetails,
            flowDetails,
            mutateFlowDetails,
          )
        }}
        className={classNames(
          {
            'border-transparent bg-gray-500': isCompleted,
          },
          {
            'border-2 hover:bg-base-200': !isCompleted,
          },
          { 'w-4 h-4': cute },
          { 'w-6 h-6': !cute },
          'cursor-pointer mr-3 mt-0.5  border rounded-full border-info transition-all duration-200 ease-in-out',
        )}
      >
        <CheckIcon
          className={classNames(
            {
              'opacity-100': isCompleted,
            },
            {
              'text-info opacity-0 hover:opacity-100': !isCompleted,
            },
            { 'w-3 h-3 ml-px mt-px': cute },
            { 'w-5 h-5 mt-0.5 ml-px': !cute },
            'transition-all duration-200 ease-in-out text-white',
          )}
        />
      </div>
    </div>
  )
}
