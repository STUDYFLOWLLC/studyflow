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

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Combobox.Input
      onChange={(e: { target: { value: string } }) => {
        setQuery(e.target.value)
      }}
      // displayValue={() => selectedSchool.Name}
      value={query}
      placeholder="Search"
      autoFocus
      autoComplete="off"
      type="text"
      name="Search"
      id="search"
      className={classNames(
        { 'border-gray-300': theme === 'light' },
        { 'bg-base-200': theme === 'dark' },
        'h-10 focus:ring-primary focus:border-primary w-72 sm:text-sm rounded-md',
      )}
    />
  )
}
