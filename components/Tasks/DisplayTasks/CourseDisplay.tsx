import { FolderIcon, InboxIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

interface Props {
  course: {
    CourseOnTermID: number
    Color: string
    Nickname: string
    FK_Course: {
      Code: string
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
  const color = bgToTextColor(course.Color)

  return (
    // Make the text the course color
    <div className="flex text-sm">
      {course.CourseOnTermID !== 0 && (
        <div className={classNames(color, 'flex')}>
          <FolderIcon className="w-4 mr-1" />
          <div>{course.Nickname || course.FK_Course.Code}</div>
        </div>
      )}

      {course.CourseOnTermID === 0 && (
        <div className="flex">
          <InboxIcon className="w-4 mr-1" />
          <div className="text-sm">General</div>
        </div>
      )}
    </div>
  )
}
