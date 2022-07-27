import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import getFirstAndLastInitialFromName from 'utils/getFirstAndLastIntial'
import { changeUserPFP } from 'utils/user/userHandlers'

export default function InputPFP() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)

  const [saving, setSaving] = useState(false)

  console.log(userDetails)

  return (
    <div className="sm:py-3 relative w-full">
      <dt className="mt-3 text-sm font-medium text-info absolute left-0">
        Profile Picture
      </dt>
      <dd className="w-full flex justify-center mt-1 text-sm">
        <div className="avatar placeholder online cursor-pointer">
          <div
            className={classNames(
              { 'bg-stone-200': theme === 'light' },
              { 'bg-slate-700': theme === 'dark' },
              'w-11 h-11 rounded-full',
            )}
          >
            {userDetails?.ProfilePictureLink ? (
              <img
                className="rounded-full flex-shrink-0"
                src={userDetails.ProfilePictureLink}
                alt="the user's avatar"
              />
            ) : (
              <span className="text-lg sm:text-xl rounded-full">
                {getFirstAndLastInitialFromName(userDetails?.Name)}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center pl-4">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            disabled={saving}
            className={classNames(
              {
                'file:bg-stone-200 hover:file:bg-stone-300 file:text-gray-700':
                  theme === 'light',
              },
              { 'file:bg-slate-700 file:text-primary': theme === 'dark' },
              'hover:cursor-pointer w-64 file:border-0  text-sm text-slate-500 file:py-2 file:px-4 file:rounded-full  file:text-sm file:font-semibold',
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
          {saving && <MainSpinner size={SpinnerSizes.smallmedium} />}
        </div>
      </dd>
    </div>
  )
}
