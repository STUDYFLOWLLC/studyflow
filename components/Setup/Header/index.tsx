import {
  AcademicCapIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useUserDetails from 'hooks/useUserDetails'
import { SetupSteps } from 'types/SetupSteps'
import { changeUserSetupStep } from 'utils/user/userHandlers'

export default function SetupHeader() {
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)

  return (
    <div className="w-full flex items-center mb-4 justify-center">
      <div className="mt-4 w-64 flex justify-around">
        <UserIcon
          className={classNames(
            { 'text-primary': userDetails?.SetupStep === SetupSteps.PROFILE },
            {
              'cursor-pointer':
                userDetails?.SetupStep === SetupSteps.COMMUNITY ||
                userDetails?.SetupStep === SetupSteps.EDUCATION,
            },
            'w-6',
          )}
          onClick={async () => {
            if (
              userDetails?.SetupStep === SetupSteps.EDUCATION ||
              userDetails?.SetupStep === SetupSteps.COMMUNITY
            )
              await changeUserSetupStep(
                SetupSteps.PROFILE,
                userDetails,
                mutateUserDetails,
              )
          }}
        />
        <AcademicCapIcon
          className={classNames(
            { 'text-primary': userDetails?.SetupStep === SetupSteps.EDUCATION },
            {
              'cursor-pointer': userDetails?.SetupStep === SetupSteps.COMMUNITY,
            },
            'w-6',
          )}
          onClick={async () => {
            if (userDetails?.SetupStep === SetupSteps.COMMUNITY)
              await changeUserSetupStep(
                SetupSteps.EDUCATION,
                userDetails,
                mutateUserDetails,
              )
          }}
        />
        <UserGroupIcon
          className={classNames(
            { 'text-primary': userDetails?.SetupStep === SetupSteps.COMMUNITY },
            'w-6',
          )}
        />
      </div>
    </div>
  )
}
