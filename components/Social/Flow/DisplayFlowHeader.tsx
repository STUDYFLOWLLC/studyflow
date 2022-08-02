import { useUser } from '@supabase/supabase-auth-helpers/react'
import Tippy from '@tippyjs/react'
import MainSpinner from 'components/spinners/MainSpinner'
import viewFlow from 'hooks/flows/flowViewHandlers'
import { PublicFlowDetail } from 'hooks/flows/getFlowDetails'
import useFlowViews from 'hooks/flows/useFlowViews'
import useUserDetails from 'hooks/useUserDetails'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { SpinnerSizes } from 'types/Loading'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'
import BasicStudentDisplay from '../Displays/BasicStudentDisplay'
import FlowLink from './FlowLink'

interface Props {
  flow: PublicFlowDetail
}

export default function DisplayFlowHeader({ flow }: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { flowViews, flowViewsLoading, mutateFlowViews } = useFlowViews(
    flow.FlowID,
  )

  const [hasViewed, setHasViewed] = useState(false)

  useEffect(() => {
    if (!userDetailsLoading && !hasViewed) {
      viewFlow(flow.FlowID, flowViews, mutateFlowViews, userDetails?.UserID)
      setHasViewed(true)
    }
  }, [userDetailsLoading])

  return (
    <div>
      <div className="p-2 flex justify-between">
        <div className="flex justify-center">
          <div className="flex">
            <FlowLink name="Home" route="/" />
            <FlowLink name="Social" route="/social" />
            {user ? (
              <FlowLink name="Dash" route="/dash" />
            ) : (
              <FlowLink name="Login" route="/login" />
            )}
          </div>
        </div>
        <Tippy
          content="Total views"
          offset={TOOLTIP_OFFSET}
          delay={TOOLTIP_DELAY}
        >
          <span className="font-medium">
            {flowViewsLoading ? (
              <MainSpinner size={SpinnerSizes.small} />
            ) : (
              <CountUp end={flowViews} duration={1} />
            )}
          </span>
        </Tippy>
      </div>
      <div className="max-w-3xl mx-auto overflow-none prose mt-4 flex items-center justify-between flex-wrap border-b pb-4 mb-4">
        <div className="flex items-baseline truncate max-w-2xl">
          <h1 className="m-0 p-0 mr-4">{flow.Title}</h1>
          <h3 className="m-0 p-0 mr-1.5 uppercase">{flow.Type}</h3>
          <h3 className="flex items-center m-0 p-0">
            in{' '}
            {flow.FK_CourseOnTerm.Nickname ||
              flow.FK_CourseOnTerm.FK_Course.Code}
          </h3>
        </div>
        <BasicStudentDisplay
          publicUser={flow.FK_CourseOnTerm.FK_Term.FK_User}
        />
      </div>
    </div>
  )
}
