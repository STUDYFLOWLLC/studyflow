import { CheckIcon } from '@heroicons/react/20/solid'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { completeOrUncompleteTask } from 'hooks/tasks/handleTask'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'

interface Props {
  TaskID: string
  groupBy?: 'Today' | 'All' | number
  isCompleted?: boolean
  cute?: boolean
  repetitionId?: string
  flowId?: string
  showCompleted?: boolean
}

export default function Checkbox({
  TaskID,
  groupBy,
  isCompleted,
  cute,
  repetitionId,
  flowId,
  showCompleted,
}: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { tasks, mutateTasks } = useTasks(
    userDetails?.UserID,
    groupBy,
    showCompleted,
  )
  const { repetitionDetails, mutateRepetitionDetails } =
    useRepetitionDetails(repetitionId)
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)

  const [showCheckbox, setShowCheckbox] = useState(false)

  return (
    <div className="mr-2">
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
        onMouseEnter={() => setShowCheckbox(true)}
        onMouseLeave={() => setShowCheckbox(false)}
        className={classNames(
          {
            'border-transparent bg-gray-500': isCompleted,
          },
          {
            'border-2': !isCompleted,
          },
          { 'w-4 h-4': cute },
          { 'w-5 h-5': !cute },
          'cursor-pointer mt-0.5  border rounded-full border-info transition-all duration-200 ease-in-out',
        )}
      >
        {(showCheckbox || isCompleted) && (
          <CheckIcon
            className={classNames(
              {
                'opacity-100 text-white': isCompleted,
              },
              {
                'text-info opacity-0 hover:opacity-100 text-info/60 mr-px':
                  !isCompleted,
              },
              { 'w-3 h-3 ml-px mt-px': cute },
              { 'w-3.5 h-3.5 mt-0.5 ml-0.5': !cute },
              'transition-all duration-200',
            )}
          />
        )}
      </div>
    </div>
  )
}
