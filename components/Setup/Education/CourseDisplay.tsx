import classnames from 'classnames'
import { CourseHit } from 'components/Forms/Course/CourseSearch'
import EnterCourseNickname from 'components/Setup/Education/EnterCourseNickname'
import { Dispatch, SetStateAction } from 'react'
import shorten from 'utils/shorten'

interface Props {
  color: string
  course: CourseHit
  nickname: string
  setNickname: Dispatch<SetStateAction<string>>
}

export default function CourseDisplay({
  color,
  course,
  nickname,
  setNickname,
}: Props) {
  return (
    <div className="w-full sm:ml-4 flex flex-col">
      <div className="flex items-center">
        <div
          key={color}
          className={classnames(
            color,
            ' ring-offset-1 w-3 h-3 m-2 rounded-full',
          )}
        />
        {shorten(nickname || course.Title, 37)}
      </div>
      <div className="sm:px-2 flex w-full justify-between">
        <p>{course.Code}</p>
        <p>{course.Term}</p>
      </div>
      <div className="sm:hidden flex w-full justify-between">
        <p>{shorten(course.FK_Professor?.Name, 10)}</p>
        <p>{course.FK_Professor?.Email}</p>
      </div>
      <div className="hidden px-2 sm:flex w-full justify-between">
        <p>{shorten(course.FK_Professor?.Name, 20)}</p>
        <p>{course.FK_Professor?.Email}</p>
      </div>
      <EnterCourseNickname nickname={nickname} setNickname={setNickname} />
    </div>
  )
}
