import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import getFirstAndLastInitialFromName from 'utils/getFirstAndLastIntial'
import { changeUserPFP } from 'utils/user/userHandlers'

interface Props {
  flex?: boolean
}

export default function InputPFP({ flex }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)

  const [saving, setSaving] = useState(false)

  return (
    <div
      className={classNames(
        { 'flex flex-col': flex },
        { relative: !flex },
        'py-2 sm:py-3 w-full',
      )}
    >
      <dt
        className={classNames(
          { 'absolute left-0': !flex },
          'text-sm font-medium text-info',
        )}
      >
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
              'w-64 file:border-0  file:cursor-pointer text-sm text-slate-500 file:py-2 file:px-4 file:rounded-full  file:text-sm file:font-semibold',
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
