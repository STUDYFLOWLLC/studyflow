import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import SetupHeader from 'components/Setup/Header'
import IncompleteProfile from 'components/Setup/Profile/IncompleteProfile'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import LoadWithText from 'components/spinners/LoadWithText'
import setBasicProfile from 'hooks/setup/setBasicProfile'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { NextRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useHotkeys } from 'react-hotkeys-hook'
import { SpinnerSizes } from 'types/Loading'
import setupRedirectHandler from 'utils/setupRedirectHandler'

interface Props {
  user: User
}

export default function profile({ user }: Props) {
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const {
    userDetails,
    userDetailsLoading,
    userDetailsError,
    mutateUserDetails,
  } = useUserDetails(user.id)

  const [mounted, setMounted] = useState(false)

  const createBasicProfile = async () => {
    mutateUserDetails({
      ...userDetails,
      Email: user.email || user.user_metadata.email,
    })
    await setBasicProfile(user.id, user.email || user.user_metadata.email)
  }

  const redirectHandler = (
    router: NextRouter,
    email: string | undefined,
    username: string | undefined,
  ) => {
    if (email && username)
      setupRedirectHandler(router, userDetailsLoading, userDetails?.SetupStep)
  }

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

  useEffect(() => {
    setMounted(true)
    redirectHandler(router, userDetails?.Email, userDetails?.Username)
  }, [userDetails, userDetailsLoading])

  if (!mounted) return null

  if (userDetailsError)
    toast.error('Could not create profile. Please refresh and try again.')

  if (!userDetailsLoading && !userDetails?.Email) {
    createBasicProfile()
  }

  if (!userDetailsLoading && !userDetails?.Username)
    return <IncompleteProfile />

  return (
    <div className="w-full flex flex-col items-center">
      <SetupHeader step={0} />
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <SetupStepTitle title="Profile" />
        <LoadWithText
          text={
            userDetailsLoading
              ? 'Loading your details...'
              : `Welcome, ${
                  user.user_metadata.name || '(Name not set)'
                }! Creating your profile...`
          }
          size={SpinnerSizes.large}
        />
      </div>
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
