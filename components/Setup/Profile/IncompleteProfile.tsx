import { User } from '@supabase/supabase-js'
import InputName from 'components/Setup/Profile/InputName'
import InputUsername from 'components/Setup/Profile/InputUsername'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import MainSpinner from 'components/spinners/MainSpinner'
import {
  mutateName,
  mutateProfilePictureLink,
  mutateSetupStep,
  mutateUsername,
} from 'hooks/setup/mutateUser'
import useUserDetails from 'hooks/useUserDetails'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'
import { SetupSteps } from 'types/SetupSteps'
import InputProfilePicture from './InputProfilePicture'

interface Props {
  user: User
}

export default function IncompleteProfile({ user }: Props) {
  const router = useRouter()

  const { userDetails, mutateUserDetails } = useUserDetails(user.id)
  const [submitting, setSubmitting] = useState(false)
  const [name, setName] = useState(user.user_metadata.name || '')
  const [username, setUsername] = useState('')
  const [tempPFPLink, setTempPFPLink] = useState('')

  const submitProfile = async () => {
    setSubmitting(true)
    if (name.length < 3)
      return toast.error('Name must be at least 3 characters.')
    if (
      !/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,13}[a-zA-Z0-9]$/.test(
        username,
      )
    )
      return toast.error('Invalid Username')

    const nameData = await mutateName(
      user.email || user.user_metadata.email,
      name.trim(),
    )
    const usernameData = await mutateUsername(
      user.email || user.user_metadata.email,
      username,
    )
    const setupStepData = await mutateSetupStep(
      user.email || user.user_metadata.email,
      SetupSteps.EDUCATION,
    )
    await mutateProfilePictureLink(
      user.email || user.user_metadata.email,
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${tempPFPLink}`,
    )

    if (
      nameData?.updateUser?.UserID &&
      usernameData.updateUser?.UserID &&
      setupStepData?.updateUser?.UserID
    ) {
      toast.success('Profile updated!')
      mutateUserDetails({
        ...userDetails,
        Username: username,
        Name: name.trim(),
        SetupStep: SetupSteps.EDUCATION,
      })
      router.push('/setup/education')
    }

    setSubmitting(false)
  }

  return (
    <div className="mx-auto w-5/6 sm:w-full flex flex-col items-center mt-4 sm:p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <SetupStepTitle title="Me" />
      {submitting ? (
        <MainSpinner size={SpinnerSizes.medium} />
      ) : (
        <div className="mx-auto flex flex-col items-center">
          <InputName user={user} name={name} setName={setName} />
          <InputUsername username={username} setUsername={setUsername} />
          <InputProfilePicture
            user={user}
            tempPFPLink={tempPFPLink}
            setTempPFPLink={setTempPFPLink}
          />
          <button
            type="button"
            className="btn btn-primary mt-6"
            onClick={() => submitProfile()}
          >
            continue
          </button>
        </div>
      )}
    </div>
  )
}
