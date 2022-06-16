import { Combobox } from '@headlessui/react'
import classNames from 'classnames'
import { CourseHit } from 'components/Forms/Course/CourseSearch'
import { Dispatch, SetStateAction, useState } from 'react'

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
  const [focused, setFocused] = useState(false)

  return (
    <div>
      <Combobox.Input
        className={classNames(
          'bg-transparent w-full text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0 rounded-md text-lg leading-[0.5rem]',
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoComplete="off"
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
  )
}
