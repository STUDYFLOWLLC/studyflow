import { useUser } from '@supabase/supabase-auth-helpers/react'
import LoadWithText from 'components/spinners/LoadWithText'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'
import { SetupSteps } from 'types/SetupSteps'
import DashEducationSetup from './DashEducationSetup'
import DashProfileSetup from './DashProfileSetup'

export default function index() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (!userDetails) {
    return (
      <div className="w-full flex flex-col items-center prose mx-auto">
        <h1 className="font-bold text-center my-8">
          Welcome to the Studyflow open beta
        </h1>
        <LoadWithText
          text="Building a superb setup experience..."
          size={SpinnerSizes.medium}
        />
      </div>
    )
  }

  return (
    <div>
      <Toaster
        containerStyle={{ position: 'relative' }}
        position="top-center"
        reverseOrder={false}
      />
      {userDetails.SetupStep === SetupSteps.PROFILE && <DashProfileSetup />}
      {userDetails.SetupStep === SetupSteps.EDUCATION && <DashEducationSetup />}
    </div>
  )
}
