import { Combobox } from '@headlessui/react'
import { School } from '@prisma/client'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  selectedSchool: School
  query: string
  setQuery: (query: string) => void
}

export default function SchoolInput({
  selectedSchool,
  query,
  setQuery,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [focused, setFocused] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>
      <Combobox.Input
        className={classNames(
          { 'border-gray-300': theme === 'light' },
          { 'bg-base-100': theme === 'dark' },
          'text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-2xl',
        )}
        onChange={(e: { target: { value: string } }) => {
          setQuery(e.target.value)
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        displayValue={() => selectedSchool.Name}
        value={query}
        placeholder="Enter your school"
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
    </div>
  )
}
