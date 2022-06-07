import { Combobox } from '@headlessui/react'
import { School } from '@prisma/client'
import classnames from 'classnames'
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

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Combobox.Input
      className={classnames(
        { 'border-gray-300': theme === 'light' },
        { 'bg-base-100': theme === 'dark' },
        'text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-2xl',
      )}
      onChange={(e: { target: { value: string } }) => {
        setQuery(e.target.value)
      }}
      displayValue={() => selectedSchool.Name}
      value={query}
      placeholder="Enter your school"
      autoFocus
    />
  )
}