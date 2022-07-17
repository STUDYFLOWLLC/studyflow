/* eslint-disable @typescript-eslint/no-explicit-any */

import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import CourseColorPicker from 'components/Forms/Course/CourseColorPicker'
import CourseSearch from 'components/Forms/Course/CourseSearch'
import CourseDisplay from 'components/Setup/Education/CourseDisplay'
import SmallCourseDisplay from 'components/Setup/Education/SmallCourseDisplay'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useSchoolDetails from 'hooks/school/useSchoolDetails'
import { mutateSetupStep } from 'hooks/setup/mutateUser'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SetupSteps } from 'types/SetupSteps'
import CourseBlurOver from './CourseBlurOver'
import InputCourseNickname from './InputCourseNickname'

interface Props {
  setSelectedCourseOnTerm: (course: CourseOnTerm) => void
  inSetup?: boolean
}

export default function AddCourse({ setSelectedCourseOnTerm, inSetup }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)
  const { schoolDetails } = useSchoolDetails(userDetails?.FK_SchoolID)
  const { coursesOnTerm, coursesOnTermLoading, mutateCoursesOnTerm } =
    useCoursesOnTerm(userDetails?.FK_Terms?.[0]?.TermID)

  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showAdd, setShowAdd] = useState(true)
  const [query, setQuery] = useState('')
  const [addingCourse, setAddingCourse] = useState(false)
  const [doneAddingCourses, setDoneAddingCourses] = useState(false)

  useEffect(() => setMounted(true), [])

  const finishAddingCourses = async () => {
    if (doneAddingCourses) return
    setDoneAddingCourses(true)
    mutateSetupStep(
      userDetails?.Email || 'fucktheiremaildidntload',
      SetupSteps.COMPLETE,
    )
    mutateUserDetails(
      {
        ...userDetails,
        SetupStep: SetupSteps.COMPLETE,
        mutate: true,
      },
      {
        revalidate: false,
      },
    )

    setDoneAddingCourses(false)
  }

  if (!mounted) return null

  return (
    <div className="relative w-full h-full">
      {!coursesOnTerm[coursesOnTerm.length - 1]?.IsNew && showAdd && (
        <CourseBlurOver
          loading={loading}
          setLoading={setLoading}
          setShowAdd={setShowAdd}
        />
      )}
      <div
        className={classNames(
          {
            'blur-lg':
              !coursesOnTerm[coursesOnTerm.length - 1]?.IsNew && showAdd,
          },
          'w-full flex flex-col items-center not-prose',
        )}
      >
        <p className="w-full text-left text-lg mt-2 font-semibold">
          Add Courses from {schoolDetails.Name}
        </p>
        <CourseSearch
          courseOnTerm={coursesOnTerm[coursesOnTerm.length - 1]}
          query={query}
          setQuery={setQuery}
        />
        <CourseColorPicker course={coursesOnTerm[coursesOnTerm.length - 1]} />
        <CourseDisplay courseOnTerm={coursesOnTerm[coursesOnTerm.length - 1]} />
        <InputCourseNickname courseOnTerm={coursesOnTerm[coursesOnTerm.length - 1]} />
        <button
          type="button"
          className="alex-button mt-2"
          onClick={() => {
            setQuery('')
            setShowAdd(true)
          }}
        >
          Add another course
          <ButtonSpinner show={addingCourse} />
        </button>
        {coursesOnTerm.length > 0 && inSetup && (
          <>
            <div className="w-full transition-all h-0.5 bg-gray-200 mx-auto mt-4" />
            <p className="w-full text-left pl-2 mt-2">
              Your courses in {userDetails?.FK_Terms?.[0].TermName}{' '}
            </p>
            <div className="w-full flex flex-wrap px-2">
              {coursesOnTerm.map((courseOnTerm) => (
                <SmallCourseDisplay
                  key={courseOnTerm.CourseOnTermID}
                  courseOnTerm={courseOnTerm}
                  setSelectedCourseOnTerm={setSelectedCourseOnTerm}
                />
              ))}
            </div>
            <button
              type="button"
              className="mt-4 btn btn-primary btn-sm flex"
              onClick={() => finishAddingCourses()}
            >
              I&apos;m done adding courses
              <ButtonSpinner show={doneAddingCourses} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
