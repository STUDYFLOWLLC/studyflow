import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import CreateProfile from 'components/Setup/CreateProfile'
import EnterEducation from 'components/Setup/EnterEducation'
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

  console.log(userDetails)

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

  if (!userDetails || !userDetails.Username)
    return <CreateProfile user={user} />

  if (userDetails.profileCreated !== false && userDetails.Username !== null)
    return <EnterEducation user={user} />

  return <p>Profile setup complete</p>
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
