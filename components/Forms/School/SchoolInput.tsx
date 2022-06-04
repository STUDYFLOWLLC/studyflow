import { Combobox } from '@headlessui/react'
import classnames from 'classnames'
import { School } from 'graphql/generated-graphql'
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Props {
  schools: School[]
  selectedSchool: School
  setSelectedSchool: Dispatch<SetStateAction<School>>
  filterSchools: (schoolsArray: School[], searchVal: string) => void
}

export default function SchoolInput({
  schools,
  selectedSchool,
  setSelectedSchool,
  filterSchools,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState('')

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
        filterSchools(schools, e.target.value)
        setQuery(e.target.value)
      }}
      displayValue={() => selectedSchool.Name}
      value={query}
      placeholder="Enter your school"
      autoFocus
    />
  )
}
