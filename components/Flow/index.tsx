import { useUser } from '@supabase/supabase-auth-helpers/react'
import FlowTop from 'components/Flow/FlowTop'
import TrashedFlow from 'components/Flow/TrashedFlow'
import MainSpinner from 'components/spinners/MainSpinner'
import { defaultBody } from 'hooks/flows/makeFlow'
import { mutateFlowBody, mutateLastOpened } from 'hooks/flows/mutateFlow'
import useDashFlows from 'hooks/flows/useDashFlows'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useEffect, useState } from 'react'
import { Block } from 'types/Flow'
import { SpinnerSizes } from 'types/Loading'
import FlowBody from './FlowBody'

interface Props {
  flowId: string
  closeModal: () => void
}

export default function Flow({ flowId, closeModal }: Props) {
  const { flowDetails, flowDetailsLoading, mutateFlowDetails } =
    useFlowDetails(flowId)
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )
  const { dashFlows, dashFlowsLoading, mutateDashFlows } = useDashFlows(
    userDetails?.UserID,
  )

  const updateLastOpened = () => {
    // mutate in backend
    mutateLastOpened(flowId)

    // mutate locally
    mutateDashFlows(
      {
        mutatedFlows: dashFlows.map((flow) => {
          if (flow.FlowID === flowId) {
            return {
              ...flow,
              LastOpened: new Date().toISOString(),
            }
          }
          return flow
        }),
        mutate: true,
      },
      {
        revalidate: false,
      },
    )
  }

  const [fauxSaving, setFauxSaving] = useState(false)
  const [saving, setSaving] = useState(false)

  const saveFlow = async (blocks: Block[]) => {
    setSaving(true)

    // mutate locally
    mutateFlowDetails(
      {
        mutatedFlow: { ...flowDetails, Body: JSON.stringify(blocks) },
        mutate: true,
      },
      { revalidate: false },
    )
    mutateDashFlows(
      {
        mutatedFlows: dashFlows.map((flow) =>
          flow.FlowID === flowId
            ? { ...flow, Body: JSON.stringify(blocks) }
            : flow,
        ),
        mutate: true,
      },
      { revalidate: false },
    )

    // change in backend
    const data = await mutateFlowBody(
      flowDetails.FlowID,
      JSON.stringify(blocks),
    )
    if (data) {
      setSaving(false)
    }
  }

  useEffect(() => {
    updateLastOpened()
  }, [])

  if (flowDetails?.Trashed) {
    return <TrashedFlow flowId={flowId} closeModal={closeModal} />
  }

  return (
    <div className="relative h-full w-full min-h-full max-h-full">
      <FlowTop
        flowId={flowId}
        closeModal={closeModal}
        flowTitle={flowDetails?.Title}
        saving={saving}
      />
      {!flowDetailsLoading ? (
        <FlowBody
          initialBlocks={JSON.parse(flowDetails?.Body) || defaultBody}
          saveFlow={saveFlow}
          setFauxSaving={setFauxSaving}
        />
      ) : (
        <div className="flex flex-col justify-center w-full h-80 max-h-full">
          <div className="flex justify-center">
            <MainSpinner size={SpinnerSizes.medium} />
          </div>
        </div>
      )}
    </div>
  )
}
