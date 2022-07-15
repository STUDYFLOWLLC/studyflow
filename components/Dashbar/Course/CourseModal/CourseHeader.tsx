import classNames from 'classnames'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'

interface Props {
  course: CourseOnTerm
}

export default function CourseHeader({ course }: Props) {
  return (
    <div className="flex items-center">
      <div
        className={classNames(
          course.Color,
          ' ring-offset-1 w-3 h-3 mx-2 rounded-full',
        )}
      />
      <h3 className="m-0 p-0 truncate">
        {course.Nickname || course.FK_Course.Code} |{' '}
        <span className="text-info opacity-80 text-sm">
          {course.FK_Course.Title}, {course.FK_Course.Code}
        </span>
      </h3>
    </div>
  )
}
