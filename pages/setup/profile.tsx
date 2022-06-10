import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import SetupHeader from 'components/Setup/Header'
import IncompleteProfile from 'components/Setup/Profile/IncompleteProfile'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import LoadWithText from 'components/spinners/LoadWithText'
import setBasicProfile from 'hooks/setup/setBasicProfile'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useHotkeys } from 'react-hotkeys-hook'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  user: User
}

export default function profile({ user }: Props) {
  const { theme, setTheme } = useTheme()

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

  if (userDetailsError)
    toast.error('Could not create profile. Please refresh and try again.')

  if (!userDetailsLoading && !userDetails.Email) {
    createBasicProfile()
  }

  if (userDetails && !userDetails.profileCreated)
    return <IncompleteProfile user={user} />

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
