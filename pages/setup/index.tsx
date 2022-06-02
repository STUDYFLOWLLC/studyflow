import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import CreateProfile from 'components/Setup/CreateProfile'
import EnterEducation from 'components/setup/EnterEducation'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const { theme, setTheme } = useTheme()

  const { userDetails } = useUserDetails(user.id)
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState(0)

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

  if (!userDetails) return <CreateProfile user={user} setStep={setStep} />

  if (userDetails.username !== null) return <EnterEducation />
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
