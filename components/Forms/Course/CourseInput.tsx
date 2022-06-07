import { Combobox } from '@headlessui/react'
import classnames from 'classnames'
import { CourseHit } from 'components/Forms/Course/CourseSearch'
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Props {
  selectedCourse: CourseHit
  setSelectedCourse: Dispatch<SetStateAction<CourseHit>>
  query: string
  setQuery: (query: string) => void
}

export default function CourseInput({
  selectedCourse,
  setSelectedCourse,
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
        if (query === '')
          setSelectedCourse({
            Code: '',
            CourseID: 0,
            Title: '',
            Term: '',
            FK_SchoolID: 0,
            IsOfficial: false,
          })
      }}
      displayValue={() => selectedCourse?.Title || query}
      value={query}
      placeholder="Course Title/Code/Prof"
      autoFocus
    />
  )
}
