import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import DashSearchSmall from 'components/DashbarSmall/DashSearchSmall'
import OpenButton from 'components/DashbarSmall/OpenButton'
import SmallProfileButton from 'components/DashbarSmall/SmallProfileButton'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  searchValue: string
  setSearchValue: (value: string) => void
  setSidebarOpen: (value: boolean) => void
}

export default function DashHeadSmall({
  searchValue,
  setSearchValue,
  setSidebarOpen,
}: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className={classNames(
        { 'bg-white': theme === 'light' },
        { 'bg-base-200': theme === 'dark' },
        'sticky top-0 z-10 flex-shrink-0 flex h-16 border-b border-gray-200 lg:hidden',
      )}
    >
      <OpenButton setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <DashSearchSmall
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="flex items-center">
          <SmallProfileButton
            name={userDetails?.Name}
            pfpLink={userDetails?.ProfilePictureLink}
          />
        </div>
      </div>
    </div>
  )
}
