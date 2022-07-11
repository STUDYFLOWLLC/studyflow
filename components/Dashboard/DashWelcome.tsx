import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import createSetting from 'hooks/settings/createSetting'
import mutateSetting from 'hooks/settings/mutateSetting'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DashWelcome() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleHide = () => {
    if (!userDetails.FK_Settings) {
      // mutate in backend
      createSetting(userDetails?.UserID, true)

      // mutate locally
      mutateUserDetails(
        {
          ...userDetails,
          FK_Settings: {
            HasSeenWelcomeMessage: true,
            LastSeenWelcomeMessageAt: new Date().toISOString(),
          },
          mutate: true,
        },
        {
          revalidate: false,
        },
      )
    } else if (userDetails.FK_Settings.HasSeenWelcomeMessage) {
      // mutate in backend
      mutateSetting(userDetails?.FK_Settings?.SettingID || 0)

      // mutate locally
      mutateUserDetails(
        {
          ...userDetails,
          FK_Settings: {
            ...userDetails.FK_Settings,
            LastSeenWelcomeMessageAt: new Date().toISOString(),
          },
          mutate: true,
        },
        {
          revalidate: false,
        },
      )
    }
  }

  if (!mounted) return null

  return (
    <div className="relative mt-4">
      <span
        className={classNames(
          { 'hover:bg-gray-200': theme === 'light' },
          { 'hover:bg-slate-600': theme === 'dark' },
          'cursor-pointer rounded-md px-1.5 py-0.5 absolute right-5 top-0.5 uppercase text-sm text-info',
        )}
        onClick={() => handleHide()}
        onKeyDown={() => handleHide()}
      >
        Hide
      </span>
      <div className="prose mx-auto">
        <h3 className="text-center mb-1">Welcome to the Studyflow Open Beta</h3>
        <p className="leading-tight mb-2 text-center">
          Finally. A note-taking, task managing, and social learning platform
          designed specifically for students. All in one place.
        </p>
        <div className="flex flex-wrap justify-center">
          <button
            type="button"
            className="bg-primary text-gray-700 mx-4 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Report a Bug
          </button>
          <button
            type="button"
            className="bg-primary text-gray-700 mx-4 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Tutorial
          </button>
          <button
            type="button"
            className="bg-primary text-gray-700 mx-4 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Why Studyflow
          </button>
        </div>
      </div>
    </div>
  )
}
