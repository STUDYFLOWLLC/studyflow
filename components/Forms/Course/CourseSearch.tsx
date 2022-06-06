/* eslint-disable no-explicit-any */

import { Combobox } from '@headlessui/react'
import algoliasearch, { SearchIndex } from 'algoliasearch/lite'
import classnames from 'classnames'
import CourseEntry from 'components/Forms/Course/CourseEntry'
import CourseInput from 'components/Forms/Course/CourseInput'
import { School } from 'graphql/generated-graphql'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  selectedSchool: School
}

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

export default function CourseSearch({ selectedSchool }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState<CourseHit[]>([])

  let searchIndex
  let index: SearchIndex

  const filterCourses = async () => {
    const result = await index.search(query)
    const hitsTemp = result.hits
    setHits(
      hitsTemp.map((hit: any) => {
        return {
          Code: hit.Code,
          CourseID: hit.CourseID,
          Title: hit.Title,
          Term: hit.Term,
          FK_SchoolID: hit.FK_SchoolID,
          FK_Professor: hit.FK_Professor,
          IsOfficial: hit.IsOfficial,
        }
      }),
    )
  }

  useEffect(() => {
    setMounted(true)
    if (selectedSchool.HasClassSupport) {
      let searchIndex = algoliasearch(
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
      value={selectedSchool}
      onChange={(value: School) => console.log('change')}
    >
      <div className="relative mt-1">
        <CourseInput
          selectedSchool={selectedSchool}
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
              'absolute w-full overflow-auto rounded-md text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
            )}
          >
            {hits.slice(0, 5).map((course: any) => (
              <CourseEntry key={course.courseID} course={course} />
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
