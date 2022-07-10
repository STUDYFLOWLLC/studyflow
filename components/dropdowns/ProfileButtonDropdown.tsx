import ProfileButtonMenuItem from 'components/buttons/ProfileButtonMenuItem'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ProfileButtonDropdown() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const dropdownItems = [
    {
      name: 'View Profile',
      handler: () => console.log('view profile'),
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
      name: 'Get Desktop App',
      hasDivider: true,
      handler: () => console.log('desktop app'),
    },
    {
      name: 'Support',
      handler: () => console.log('support'),
    },
    {
      name: 'Logout',
      hasDivider: true,
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
