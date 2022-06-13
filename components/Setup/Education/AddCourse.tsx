/* eslint-disable @typescript-eslint/no-explicit-any */

import { School } from '@prisma/client'
import { User } from '@supabase/supabase-js'
import CourseColorPicker from 'components/Forms/Course/CourseColorPicker'
import CourseSearch, { CourseHit } from 'components/Forms/Course/CourseSearch'
import CourseDisplay from 'components/Setup/Education/CourseDisplay'
import SmallCourseDisplay from 'components/Setup/Education/SmallCourseDisplay'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import createCourseOnTerm from 'hooks/school/createCourseOnTerm'
import useTermDetails from 'hooks/school/useTermDetails'
import { mutateSetupStep } from 'hooks/setup/mutateUser'
import useUserDetails from 'hooks/useUserDetails'
import { useRouter } from 'next/router'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { SetupSteps } from 'types/SetupSteps'

interface Props {
  user: User
  selectedSchool: School
}

const colors = [
  'bg-teal-300',
  'bg-yellow-300',
  'bg-purple-200',
  'bg-blue-500',
  'bg-green-300',
  'bg-red-400',
  'bg-pink-400',
  'bg-orange-400',
]

export default function AddCourse({ user, selectedSchool }: Props) {
  const router = useRouter()

  const { userDetails, mutateUserDetails } = useUserDetails(user.id)
  const { termDetails, termDetailsLoading, mutateTermDetails } = useTermDetails(
    userDetails.FK_Terms?.[0]?.TermID,
  )

  const [nickname, setNickname] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<CourseHit>({
    Code: '',
    CourseID: 0,
    Title: '',
    Term: '',
    FK_SchoolID: 0,
    IsOfficial: false,
  })
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [query, setQuery] = useState('')
  const [addingCourse, setAddingCourse] = useState(false)
  const [doneAddingCourses, setDoneAddingCourses] = useState(false)

  const verifyUniqueCourse = () => {
    if (termDetails.CoursesOnTerm.length === 0) return true
    for (let i = 0; i < termDetails.CoursesOnTerm.length; i += 1) {
      if (termDetails.CoursesOnTerm[i].Code === selectedCourse.Code) {
        setSelectedCourse({
          Code: '',
          CourseID: 0,
          Title: '',
          Term: '',
          FK_SchoolID: 0,
          IsOfficial: false,
        })
        setQuery('')
        toast.error('Course already added!')
        return false
      }
    }
    return true
  }

  const createCourseOnTermInDB = async () => {
    if (!selectedCourse.Title || addingCourse) return
    setAddingCourse(true)
    if (verifyUniqueCourse() === false) return setAddingCourse(false)
    setQuery('')
    const newCourse = await createCourseOnTerm(
      selectedColor,
      selectedCourse.CourseID,
      userDetails.FK_Terms[0].TermID,
      nickname,
    )
    if (newCourse === false) {
      setNickname('')
      setSelectedColor(colors[0])
      setAddingCourse(false)
      return toast.error('Error adding course')
    }
    mutateTermDetails({
      ...termDetails,
      CoursesOnTerm: [...termDetails.CoursesOnTerm, newCourse],
      mutated: true,
    })
    setSelectedCourse({
      Code: '',
      CourseID: 0,
      Title: '',
      Term: '',
      FK_SchoolID: 0,
      IsOfficial: false,
    })
    setNickname('')
    setSelectedColor(colors[0])
    setAddingCourse(false)
    toast.success('Course added!')
  }

  const finishAddingCourses = async () => {
    if (doneAddingCourses) return
    setDoneAddingCourses(true)
    await mutateSetupStep(userDetails.Email, SetupSteps.COMPLETE)
    await mutateUserDetails({
      ...userDetails,
      SetupStep: SetupSteps.COMPLETE,
      mutate: true,
    })

    setDoneAddingCourses(false)
    router.push('setup/community')
  }

  return (
    <>
      <Toaster position="top-center" />
      <p className="w-full text-left pl-2 mt-2">
        Add courses to {userDetails.FK_Terms[0]?.TermName}{' '}
        {userDetails.FK_Terms[0]?.TermType}
      </p>
      <CourseSearch
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
        selectedSchool={selectedSchool}
        query={query}
        setQuery={setQuery}
      />
      <CourseColorPicker
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      {selectedCourse.Title && (
        <CourseDisplay
          nickname={nickname}
          setNickname={setNickname}
          color={selectedColor}
          course={selectedCourse}
        />
      )}
      <button
        type="button"
        className="mt-2 btn btn-primary btn-sm flex"
        onClick={() => createCourseOnTermInDB()}
      >
        Add {nickname || 'Course'}
        <ButtonSpinner show={addingCourse} />
      </button>

      <p className="w-full text-left pl-2 mt-2">Your courses</p>
      {!termDetailsLoading && (
        <div
          className="w-full flex flex-wrap px-2 tooltip-bottom tooltip"
          data-tip="Courses can be edited later."
        >
          {termDetails.CoursesOnTerm.map((course) => (
            <SmallCourseDisplay
              key={course.Code}
              color={course.Color}
              title={course.Title}
              nickname={course.Nickname}
            />
          ))}
        </div>
      )}
      {!termDetailsLoading && termDetails.CoursesOnTerm.length > 0 && (
        <button
          type="button"
          className="mt-4 btn btn-primary btn-sm flex"
          onClick={() => finishAddingCourses()}
        >
          I&apos;m done adding courses
          <ButtonSpinner show={doneAddingCourses} />
        </button>
      )}
    </>
  )
}
