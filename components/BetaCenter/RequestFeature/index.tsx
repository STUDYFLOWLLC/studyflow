import { useUser } from '@supabase/supabase-auth-helpers/react'
import LoadWithText from 'components/spinners/LoadWithText'
import BugPlate from 'dinnerplate/BugPlate'
import { MyValue } from 'dinnerplate/types/plateTypes'
import useFeatureRequests, {
  FeatureRequest,
} from 'hooks/beta/useFeatureRequests'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import FeatureButtons from './FeatureButtons'
import FeatureRequestLine from './FeatureRequestLine'
import FeatureRequestModal from './FeatureRequestModal'

export default function RequestFeature() {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { featureRequests, featureRequestsLoading, mutateFeatureRequests } =
    useFeatureRequests()

  const [showRequest, setShowRequest] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentRequest, setCurrentRequest] = useState<FeatureRequest | null>(
    null,
  )

  const [value, setValue] = useState<MyValue>([
    {
      type: 'h1',
      children: [
        {
          text: 'Request title',
        },
      ],
    },
    {
      type: 'p',
      children: [
        {
          text: "Thanks for a requesting a feature! Please enter as many details as you can below and we'll try to implement it soon!",
        },
      ],
    },
  ])

  return (
    <div className="flex flex-col items-center">
      <FeatureRequestModal
        featureRequest={currentRequest}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      {!showRequest ? (
        <div className="prose max-w-3xl mx-auto w-full py-2">
          {featureRequestsLoading ? (
            <LoadWithText
              size={SpinnerSizes.medium}
              text="Loading feature requests..."
            />
          ) : (
            <div>
              <h1 className="mb-0 pb-0">Feature Requests</h1>
              <p className="my-1 p-0">
                Please check to see if your feature has already been requested!
              </p>
              <button
                type="button"
                className="alex-button my-2 mx-auto"
                onClick={() => setShowRequest(true)}
              >
                Request Feature
              </button>
              {featureRequests.map((fr) => (
                <FeatureRequestLine
                  key={fr.FeatureRequestID}
                  featureRequest={fr}
                  setModalOpen={setModalOpen}
                  setCurrentRequest={setCurrentRequest}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <FeatureButtons value={value} setShowRequest={setShowRequest} />
          <BugPlate value={value} setValue={setValue} />
        </div>
      )}
    </div>
  )
}
