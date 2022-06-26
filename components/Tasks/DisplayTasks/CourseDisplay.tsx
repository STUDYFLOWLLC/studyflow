import { FolderIcon, InboxIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

interface Props {
  course?: {
    CourseOnTermID: number
    Color: string | undefined
    Nickname: string
    FK_Course: {
      Code: string | undefined
    }
  }
}

export default function DateDisplay({ course }: Props) {
  const bgToTextColor = (color: string) => {
    const colorOpacity = parseInt(
      color.substring(color.length - 3, color.length),
      10,
    )
    const textColor = color.substring(3, color.length - 4)
    return `text-${textColor}-${colorOpacity + 300}`
  }
  // console.log(course?.CourseOnTermID)
  console.log(course?.Color)
  // console.log(course?.Nickname)
  return (
    <div className="text-sm">
      {course?.CourseOnTermID === 0 && (
        <div className="flex">
          <InboxIcon className="w-4 mr-1" />
          <div className="text-sm">General</div>
        </div>
      )}
      {course?.Color && course?.CourseOnTermID !== 0 && (
        <div className={classNames(bgToTextColor(course.Color), 'flex')}>
          <FolderIcon className="w-4 mr-1" />
          <div>{course?.Nickname || course?.FK_Course.Code}</div>
        </div>
      )}
    </div>
  )
}
