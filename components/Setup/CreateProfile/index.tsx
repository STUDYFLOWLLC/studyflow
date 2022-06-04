import { User } from '@supabase/supabase-auth-helpers/nextjs'
import IncompleteProfile from 'components/Setup/CreateProfile/IncompleteProfile'
import SetupHeader from 'components/Setup/Header'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import LoadWithText from 'components/spinners/LoadWithText'
import setBasicProfile from 'hooks/setup/setBasicProfile'
import useUserDetails from 'hooks/useUserDetails'
import { Dispatch, SetStateAction } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  user: User
  setStep: Dispatch<SetStateAction<number>>
}
export default function CreateProfile({ user, setStep }: Props) {
  const { userDetails, isLoading, isError, mutateUserDetails } = useUserDetails(
    user.id,
  )

  if (isError) toast.error('Could not create profile. Refresh and try again.')

  if (!isLoading && userDetails && userDetails.profileCreated === false) {
    setBasicProfile(user.id, user.user_metadata.email)
    mutateUserDetails(user.id)
  }

  if (!isLoading && userDetails && userDetails.profileCreated === undefined)
    return <IncompleteProfile user={user} setStep={setStep} />

  return (
    <div className="w-full flex flex-col items-center">
      <SetupHeader />
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <SetupStepTitle title="Profile" />
        <LoadWithText
          text={
            isLoading
              ? 'Loading your details...'
              : `Welcome, ${user.user_metadata.name}! Creating your profile...`
          }
          size={SpinnerSizes.large}
        />
      </div>
    </div>
  )
}
