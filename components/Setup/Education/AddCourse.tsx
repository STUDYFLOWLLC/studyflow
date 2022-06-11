/* eslint-disable @typescript-eslint/no-explicit-any */

import { School } from '@prisma/client'
import { User } from '@supabase/supabase-js'
import CourseColorPicker from 'components/Forms/Course/CourseColorPicker'
import CourseSearch, { CourseHit } from 'components/Forms/Course/CourseSearch'
import CourseDisplay from 'components/Setup/Education/CourseDisplay'
import SmallCourseDisplay from 'components/Setup/Education/SmallCourseDisplay'
import MainSpinner from 'components/spinners/MainSpinner'
import createCourseOnTerm from 'hooks/school/createCourseOnTerm'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { SpinnerSizes } from 'types/Loading'

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
  const { userDetails } = useUserDetails(user.id)
  const { coursesOnTerm, mutateCoursesOnTerm } = useCoursesOnTerm(
    userDetails.FK_Terms[0]?.TermID,
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
  const [addingCourse, setAddingCourse] = useState(false)

  const verifyUniqueCourse = () => {
    if (!coursesOnTerm || !coursesOnTerm.findFirstTerm) return true
    for (
      let i = 0;
      i < coursesOnTerm.findFirstTerm.FK_CourseOnTerm.length;
      i += 1
    ) {
      if (
        coursesOnTerm.findFirstTerm.FK_CourseOnTerm[i].FK_Course.Code ===
        selectedCourse.Code
      ) {
        toast.error('Course already added!')
        return false
      }
    }
    return true
  }

  const createCourseOnTermInDB = async () => {
    setAddingCourse(true)
    if (verifyUniqueCourse() === false) {
      setAddingCourse(false)
      return
    }
    const data = await createCourseOnTerm(
      selectedColor,
      selectedCourse.CourseID,
      userDetails.FK_Terms[0].TermID,
      nickname,
    )
    if (data.updateTerm.TermID) toast.success('Course added!')
    else toast.error('Error adding course')
    mutateCoursesOnTerm({
      ...coursesOnTerm,
      tempCourse: {
        Color: selectedColor,
        Code: selectedCourse.Code,
        Term: selectedCourse.Term,
        Title: selectedCourse.Title,
        Nickname: nickname,
      },
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
        className="mt-2 btn btn-primary btn-sm"
        onClick={() => createCourseOnTermInDB()}
        disabled={!selectedCourse.Title || addingCourse}
      >
        {!addingCourse && <span>Add {nickname || 'Course'}</span>}
        {addingCourse && (
          <span>
            <MainSpinner size={SpinnerSizes.small} />
          </span>
        )}
      </button>
      <p className="w-full text-left pl-2 mt-2">Your courses</p>
      {coursesOnTerm && (
        <div>
          {coursesOnTerm.tempCourse ? (
            <div
              className="w-full flex flex-wrap px-2 tooltip-bottom tooltip"
              data-tip="Courses can be edited later."
            >
              {coursesOnTerm.findFirstTerm.FK_CourseOnTerm.concat([
                coursesOnTerm.tempCourse,
              ]).map((course: any) => (
                <SmallCourseDisplay
                  key={course.code}
                  color={course.Color}
                  title={course.Title}
                  nickname={course.Nickname}
                />
              ))}
            </div>
          ) : (
            <div
              className="w-full flex flex-wrap px-2 tooltip-bottom tooltip"
              data-tip="Courses can be edited later."
            >
              {coursesOnTerm.findFirstTerm.FK_CourseOnTerm.map(
                (course: any) => (
                  <SmallCourseDisplay
                    key={course.code}
                    color={course.Color}
                    title={course.Title}
                    nickname={course.Nickname}
                  />
                ),
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}
