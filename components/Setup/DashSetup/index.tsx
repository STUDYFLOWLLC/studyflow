import { useUser } from '@supabase/supabase-auth-helpers/react'
import DashCommunitySetup from 'components/Setup/DashSetup/DashCommunitySetup'
import DashEducationSetup from 'components/Setup/DashSetup/DashEducationSetup'
import DashProfileSetup from 'components/Setup/DashSetup/DashProfileSetup'
import LoadWithText from 'components/spinners/LoadWithText'
import useUserDetails from 'hooks/useUserDetails'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'
import { SetupSteps } from 'types/SetupSteps'
import makeUser from 'utils/setup/setupHandlers'

export default function index() {
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id, false)

  useEffect(() => {
    if (userDetails === null)
      makeUser(
        user?.id,
        user?.email || user?.user_metadata.email,
        userDetails,
        mutateUserDetails,
      )
  }, [userDetails])

  if (!userDetails) {
    return (
      <div className="w-full flex flex-col items-center prose mx-auto">
        <h1 className="font-bold text-center my-8">
          Welcome to the Studyflow open beta
        </h1>
        <LoadWithText
          text="Building a superb setup experience..."
          size={SpinnerSizes.medium}
        />
      </div>
    )
  }

  return (
    <div>
      <Toaster
        containerStyle={{ position: 'relative' }}
        position="top-center"
        reverseOrder={false}
      />
      {userDetails.SetupStep === SetupSteps.PROFILE && <DashProfileSetup />}
      {userDetails.SetupStep === SetupSteps.EDUCATION && <DashEducationSetup />}
      {userDetails.SetupStep === SetupSteps.COMMUNITY && <DashCommunitySetup />}
    </div>
  )
}
