import { useUser } from '@supabase/supabase-auth-helpers/react'
import useDashFlows from 'hooks/flows/useDashFlows'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useUserDetails from 'hooks/useUserDetails'
import { FlowVisibility } from 'types/Flow'
import { changeVisibility } from 'utils/flows/propertyHandlers'
import FlowSaving from './FlowProperties/FlowSaving'
import FlowVisibilityChooser from './FlowProperties/FlowVisibilityChooser'
import NextReview from './FlowProperties/NextReview'
import OpenAsPage from './FlowProperties/OpenAsPage'

interface Props {
  flowId: string
  saving: boolean
}

export default function FlowHeader({ flowId, saving }: Props) {
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
