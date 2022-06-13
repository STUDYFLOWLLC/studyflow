/* eslint-disable @typescript-eslint/no-explicit-any */

import { Combobox } from '@headlessui/react'
import { School } from '@prisma/client'
import algoliasearch, { SearchIndex } from 'algoliasearch/lite'
import classnames from 'classnames'
import CourseEntry from 'components/Forms/Course/CourseEntry'
import CourseInput from 'components/Forms/Course/CourseInput'
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

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
  selectedCourse: CourseHit
  setSelectedCourse: Dispatch<SetStateAction<CourseHit>>
  selectedSchool: School
  query: string
  setQuery: (query: string) => void
}

export default function CourseSearch({
  selectedCourse,
  setSelectedCourse,
  selectedSchool,
  query,
  setQuery,
}: Props) {
  const { theme } = useTheme()

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
    if (selectedSchool.HasClassSupport) {
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
      value={selectedCourse}
      onChange={(value: CourseHit) => setSelectedCourse(value)}
    >
      <div className="relative mt-1">
        <CourseInput
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
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
              'absolute z-10 w-full overflow-auto rounded-md text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
            )}
          >
            {hits.slice(0, 5).map((course: any) => (
              <CourseEntry key={course.CourseID} course={course} />
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
