import { useUser } from '@supabase/supabase-auth-helpers/react'
import InputName from 'components/Settings/Profile/InputName'
import InputPFP from 'components/Settings/Profile/InputPFP'
import InputUsername from 'components/Settings/Profile/InputUsername'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import { mutateSetupStep } from 'hooks/setup/mutateUser'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { SetupSteps } from 'types/SetupSteps'
import isValidUsername from 'utils/setup/isValidUsername'

export default function IncompleteProfile() {
  const { user } = useUser()

  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)
  const [submitting, setSubmitting] = useState(false)
  const [name, setName] = useState(user?.user_metadata?.name || '')
  const [username, setUsername] = useState('')
  const [tempPFPLink, setTempPFPLink] = useState('')

  const submitProfile = async () => {
    if (submitting) return
    setSubmitting(true)
    if ((userDetails?.Name || '').length < 3) {
      setSubmitting(false)
      return toast.error('Name must be at least 3 characters.')
    }
    if (!isValidUsername(userDetails?.Username)) {
      setSubmitting(false)
      return toast.error('Invalid Username')
    }
    await mutateSetupStep(
      user?.email || user?.user_metadata.email,
      SetupSteps.EDUCATION,
    )

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

    setSubmitting(false)
  }

  return (
    <div className="mx-auto w-5/6 sm:w-full flex flex-col items-center sm:p-4">
      <SetupStepTitle title="Profile" />
      <div className="mx-auto flex flex-col items-center">
        <InputName flex />
        <InputUsername flex />
        {/* <InputUsername username={username} setUsername={setUsername} /> */}
        <InputPFP flex />
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
