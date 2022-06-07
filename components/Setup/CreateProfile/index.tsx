import { User } from '@supabase/supabase-auth-helpers/nextjs'
import IncompleteProfile from 'components/Setup/CreateProfile/IncompleteProfile'
import SetupHeader from 'components/Setup/Header'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import LoadWithText from 'components/spinners/LoadWithText'
import setBasicProfile from 'hooks/setup/setBasicProfile'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  user: User
}
export default function CreateProfile({ user }: Props) {
  const { userDetails, isLoading, isError, mutateUserDetails } = useUserDetails(
    user.id,
  )
  const [tempCreated, setTempCreated] = useState(false)

  if (isError) toast.error('Could not create profile. Refresh and try again.')

  const createProfile = async () => {
    await setBasicProfile(user.id, user.email || user.user_metadata.email)
    mutateUserDetails({
      ...userDetails,
      Email: user.email || user.user_metadata.email,
      profileCreated: true,
    })
    setTempCreated(true)
  }

  if (!isLoading && userDetails && userDetails.profileCreated === false) {
    createProfile()
  }

  if (tempCreated || (userDetails && !userDetails.profileCreated))
    return <IncompleteProfile user={user} />

  return (
    <div className="w-full flex flex-col items-center">
      <SetupHeader step={0} />
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <SetupStepTitle title="Profile" />
        <LoadWithText
          text={
            isLoading
              ? 'Loading your details...'
              : `Welcome, ${
                  user.user_metadata.name || '(Name not set)'
                }! Creating your profile...`
          }
          size={SpinnerSizes.large}
        />
      </div>
    </div>
  )
}
