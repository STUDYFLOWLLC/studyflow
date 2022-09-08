/* eslint-disable no-nested-ternary */
import { CheckIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import useUserDetails from 'hooks/useUserDetails'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'
import isValidEmail from 'utils/isValidEmail'
import { changeUserEmail } from 'utils/user/userHandlers'

export default function InputName() {
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)

  const [locked, setLocked] = useState(false)
  const [editingEmail, setEditingEmail] = useState(false)
  const [saving, setSaving] = useState(false)
  const [inputValue, setInputValue] = useState(userDetails?.Email)

  useEffect(() => setInputValue(userDetails?.Email), [userDetails])
  useEffect(() => setLocked(user?.app_metadata.provider === 'google'), [user])

  return (
    <Tippy
      disabled={!locked}
      content={`Cannot edit email with ${user?.app_metadata.provider} sign in.`}
      delay={TOOLTIP_DELAY}
      offset={TOOLTIP_OFFSET}
    >
      <div className="py-4 sm:py-5 relative">
        <dt className="text-sm text-info font-medium absolute left-0">Email</dt>
        <div
          className={classNames(
            { 'border rounded-md py-0.5 mb-1': locked },
            'w-96 mx-auto relative',
          )}
        >
          <input
            className="bg-transparent text-center first-line:outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-lg"
            value={inputValue}
            disabled={locked}
            onChange={(e) => {
              setInputValue(e.target.value)
              let shouldSaveToBackend = true
              if (!isValidEmail(e.target.value)) {
                toast.error('Invalid email. Changes not saved.')
                shouldSaveToBackend = false
              }
              changeUserEmail(
                e.target.value,
                userDetails,
                mutateUserDetails,
                setSaving,
                shouldSaveToBackend,
              )
            }}
            placeholder="Enter your email"
            onFocus={() => setEditingEmail(true)}
            onBlur={() => setEditingEmail(false)}
          />
          <div
            className={classNames(
              { 'w-4/5': editingEmail || locked },
              { 'w-1/3': !(editingEmail || locked) },
              'transition-all h-0.5 bg-primary mx-auto',
            )}
          />
          {(editingEmail || locked) && (
            <div className="transition-all duration-300 w-6 h-6 absolute right-6 top-1">
              {saving ? (
                <MainSpinner size={SpinnerSizes.smallmedium} />
              ) : locked ? (
                <LockClosedIcon className="w-5 h-5" />
              ) : (
                <CheckIcon className="w-5 h-5 text-info" />
              )}
            </div>
          )}
        </div>
      </div>
    </Tippy>
  )
}
