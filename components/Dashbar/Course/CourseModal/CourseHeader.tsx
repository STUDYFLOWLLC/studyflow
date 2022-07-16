import classNames from 'classnames'
import DeleteCourse from 'components/Dashbar/Course/CourseModal/DeleteCourse'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'

interface Props {
  course: CourseOnTerm
  setSelectedCourse: (course: CourseOnTerm | null) => void
}

export default function CourseHeader({ course, setSelectedCourse }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl">
        <div className="mx-2">
          <div
            className={classNames(
              course.Color,
              ' ring-offset-1 w-3 h-3 min-w-full min-h-full rounded-full',
            )}
          />
        </div>
        <h3 className="m-0 p-0 truncate">
          {course.Nickname || course.FK_Course.Code} |{' '}
          <span className="text-info opacity-80 text-sm">
            {course.FK_Course.Title}, {course.FK_Course.Code}
          </span>
        </h3>
      </div>
      <DeleteCourse course={course} setSelectedCourse={setSelectedCourse} />
    </div>
  )
}
