import { useUser } from '@supabase/supabase-auth-helpers/react'
import classnames from 'classnames'
import AddCourse from 'components/Dashbar/Course/CourseModal/AddCourse'
import SchoolInfo from 'components/Setup/Education/SchoolInfo'
import TermCreate from 'components/Setup/Education/TermCreate'
import LoadWithText from 'components/spinners/LoadWithText'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useSchoolDetails from 'hooks/school/useSchoolDetails'
import useTermDetails from 'hooks/school/useTermDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'

export default function SchoolDisplay() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { schoolDetails } = useSchoolDetails(userDetails?.FK_SchoolID)
  const { termDetails, termDetailsLoading } = useTermDetails(
    userDetails?.FK_Terms && userDetails?.FK_Terms[0]?.TermID,
  )
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [mounted, setMounted] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState<
    CourseOnTerm | undefined | null
  >(!coursesOnTerm?.[0] ? coursesOnTerm[0] : undefined)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (selectedCourse === undefined) setSelectedCourse(coursesOnTerm?.[0])
    if (selectedCourse && coursesOnTerm) {
      const course = coursesOnTerm?.find(
        (courseOnTerm) =>
          courseOnTerm.CourseOnTermID === selectedCourse.CourseOnTermID,
      )
      if (course) setSelectedCourse(course)
    }
  }, [coursesOnTerm, selectedCourse])

  if (!mounted) return null

  if (!schoolDetails?.Name)
    <LoadWithText text="Loading school details" size={SpinnerSizes.medium} />

  if (userDetails && userDetails.FK_Terms?.length === 0)
    return (
      <div
        className={classnames(
          { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
          { 'bg-slate-700': theme === 'dark' },
          'w-72 sm:w-96 flex flex-col justify-center items-center p-4 rounded mt-4 mb-0',
        )}
      >
        <TermCreate />
      </div>
    )

  if (termDetailsLoading) {
    return (
      <div
        className={classnames(
          { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
          { 'bg-slate-700': theme === 'dark' },
          'w-72 sm:w-96 flex flex-col justify-center items-center p-4 rounded mt-4 mb-0',
        )}
      >
        <SchoolInfo selectedSchool={schoolDetails} />
        <LoadWithText text="Loading term details" size={SpinnerSizes.medium} />
      </div>
    )
  }

  return (
    <div
      className={classnames(
        { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
        { 'bg-slate-700': theme === 'dark' },
        'w-72 sm:w-96 flex flex-col justify-center items-center p-4 rounded mt-4 mb-0',
      )}
    >
      <SchoolInfo selectedSchool={schoolDetails} />
      <AddCourse setSelectedCourseOnTerm={setSelectedCourse} inSetup />
      {/* {selectedCourse !== null && selectedCourse !== undefined && (
        <EditCourse
          course={selectedCourse}
          setSelectedCourse={setSelectedCourse}
        />
      )} */}
    </div>
  )
}
