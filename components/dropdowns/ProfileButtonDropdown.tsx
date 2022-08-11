import { useUser } from '@supabase/supabase-auth-helpers/react'
import ProfileButtonMenuItem from 'components/buttons/ProfileButtonMenuItem'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ProfileButtonDropdown() {
  const { theme, setTheme } = useTheme()
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)
  const router = useRouter()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const dropdownItems = [
    {
      name: 'View Profile',
      handler: () => router.push(`/student/${userDetails?.Username}`),
    },
    {
      name: 'Settings',
      handler: () => router.push('/settings'),
    },
    {
      name: theme === 'light' ? 'Dark' : 'Light',
      handler: () => setTheme(theme === 'light' ? 'dark' : 'light'),
    },
    {
      name: 'Support',
      hasDivider: true,
      handler: () => router.push('/beta#contact'),
    },
    {
      name: 'Logout',
      handler: () => router.push('/api/auth/logout'),
    },
  ]

  return (
    <>
      {dropdownItems.map((item, index) => (
        <ProfileButtonMenuItem
          key={item.name}
          name={item.name}
          handler={item.handler}
          hasDivider={item.hasDivider}
          roundedT={index === 0}
          roundedB={index === dropdownItems.length - 1}
        />
      ))}
    </>
  )
}
