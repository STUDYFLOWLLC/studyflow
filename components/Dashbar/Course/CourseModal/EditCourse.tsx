import CourseColorPicker from 'components/Forms/Course/CourseColorPicker'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import CourseHeader from './CourseHeader'
import InputCourseNickname from './InputCourseNickname'
import InputCourseTitle from './InputCourseTitle'

interface Props {
  course: CourseOnTerm
}

export default function EditCourse({ course }: Props) {
  return (
    <div className="prose">
      <CourseHeader course={course} />
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
