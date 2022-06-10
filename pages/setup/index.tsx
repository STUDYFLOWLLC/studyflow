import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import LoadWithText from 'components/spinners/LoadWithText'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { SpinnerSizes } from 'types/Loading'
import { SetupSteps } from 'types/SetupSteps'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const [mounted, setMounted] = useState(false)

  useHotkeys(
    'cmd+l, ctrl+l',
    (e) => {
      e.preventDefault()
      setTheme(theme === 'light' ? 'dark' : 'light')
    },
    {
      enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
    },
    [theme],
  )
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (!userDetailsLoading && userDetails.SetupStep === SetupSteps.PROFILE)
    router.push('/setup/profile')

  if (!userDetailsLoading && userDetails.SetupStep === SetupSteps.EDUCATION)
    router.push('/setup/education')

  if (!userDetailsLoading && userDetails.SetupStep === SetupSteps.COMMUNITY)
    router.push('/setup/community')

  if (!userDetailsLoading && userDetails.SetupStep === SetupSteps.COMPLETE)
    router.push('/dash')

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-72 sm:w-96 mx-auto">
        <LoadWithText text="Welcome to Studyflow!" size={SpinnerSizes.medium} />
      </div>
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
