import {
  CakeIcon,
  CheckIcon,
  InformationCircleIcon,
  LockClosedIcon,
  XIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  passesLength: boolean
  passesLowercaseNumbers: boolean
  passesPeriodsUnderscoresInside: boolean
  uniqueCheck: boolean
  uniqueCheckLoading: boolean
  awesomeUsername: boolean
}

export default function UsernameChecker({
  passesLength,
  passesLowercaseNumbers,
  passesPeriodsUnderscoresInside,
  uniqueCheck,
  uniqueCheckLoading,
  awesomeUsername,
}: Props) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="w-full text-sm">
      <div className="relative w-96 mx-auto sm:w-4/5 pr-3 sm:pr-0">
        <div
          className={classNames(
            { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
            { 'bg-slate-700': theme === 'dark' },
            'w-full flex flex-col item-center align-middle p-2 rounded mt-2',
          )}
        >
          <InformationCircleIcon className="w-5 h-5 text-secondary absolute top-4 left-4" />
          <div className="w-full flex items-center pl-8 align-center">
            {passesLength ? (
              <CheckIcon className="mr-4 w-4 h-4 text-green-400" />
            ) : (
              <XIcon className="mr-4 w-4 h-4 text-red-400" />
            )}
            <p className="w-18">3-15 Characters</p>
          </div>
          <div className="w-full flex items-center pl-8 align-center">
            {passesLowercaseNumbers ? (
              <CheckIcon className="mr-4 w-4 h-4 text-green-400" />
            ) : (
              <XIcon className="mr-4 w-4 h-4 text-red-400" />
            )}
            <p className="w-18">Lowercase letters, numbers</p>
          </div>
          <div className="w-full flex items-center pl-8 align-center">
            {passesPeriodsUnderscoresInside ? (
              <CheckIcon className="mr-4 w-4 h-4 text-green-400" />
            ) : (
              <XIcon className="mr-4 w-4 h-4 text-red-400" />
            )}
            <p className="w-18">Periods, underscores inside</p>
          </div>
          <div className="w-full flex items-center pl-8 align-center">
            <div className="mr-4">
              {uniqueCheckLoading ? (
                <MainSpinner size={SpinnerSizes.small} />
              ) : (
                <span>
                  {uniqueCheck ? (
                    <CheckIcon className="w-4 h-4 text-green-400" />
                  ) : (
                    <XIcon className="w-4 h-4 text-red-400" />
                  )}
                </span>
              )}
            </div>
            <p className="w-18">One of a kind</p>
          </div>
          <div className="w-full flex items-center pl-8 align-center">
            {awesomeUsername ? (
              <CakeIcon className="mr-4 w-4 h-4 text-secondary" />
            ) : (
              <LockClosedIcon
                className={classNames(
                  { 'text-gray-700': theme === 'light' },
                  { 'text-gray-100': theme === 'dark' },
                  'mr-4 w-4 h-4',
                )}
              />
            )}
            <p className="w-18">Awesome</p>
          </div>
        </div>
      </div>
    </div>
  )
}
