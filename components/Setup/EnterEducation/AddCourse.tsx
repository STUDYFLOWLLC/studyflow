import { School } from '@prisma/client'
import { User } from '@supabase/supabase-js'
import CourseColorPicker from 'components/Forms/Course/CourseColorPicker'
import CourseSearch, { CourseHit } from 'components/Forms/Course/CourseSearch'
import CourseDisplay from 'components/Setup/EnterEducation/CourseDisplay'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'

interface Props {
  user: User
  selectedSchool: School
}

const colors = [
  'bg-teal-300',
  'bg-yellow-200',
  'bg-purple-200',
  'bg-blue-500',
  'bg-green-300',
  'bg-red-400',
  'bg-pink-400',
  'bg-orange-400',
]

export default function AddCourse({ user, selectedSchool }: Props) {
  const { userDetails } = useUserDetails(user.id)

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

  return (
    <>
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
        disabled={!selectedCourse.Title}
      >
        Add {nickname ? nickname : 'Course'}
      </button>
    </>
  )
}
