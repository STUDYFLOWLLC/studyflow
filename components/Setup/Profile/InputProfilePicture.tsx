/* eslint-disable @typescript-eslint/no-explicit-any */

import { useUser } from '@supabase/supabase-auth-helpers/react'
import classnames from 'classnames'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import getFirstAndLastInitialFromName from 'utils/getFirstAndLastIntial'
import { changeUserPFP } from 'utils/user/userHandlers'

export default function InputProfilePicture() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)

  const [mounted, setMounted] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <div className="mt-4 mb-2 w-full text-left">Profile Picture</div>
      <div className="w-full flex justify-around">
        <div className="avatar placeholder online">
          <div
            className={classnames(
              { 'bg-stone-200': theme === 'light' },
              { 'bg-slate-700': theme === 'dark' },
              'w-12 h-12 sm:w-16 sm:h-16 rounded-full',
            )}
          >
            {userDetails?.ProfilePictureLink ? (
              <img
                src={userDetails?.ProfilePictureLink}
                /* eslint-disable */
                alt="the user's avatar"
                /* eslint-enable */
              />
            ) : (
              <span className="text-xl sm:text-2xl">
                {getFirstAndLastInitialFromName(userDetails?.Name)}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center pl-4">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            className={classnames(
              {
                'file:bg-stone-200 hover:file:bg-stone-300 file:text-gray-700':
                  theme === 'light',
              },
              { 'file:bg-slate-700 file:text-primary': theme === 'dark' },
              'hover:cursor-pointer w-full file:border-0  text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full  file:text-sm file:font-semibold',
            )}
            accept="image/*"
            onChange={(e) =>
              changeUserPFP(
                e.target.files?.[0],
                userDetails,
                mutateUserDetails,
                setSaving,
              )
            }
          />
        </div>
      </div>
    </>
  )
}
