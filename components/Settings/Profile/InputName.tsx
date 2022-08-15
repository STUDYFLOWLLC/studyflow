import { CheckIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import useUserDetails from 'hooks/useUserDetails'
import { ChangeEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'
import { changeUserName } from 'utils/user/userHandlers'

interface Props {
  flex?: boolean
}

export default function InputName({ flex }: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading, mutateUserDetails } = useUserDetails(
    user?.id,
  )

  const [hasSetName, setHasSetName] = useState(false)
  const [editingName, setEditingName] = useState(false)
  const [saving, setSaving] = useState(false)
  const [inputValue, setInputValue] = useState(
    userDetails?.Name || user?.user_metadata?.name || '',
  )

  const onChange = (e?: ChangeEvent<HTMLInputElement>, fake?: string) => {
    const real = e?.target?.value || fake || ''

    setInputValue(real)
    let shouldSaveToBackend = true
    if (!userDetailsLoading && real.length < 3) {
      toast.dismiss()
      toast.error('Name must be at least 3 characters long. Changes not saved.')
      shouldSaveToBackend = false
    }
    changeUserName(
      real,
      userDetails,
      mutateUserDetails,
      setSaving,
      shouldSaveToBackend,
    )
  }

  useEffect(() => {
    if (!user?.user_metadata.name) return
    onChange(undefined, user?.user_metadata.name)
    setHasSetName(true)
  }, [!userDetailsLoading && !hasSetName && userDetails])

  return (
    <div
      className={classNames(
        { 'flex flex-col': flex },
        { relative: !flex },
        'py-2 sm:py-3',
      )}
    >
      <dt
        className={classNames(
          { 'absolute left-0': !flex },
          'text-sm text-info font-medium ',
        )}
      >
        Name
      </dt>
      <div className="w-96 mx-auto relative">
        <input
          className="bg-transparent text-center first-line:outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-lg"
          value={inputValue}
          onChange={(e) => onChange(e)}
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
          <div className="bottom-1 duration-300 w-6 h-6 absolute right-8">
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
