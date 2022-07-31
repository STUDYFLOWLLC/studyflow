import { useUser } from '@supabase/supabase-auth-helpers/react'
import InputName from 'components/Settings/Profile/InputName'
import InputPFP from 'components/Settings/Profile/InputPFP'
import InputUsername from 'components/Settings/Profile/InputUsername'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { SetupSteps } from 'types/SetupSteps'
import isValidUsername from 'utils/setup/isValidUsername'
import { changeUserSetupStep } from 'utils/user/userHandlers'

export default function IncompleteProfile() {
  const { user } = useUser()

  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)
  const [submitting, setSubmitting] = useState(false)
  const [checkingUnique, setCheckingUnique] = useState(false)
  const [uniqueCheck, setUniqueCheck] = useState(false)

  const submitProfile = async () => {
    if (submitting) return
    setSubmitting(true)

    if ((userDetails?.Name || '').length < 3) {
      setSubmitting(false)
      return toast.error('Name must be at least 3 characters.')
    }
    if (
      !isValidUsername(userDetails?.Username) ||
      checkingUnique ||
      !uniqueCheck
    ) {
      setSubmitting(false)
      return toast.error('Invalid Username')
    }

    await changeUserSetupStep(
      SetupSteps.EDUCATION,
      userDetails,
      mutateUserDetails,
    )

    setSubmitting(false)
  }

  return (
    <div className="mx-auto w-5/6 sm:w-full flex flex-col items-center sm:p-4">
      <SetupStepTitle title="Profile" />
      <div className="mx-auto flex flex-col items-center">
        <InputName flex />
        <InputUsername
          checkingUnique={checkingUnique}
          setCheckingUnique={setCheckingUnique}
          uniqueCheck={uniqueCheck}
          setUniqueCheck={setUniqueCheck}
          flex
        />
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
