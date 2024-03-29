import { Switch } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import { MyValue } from 'dinnerplate/types/plateTypes'
import { createFeatureRequest } from 'hooks/beta/betaHandlers'
import useFeatureRequests from 'hooks/beta/useFeatureRequests'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'

interface Props {
  value: MyValue
  setShowRequest: (showReport: boolean) => void
}
export default function FeatureButtons({ value, setShowRequest }: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { featureRequests, featureRequestsLoading, mutateFeatureRequests } =
    useFeatureRequests()

  const [enabled, setEnabled] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  return (
    <div className="mb-6 flex flex-col items-center relative">
      <div className="flex items-center prose my-3">
        <p className="m-0 p-0 mr-4">Submit anonymously</p>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-primary' : 'bg-info/70'}
          relative inline-flex  w-12 h-6 mt-1 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-base-100 focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Submit Anonymously</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-base-100 shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
      <button
        type="button"
        className="alex-button"
        disabled={submitting}
        onClick={() =>
          createFeatureRequest(
            value,
            featureRequests,
            mutateFeatureRequests,
            setSubmitting,
            setShowRequest,
            !enabled ? userDetails?.Username || undefined : undefined,
          )
        }
      >
        Submit feature request
        <ButtonSpinner show={submitting} />
      </button>
      <button
        type="button"
        className="alex-button bg-red-300 my-2 mx-auto absolute top-0 right-0"
        onClick={() => setShowRequest(false)}
      >
        Cancel Request
      </button>
    </div>
  )
}
