import classNames from 'classnames'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import shorten from 'utils/shorten'

interface Props {
  courseOnTerm: CourseOnTerm
  setSelectedCourseOnTerm?: (courseOnTerm: CourseOnTerm) => void
}

export default function SmallCourseDisplay({
  courseOnTerm,
  setSelectedCourseOnTerm,
}: Props) {
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => {
        if (setSelectedCourseOnTerm) setSelectedCourseOnTerm(courseOnTerm)
      }}
      onKeyDown={() => {
        if (setSelectedCourseOnTerm) setSelectedCourseOnTerm(courseOnTerm)
      }}
    >
      <div
        key={courseOnTerm.Color}
        className={classNames(
          courseOnTerm.Color,
          ' ring-offset-1 w-3 h-3 mx-2 rounded-full',
        )}
      />
      {shorten(courseOnTerm.Nickname || courseOnTerm.FK_Course?.Title, 20)}
    </div>
  )
}
