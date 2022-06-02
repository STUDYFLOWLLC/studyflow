import { User } from '@supabase/supabase-js'
import InputName from 'components/Setup/CreateProfile/InputName'
import InputUsername from 'components/Setup/CreateProfile/InputUsername'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import {
  mutateName,
  mutateProfilePictureLink,
  mutateUsername,
} from 'hooks/setup/mutateUser'
import { Dispatch, SetStateAction, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import InputProfilePicture from './InputProfilePicture'

interface Props {
  user: User
  setStep: Dispatch<SetStateAction<number>>
}

export default function IncompleteProfile({ user, setStep }: Props) {
  const [name, setName] = useState(user.user_metadata.name)
  const [username, setUsername] = useState('')
  const [tempPFPLink, setTempPFPLink] = useState('')

  const submitProfile = () => {
    if (
      !/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,13}[a-zA-Z0-9]$/.test(
        username,
      )
    )
      return toast.error('Invalid Username')

    mutateName(user.user_metadata.email, name)
    mutateUsername(user.user_metadata.email, username)
    mutateProfilePictureLink(
      user.user_metadata.email,
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${tempPFPLink}`,
    )
    setStep(1)
  }

  return (
    <div className="flex flex-col items-center justify-center mt-4 p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <SetupStepTitle title="Me" />
      <InputName user={user} name={name} setName={setName} />
      <InputUsername username={username} setUsername={setUsername} />
      <InputProfilePicture
        user={user}
        tempPFPLink={tempPFPLink}
        setTempPFPLink={setTempPFPLink}
      />
      <button
        type="button"
        className="btn btn-primary mt-10"
        onClick={() => submitProfile()}
      >
        continue
      </button>
    </div>
  )
}
