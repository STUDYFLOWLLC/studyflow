import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import LoadWithText from 'components/spinners/LoadWithText'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { SpinnerSizes } from 'types/Loading'
import setupRedirectHandler from 'utils/setupRedirectHandler'

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
  useEffect(() => {
    setMounted(true)
    setupRedirectHandler(router, userDetailsLoading, userDetails?.SetupStep)
  }, [userDetailsLoading])

  if (!mounted) return null

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="w-72 sm:w-96 mx-auto mb-24 sm:mb-36">
        <LoadWithText text="Welcome to Studyflow!" size={SpinnerSizes.medium} />
      </div>
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
