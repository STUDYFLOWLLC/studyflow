/* eslint-disable @typescript-eslint/no-explicit-any, react/self-closing-comp */

import {
  CakeIcon,
  CheckIcon,
  InformationCircleIcon,
  LockClosedIcon,
  XIcon,
} from '@heroicons/react/outline'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { Dispatch, useEffect, useState } from 'react'

interface Props {
  username: string
  setUsername: Dispatch<any>
}

export default function InputUsername({ username, setUsername }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <div className="flex flex-col items-center m-4 w-full text-left ">
        <span className="w-full">
          username <span className="text-red-400">*</span>
        </span>

        <div className="w-full flex justify-center">
          <div className="relative w-full sm:w-4/5 pr-3 sm:pr-0">
            <div
              className={classnames(
                { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
                { 'bg-slate-700': theme === 'dark' },
                'w-full flex flex-col item-center align-middle p-2 rounded m-2 mb-0',
              )}
            >
              <InformationCircleIcon className="w-5 h-5 text-secondary absolute top-4 left-4" />
              <div className="w-full flex items-center pl-8 align-center">
                {username.length >= 3 && username.length <= 15 ? (
                  <CheckIcon className="mr-4 w-4 h-4 text-green-400" />
                ) : (
                  <XIcon className="mr-4 w-4 h-4 text-red-400" />
                )}
                <p className="w-18">3-15 Characters</p>
              </div>
              <div className="w-full flex items-center pl-8 align-center">
                {/^[a-z0-9._]+$/.test(username) ? (
                  <CheckIcon className="mr-4 w-4 h-4 text-green-400" />
                ) : (
                  <XIcon className="mr-4 w-4 h-4 text-red-400" />
                )}
                <p className="w-18">Lowercase letters, numbers</p>
              </div>
              <div className="w-full flex items-center pl-8 align-center">
                {username.charAt(0) !== '.' &&
                username.charAt(0) !== '_' &&
                username.charAt(username.length - 1) !== '.' &&
                username.charAt(username.length - 1) !== '_' ? (
                  <CheckIcon className="mr-4 w-4 h-4 text-green-400" />
                ) : (
                  <XIcon className="mr-4 w-4 h-4 text-red-400" />
                )}
                <p className="w-18">Periods, underscores inside</p>
              </div>
              <div className="w-full flex items-center pl-8 align-center">
                {username.length >= 3 && username.length <= 15 ? (
                  <CakeIcon className="mr-4 w-4 h-4 text-green-400" />
                ) : (
                  <LockClosedIcon
                    className={classnames(
                      { 'text-gray-700': theme === 'light' },
                      { 'text-gray-100': theme === 'dark' },
                      'mr-4 w-4 h-4',
                    )}
                  />
                )}
                <p className="w-18">Awesome username</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        className={classnames(
          { 'border-gray-300': theme === 'light' },
          { 'bg-base-100': theme === 'dark' },
          'text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-2xl',
        )}
        placeholder="flowsurfer434"
        value={username}
        onChange={(e) => setUsername(e.target.value.trim().toLocaleLowerCase())}
      ></input>
    </>
  )
}
