import { useUser } from '@supabase/supabase-auth-helpers/react'
import InputName from 'components/Setup/Profile/InputName'
import InputUsername from 'components/Setup/Profile/InputUsername'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import {
  mutateName,
  mutateProfilePictureLink,
  mutateSetupStep,
  mutateUsername,
} from 'hooks/setup/mutateUser'
import useUserDetails from 'hooks/useUserDetails'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { SetupSteps } from 'types/SetupSteps'
import InputProfilePicture from './InputProfilePicture'

export default function IncompleteProfile() {
  const router = useRouter()
  const { user } = useUser()

  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)
  const [submitting, setSubmitting] = useState(false)
  const [name, setName] = useState(user?.user_metadata?.name || '')
  const [username, setUsername] = useState('')
  const [tempPFPLink, setTempPFPLink] = useState('')

  const submitProfile = async () => {
    if (submitting) return
    setSubmitting(true)
    if (name.length < 3) {
      setSubmitting(false)
      return toast.error('Name must be at least 3 characters.')
    }
    if (
      !/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,13}[a-zA-Z0-9]$/.test(
        username,
      )
    ) {
      setSubmitting(false)
      return toast.error('Invalid Username')
    }
    const nameData = await mutateName(
      user?.email || user?.user_metadata.email,
      name.trim(),
    )
    const usernameData = await mutateUsername(
      user?.email || user?.user_metadata.email,
      username,
    )
    const setupStepData = await mutateSetupStep(
      user?.email || user?.user_metadata.email,
      SetupSteps.EDUCATION,
    )
    await mutateProfilePictureLink(
      user?.email || user?.user_metadata.email,
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${tempPFPLink}`,
    )

    if (
      nameData?.updateUser?.UserID &&
      usernameData.updateUser?.UserID &&
      setupStepData?.updateUser?.UserID
    ) {
      toast.success('Well done! Profile created.')
      mutateUserDetails(
        {
          ...userDetails,
          Username: username,
          Name: name.trim(),
          SetupStep: SetupSteps.EDUCATION,
          mutate: true,
        },
        { revalidate: false },
      )
    } else {
      toast.error('Could not update profile. Please refresh and try again.')
    }

    setSubmitting(false)
  }

  return (
    <div className="mx-auto w-5/6 sm:w-full flex flex-col items-center sm:p-4">
      <SetupStepTitle title="Profile" />
      <div className="mx-auto flex flex-col items-center">
        <InputName name={name} setName={setName} />
        <InputUsername username={username} setUsername={setUsername} />
        <InputProfilePicture
          tempPFPLink={tempPFPLink}
          setTempPFPLink={setTempPFPLink}
          name={name}
        />
        <button
          type="button"
          className="bg-primary mt-4 text-lg text-gray-700 mx-4 inline-flex justify-center rounded-md border border-transparent px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          onClick={() => submitProfile()}
        >
          continue
          <ButtonSpinner show={submitting} />
        </button>
      </div>
    </div>
  )
}
