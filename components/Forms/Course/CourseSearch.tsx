/* eslint-disable @typescript-eslint/no-explicit-any */

import { Combobox } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import algoliasearch, { SearchIndex } from 'algoliasearch/lite'
import classnames from 'classnames'
import CourseEntry from 'components/Forms/Course/CourseEntry'
import CourseInput from 'components/Forms/Course/CourseInput'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useSchoolDetails from 'hooks/school/useSchoolDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { changeCourseOnTermCourse } from 'utils/setup/courseHandlers'

export interface CourseHit {
  Code: string
  CourseID: number
  Title: string
  Term: string
  FK_SchoolID: number
  FK_Professor?: {
    Name?: string
    Email?: string
  }
  IsOfficial: boolean
}

interface Props {
  courseOnTerm: CourseOnTerm | undefined
  query: string
  setQuery: (query: string) => void
}

export default function CourseSearch({ courseOnTerm, query, setQuery }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { schoolDetails } = useSchoolDetails(userDetails?.FK_SchoolID)
  const { coursesOnTerm, mutateCoursesOnTerm } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [mounted, setMounted] = useState(false)
  const [hits, setHits] = useState<CourseHit[]>([])

  let index: SearchIndex

  const filterCourses = async () => {
    const result = await index.search(query)
    const hitsTemp = result.hits
    setHits(
      hitsTemp.map((hit: any) => ({
        Code: hit.Code,
        CourseID: hit.CourseID,
        Title: hit.Title,
        Term: hit.Term,
        FK_SchoolID: hit.FK_SchoolID,
        FK_Professor: hit.FK_Professor,
        IsOfficial: hit.IsOfficial,
      })),
    )
  }

  useEffect(() => {
    setMounted(true)
    if (schoolDetails.HasClassSupport) {
      const searchIndex = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
        process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
      )
      index = searchIndex.initIndex('CornellFA22Courses')
      filterCourses()
    }
  }, [query])

  if (!mounted) return null

  return (
    <Combobox
      className="w-5/6"
      as="div"
      value={
        courseOnTerm?.FK_Course?.Title === 'Untitled course'
          ? ''
          : courseOnTerm?.FK_Course?.Title || ''
      }
      onChange={(value: string) =>
        changeCourseOnTermCourse(
          courseOnTerm?.CourseOnTermID,
          value as unknown as CourseHit,
          coursesOnTerm,
          mutateCoursesOnTerm,
        )
      }
    >
      <div className="relative mt-1">
        <CourseInput
          courseOnTerm={courseOnTerm}
          query={query}
          setQuery={setQuery}
        />
        {hits.length > 0 && (
          <Combobox.Options
            className={classnames(
              {
                'bg-gray-100': theme === 'light',
              },
              { 'bg-slate-700': theme === 'dark' },
              'mt-2 absolute z-10 w-full overflow-auto rounded-md text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
            )}
          >
            {hits.slice(0, 5).map((courseHit: any) => (
              <CourseEntry key={courseHit.CourseID} course={courseHit} />
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
