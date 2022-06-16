/* eslint-disable @typescript-eslint/no-explicit-any, react/self-closing-comp */

import { User } from '@supabase/supabase-js'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Dispatch, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

interface Props {
  user: User
  name: string
  setName: Dispatch<any>
}

export default function InputName({ user, name, setName }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <p className="w-full text-left">
        Name <span className="text-red-400">*</span>
      </p>
      <div>
        <input
          className={classNames(
            { 'border-gray-300': theme === 'light' },
            { 'bg-base-100': theme === 'dark' },
            'text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  w-full rounded-md text-2xl',
          )}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false)
            if (name && name.length < 3) {
              toast.error('Name must be at least 3 characters')
              setName(user.user_metadata.name)
            }
          }}
          placeholder="Studyflow Fan"
          autoFocus
        />
        <div
          className={classNames(
            { 'w-4/5': focused },
            { 'w-1/3': !focused },
            'transition-all h-0.5 bg-primary mx-auto',
          )}
        />
      </div>
    </>
  )
}
