import { User } from '@supabase/supabase-js'
import InputName from 'components/Setup/CreateProfile/InputName'
import InputUsername from 'components/Setup/CreateProfile/InputUsername'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import MainSpinner from 'components/spinners/MainSpinner'
import {
  mutateName,
  mutateProfilePictureLink,
  mutateUsername,
} from 'hooks/setup/mutateUser'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'
import InputProfilePicture from './InputProfilePicture'

interface Props {
  user: User
}

export default function IncompleteProfile({ user }: Props) {
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
    await mutateProfilePictureLink(
      user.email || user.user_metadata.email,
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${tempPFPLink}`,
    )

    if (nameData?.updateUser?.UserID && usernameData.updateUser?.UserID) {
      toast.success('Profile updated!')
      mutateUserDetails({ ...userDetails, Username: username })
    }

    setSubmitting(false)
  }

  return (
    <div className="w-full flex flex-col items-center mt-4 p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <SetupStepTitle title="Me" />
      {submitting ? (
        <MainSpinner size={SpinnerSizes.medium} />
      ) : (
        <div className="w-96 flex flex-col items-center">
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
