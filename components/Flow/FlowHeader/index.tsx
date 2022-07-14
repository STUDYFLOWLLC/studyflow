import { useUser } from '@supabase/supabase-auth-helpers/react'
import DeleteFlow from 'components/Flow/FlowHeader/DeleteFlow'
import FlowSaving from 'components/Flow/FlowHeader/FlowSaving'
import FlowVisibilityChooser from 'components/Flow/FlowHeader/FlowVisibilityChooser'
import NextReview from 'components/Flow/FlowHeader/NextReview'
import OpenAsPage from 'components/Flow/FlowHeader/OpenAsPage'
import useDashFlows from 'hooks/flows/useDashFlows'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useUserDetails from 'hooks/useUserDetails'
import { FlowVisibility } from 'types/Flow'
import { changeVisibility } from 'utils/flows/propertyHandlers'

interface Props {
  flowId: string
  deleteFlow: () => void
  saving: boolean
}

export default function FlowHeader({ flowId, deleteFlow, saving }: Props) {
  const { flowDetails, flowDetailsLoading, mutateFlowDetails } =
    useFlowDetails(flowId)
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { dashFlows, mutateDashFlows } = useDashFlows(userDetails?.UserID)

  const visbilityMutator = (newVisbility: FlowVisibility) =>
    changeVisibility(
      flowId,
      newVisbility,
      flowDetails,
      mutateFlowDetails,
      dashFlows,
      mutateDashFlows,
    )

  return (
    <div className="m-4 flex justify-between items-center">
      <OpenAsPage />
      <div className="flex items-center">
        <DeleteFlow flowId={flowId} deleteFlow={deleteFlow} />
        <FlowVisibilityChooser
          loading={flowDetailsLoading}
          visibility={flowDetails?.Visibility}
          mutator={visbilityMutator}
        />
        <NextReview />
        <FlowSaving saving={saving} loading={flowDetailsLoading} />
      </div>
    </div>
  )
}
