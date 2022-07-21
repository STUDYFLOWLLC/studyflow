import { BeakerIcon } from '@heroicons/react/outline'
import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import SetupAutomation from 'components/Automation/SetupAutomation'
import MainSpinner from 'components/spinners/MainSpinner'
import useAutomationDetails from 'hooks/automation/useAutomationDetails'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const { userDetails } = useUserDetails(user.id)
  const { automationDetails, automationDetailsLoading } = useAutomationDetails(
    userDetails?.UserID,
  )

  if (automationDetailsLoading) {
    return (
      <div className="h-screen w-full prose flex flex-col items-center justify-center">
        <BeakerIcon className="w-24 h-24" />
        <MainSpinner size={SpinnerSizes.medium} />
      </div>
    )
  }

  if (!automationDetails?.AutomationID && !automationDetailsLoading)
    return <SetupAutomation />

  return (
    <div className="prose">
      <h2>Welcome to Automation</h2>
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
