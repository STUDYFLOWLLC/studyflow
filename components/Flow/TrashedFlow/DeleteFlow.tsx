import { useUser } from '@supabase/supabase-auth-helpers/react'
import useDashFlows from 'hooks/flows/useDashFlows'
import useUserDetails from 'hooks/useUserDetails'
import { deleteFlow } from 'utils/flows/propertyHandlers'

interface Props {
  flowId: string
  closeModal: () => void
}

export default function DeleteFlow({ flowId, closeModal }: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { dashFlows, mutateDashFlows } = useDashFlows(userDetails?.UserID)

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
      onClick={() => {
        deleteFlow(flowId, dashFlows, mutateDashFlows, closeModal)
      }}
      onKeyDown={() => {
        deleteFlow(flowId, dashFlows, mutateDashFlows, closeModal)
      }}
    >
      Delete flow
    </button>
  )
}
