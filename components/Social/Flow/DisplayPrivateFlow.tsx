import { LockClosedIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Tippy from '@tippyjs/react'
import MainSpinner from 'components/spinners/MainSpinner'
import { MyValue } from 'dinnerplate/types/plateTypes'
import { PublicFlowDetail } from 'hooks/flows/getFlowDetails'
import usePrivateAccess from 'hooks/flows/usePrivateAccess'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'
import BasicStudentDisplay from '../Displays/BasicStudentDisplay'
import DisplayFlowBody from './DisplayFlowBody'
import DisplayFlowHeader from './DisplayFlowHeader'

interface Props {
  flow: PublicFlowDetail
  value: MyValue
}

export default function DisplayPrivateFlow({ flow, value }: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { privateAccess, privateAccessLoading } = usePrivateAccess(
    userDetails?.UserID,
  )

  if (privateAccessLoading) {
    return (
      <div className="max-w-3xl mx-auto overflow-x-none overflow-y-auto prose">
        <DisplayFlowHeader flow={flow} />
        <div className="w-72 mx-auto flex flex-col items-center">
          <LockClosedIcon className="w-12 h-12 mb-4" />
          <BasicStudentDisplay
            publicUser={flow.FK_CourseOnTerm.FK_Term.FK_User}
          />
          <p className="text-center">
            This flow is private. Checking to see if you have access.
          </p>
          <MainSpinner size={SpinnerSizes.medium} />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {privateAccess.indexOf(userDetails?.UserID || 0) !== -1 ? (
        <>
          <DisplayFlowHeader flow={flow} />
          <DisplayFlowBody value={value} />
        </>
      ) : (
        <div className="max-w-3xl mx-auto overflow-x-none overflow-y-auto prose">
          <DisplayFlowHeader flow={flow} />
          <div className="w-72 mx-auto flex flex-col items-center">
            <LockClosedIcon className="w-12 h-12 mb-4" />
            <BasicStudentDisplay
              publicUser={flow.FK_CourseOnTerm.FK_Term.FK_User}
            />
            <p className="text-center">
              This flow is private.{' '}
              <Tippy
                content={`Coming soon. For now, get ${flow.FK_CourseOnTerm.FK_Term.FK_User.Username} to send you an invite to their private group.`}
                offset={TOOLTIP_OFFSET}
                delay={TOOLTIP_DELAY}
              >
                <span className="cursor-pointer font-medium underline decoration-primary">
                  Request access.
                </span>
              </Tippy>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
