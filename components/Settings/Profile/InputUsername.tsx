/* eslint-disable no-inner-declarations */

import { CheckIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import UsernameChecker from 'components/Setup/Profile/UsernameChecker'
import MainSpinner from 'components/spinners/MainSpinner'
import checkUniqueUsername from 'hooks/setup/checkUniqueUsername'
import useUserDetails from 'hooks/useUserDetails'
import { ChangeEvent, useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import { changeUserUsername } from 'utils/user/userHandlers'

interface Props {
  flex?: boolean
}

export default function InputName({ flex }: Props) {
  const { user } = useUser()
  const { userDetails, userDetailsLoading, mutateUserDetails } = useUserDetails(
    user?.id,
  )

  const [editingUsername, setEditingUsername] = useState(false)
  const [saving, setSaving] = useState(false)
  const [inputValue, setInputValue] = useState(userDetails?.Username)
  const [passesLength, setPassesLength] = useState(false)
  const [passesLowercaseNumbers, setPassesLowercaseNumbers] = useState(false)
  const [passesPeriodUnderscoresInside, setPassesPeriodUnderscoresInside] =
    useState(false)
  const [awesomeUsername, setAwesomeUsername] = useState(false)
  const [checkingUnique, setCheckingUnique] = useState(false)
  const [uniqueCheck, setUniqueCheck] = useState(false)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const real = e?.target?.value
    setInputValue(real)
    const shouldSaveToBackend =
      passesLength && passesLowercaseNumbers && passesPeriodUnderscoresInside
    changeUserUsername(
      real,
      userDetails,
      mutateUserDetails,
      setSaving,
      shouldSaveToBackend,
    )
  }

  useEffect(() => {
    setInputValue(userDetails?.Username)
  }, [!userDetailsLoading && userDetails])

  useEffect(() => {
    if (!inputValue) return

    if (inputValue.length >= 3 && inputValue.length <= 15) {
      setPassesLength(true)
    } else {
      setPassesLength(false)
    }
    if (/^[a-z0-9._]+$/.test(inputValue)) {
      setPassesLowercaseNumbers(true)
    } else {
      setPassesLowercaseNumbers(false)
    }
    if (
      inputValue.charAt(0) !== '.' &&
      inputValue.charAt(0) !== '_' &&
      inputValue.charAt(inputValue.length - 1) !== '.' &&
      inputValue.charAt(inputValue.length - 1) !== '_'
    ) {
      setPassesPeriodUnderscoresInside(true)
    } else {
      setPassesPeriodUnderscoresInside(false)
    }

    async function checkUniqueness(inputValue: string) {
      setCheckingUnique(true)
      if (inputValue.length < 3 || inputValue.length > 15) {
        setCheckingUnique(false)
        setUniqueCheck(false)
      } else {
        const unique = await checkUniqueUsername(
          inputValue || '',
          userDetails?.UserID || 0,
        )
        setCheckingUnique(false)
        setUniqueCheck(unique)
      }
    }

    checkUniqueness(inputValue)
  }, [inputValue])

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
        Username
      </dt>
      <div className="w-96 mx-auto relative mb-2">
        <input
          className="bg-transparent text-center first-line:outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-lg"
          value={inputValue}
          onChange={(e) => onChange(e)}
          placeholder="flowsurfer434"
          spellCheck={false}
          onFocus={() => setEditingUsername(true)}
          onBlur={() => setEditingUsername(false)}
        />
        <div
          className={classNames(
            { 'w-4/5': editingUsername },
            { 'w-1/3': !editingUsername },
            'transition-all h-0.5 bg-primary mx-auto',
          )}
        />
        {editingUsername && (
          <div className="bottom-1 duration-300 w-6 h-6 absolute right-8">
            {saving ? (
              <MainSpinner size={SpinnerSizes.smallmedium} />
            ) : (
              <CheckIcon className="w-6 h-6 text-info" />
            )}
          </div>
        )}
      </div>
      <UsernameChecker
        passesLength={passesLength}
        passesLowercaseNumbers={passesLowercaseNumbers}
        passesPeriodsUnderscoresInside={passesPeriodUnderscoresInside}
        uniqueCheck={uniqueCheck}
        uniqueCheckLoading={checkingUnique}
        awesomeUsername={awesomeUsername}
      />
    </div>
  )
}
