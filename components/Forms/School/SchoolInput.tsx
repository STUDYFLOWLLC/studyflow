import { Combobox } from '@headlessui/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  query: string
  setQuery: (query: string) => void
  saving: boolean
}

export default function SchoolInput({ query, setQuery, saving }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>
      <div className="relative">
        <Combobox.Input
          className={classNames(
            { 'border-gray-300': theme === 'light' },
            { 'bg-base-100': theme === 'dark' },
            'text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-lg',
          )}
          onChange={(e: { target: { value: string } }) => {
            setQuery(e.target.value)
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={query}
          placeholder="Enter your school"
          autoFocus
          autoComplete="off"
        />
        {saving && (
          <span className="absolute right-10 top-3">
            <MainSpinner size={SpinnerSizes.small} />
          </span>
        )}
      </div>
      <div
        className={classNames(
          { 'w-4/5': focused },
          { 'w-1/3': !focused },
          'transition-all h-0.5 bg-primary mx-auto',
        )}
      />
    </div>
  )
}
