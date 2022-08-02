import { Combobox } from '@headlessui/react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  query: string
  setQuery: (query: string) => void
}

export default function UserInput({ query, setQuery }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <Combobox.Input
        className={classNames(
          { 'border-gray-300': theme === 'light' },
          { 'bg-base-100': theme === 'dark' },
          'text-center  text-info text-sm outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full rounded-md',
        )}
        onChange={(e: { target: { value: string } }) => {
          setQuery(e.target.value)
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        // displayValue={() => selectedSchool.Name}
        value={query}
        placeholder="enter friend name"
        autoFocus
        autoComplete="off"
      />
      <div
        className={classNames(
          { 'w-4/5': focused },
          { 'w-1/3': !focused },
          'transition-all h-0.5 bg-primary mx-auto',
        )}
      />
    </>
  )
}
