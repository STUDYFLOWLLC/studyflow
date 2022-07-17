import classnames from 'classnames'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'

interface Props {
  courseOnTerm: CourseOnTerm
}

export default function CourseDisplay({ courseOnTerm }: Props) {
  return (
    <div className="w-full sm:ml-4 flex flex-col mb-3">
      <div className="flex items-center">
        <div
          key={courseOnTerm.Color}
          className={classnames(
            courseOnTerm.Color,
            ' ring-offset-1 w-3 h-3 m-2 rounded-full',
          )}
        />
        {courseOnTerm.Nickname || courseOnTerm.FK_Course?.Title}
      </div>
      <div className="sm:px-2 flex w-full justify-between">
        <p className="truncate">{courseOnTerm.FK_Course?.Code}</p>
        <p className="truncate">{courseOnTerm.FK_Course?.Term}</p>
      </div>
      <div className="sm:hidden flex w-full justify-between">
        <p className="truncate">{courseOnTerm.FK_Course?.FK_Professor?.Name}</p>
        <p className="truncate">
          {courseOnTerm.FK_Course?.FK_Professor?.Email}
        </p>
      </div>
      <div className="hidden px-2 sm:flex w-full justify-between">
        <p className="truncate">{courseOnTerm.FK_Course?.FK_Professor?.Name}</p>
        <p className="truncate">
          {courseOnTerm.FK_Course?.FK_Professor?.Email}
        </p>
      </div>
    </div>
  )
}
