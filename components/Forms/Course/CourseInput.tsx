import { Combobox } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import { changeCourseOnTermCourse } from 'utils/setup/courseHandlers'

interface Props {
  courseOnTerm: CourseOnTerm | undefined
  query: string
  setQuery: (query: string) => void
}

export default function CourseInput({ courseOnTerm, query, setQuery }: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { coursesOnTerm, mutateCoursesOnTerm } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [focused, setFocused] = useState(false)

  return (
    <div>
      <Combobox.Input
        className={classNames(
          'bg-transparent w-full text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0 rounded-md text-lg leading-[0.5rem]',
        )}
        onChange={(e: { target: { value: string } }) => {
          setQuery(e.target.value)
          if (query === '') {
            changeCourseOnTermCourse(
              courseOnTerm?.CourseOnTermID,
              undefined,
              coursesOnTerm,
              mutateCoursesOnTerm,
            )
          }
        }}
        displayValue={() =>
          courseOnTerm?.FK_Course?.Title === 'Untitled course'
            ? query
            : courseOnTerm?.FK_Course?.Title || ''
        }
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
