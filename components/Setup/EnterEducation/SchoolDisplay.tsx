import { BadgeCheckIcon } from '@heroicons/react/outline'
import classnames from 'classnames'
import CourseSearch from 'components/Forms/Course/CourseSearch'
import { School } from 'graphql/generated-graphql'
import useCourseCount from 'hooks/school/useCourseCount'
import useProfessorCount from 'hooks/school/useProfessorCount'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  selectedSchool: School
}

export default function SchoolDisplay({ selectedSchool }: Props) {
  if (!selectedSchool.Name) return null

  const { courseCount, courseCountLoading, courseCountError } = useCourseCount(
    selectedSchool.SchoolID,
  )
  const { professorCount, professorCountLoading, professorCountError } =
    useProfessorCount(selectedSchool.SchoolID)
  const { theme } = useTheme()
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState<any>([])

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className={classnames(
        { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
        { 'bg-slate-700': theme === 'dark' },
        'w-72 sm:w-96 flex flex-col justify-center items-center p-2 rounded mt-4 mb-0',
      )}
    >
      <div className="prose w-full flex items-center justify-around">
        <h3 className="m-0">{selectedSchool.Name}</h3>
        <div
          className="tooltip tooltip-right"
          data-tip={`Studyflow officially supports ${selectedSchool.Name} and actively updates their class roster.`}
        >
          <BadgeCheckIcon className="w-6 h-6" />
        </div>
      </div>
      <p className="w-full text-left pl-2 mt-2">Add a course to </p>
      <CourseSearch selectedSchool={selectedSchool} />
    </div>
  )
}
