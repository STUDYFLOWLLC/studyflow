import { CheckIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import useUserDetails from 'hooks/useUserDetails'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'
import { changeUserName } from 'utils/user/userHandlers'

export default function InputName() {
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)

  const [editingName, setEditingName] = useState(false)
  const [saving, setSaving] = useState(false)
  const [inputValue, setInputValue] = useState(userDetails?.Name)

  useEffect(() => setInputValue(userDetails?.Name), [userDetails])

  return (
    <div className="py-4 sm:py-5 relative">
      <dt className="text-sm text-info font-medium absolute left-0">Name</dt>
      <div className="w-96 mx-auto relative">
        <input
          className="bg-transparent text-center first-line:outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-lg"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value)
            let shouldSaveToBackend = true
            if (e.target.value.length < 3) {
              toast.error(
                'Name must be at least 3 characters long. Changes not saved.',
              )
              shouldSaveToBackend = false
            }
            changeUserName(
              e.target.value,
              userDetails,
              mutateUserDetails,
              setSaving,
              shouldSaveToBackend,
            )
          }}
          placeholder="Enter your name"
          onFocus={() => setEditingName(true)}
          onBlur={() => setEditingName(false)}
        />
        <div
          className={classNames(
            { 'w-4/5': editingName },
            { 'w-1/3': !editingName },
            'transition-all h-0.5 bg-primary mx-auto',
          )}
        />
        {editingName && (
          <div className="bottom-1 duration-300 w-6 h-6 absolute right-6">
            {saving ? (
              <MainSpinner size={SpinnerSizes.smallmedium} />
            ) : (
              <CheckIcon className="w-6 h-6 text-info" />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
