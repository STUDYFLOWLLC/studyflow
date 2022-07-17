import CourseColorPicker from 'components/Forms/Course/CourseColorPicker'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import CourseHeader from './CourseHeader'
import InputCourseNickname from './InputCourseNickname'
import InputCourseTitle from './InputCourseTitle'

interface Props {
  course: CourseOnTerm
  setSelectedCourse: (course: CourseOnTerm | undefined | null) => void
}

export default function EditCourse({ course, setSelectedCourse }: Props) {
  return (
    <div className="prose">
      <CourseHeader course={course} setSelectedCourse={setSelectedCourse} />
      <div className="my-4">
        <InputCourseTitle course={course} />
      </div>
      <div className="my-4">
        <InputCourseNickname course={course} />
      </div>
      <div className="mx-auto my-4 max-w-xs">
        <CourseColorPicker course={course} />
      </div>
    </div>
  )
}
