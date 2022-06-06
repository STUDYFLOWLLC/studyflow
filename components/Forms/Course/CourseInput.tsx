import { Combobox } from '@headlessui/react'
import classnames from 'classnames'
import { School } from 'graphql/generated-graphql'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  selectedSchool: School
  query: string
  setQuery: (query: string) => void
}

export default function CourseInput({
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
        'w-full text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0 rounded-md text-md',
      )}
      onChange={(e: { target: { value: string } }) => {
        setQuery(e.target.value)
      }}
      value={query}
      placeholder="Course Title/Code/Prof"
      autoFocus
    />
  )
}
