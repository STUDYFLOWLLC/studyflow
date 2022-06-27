import { FolderIcon, InboxIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

interface Props {
  courseOnTerm?: {
    CourseOnTermID: number
    Color: string | undefined
    Nickname: string
    FK_Course: {
      Code: string | undefined
    }
  }
}

export default function DateDisplay({ courseOnTerm }: Props) {
  const bgToTextColor = (color: string) => {
    const colorOpacity = parseInt(
      color.substring(color.length - 3, color.length),
      10,
    )
    const textColor = color.substring(3, color.length - 4)
    return `text-${textColor}-${colorOpacity + 300}`
  }

  return (
    <div className="text-sm">
      {courseOnTerm?.CourseOnTermID === 0 && (
        <div className="flex">
          <InboxIcon className="w-4 mr-1" />
          <div className="text-sm">General</div>
        </div>
      )}
      {courseOnTerm?.Color && courseOnTerm?.CourseOnTermID !== 0 && (
        <div className={classNames(bgToTextColor(courseOnTerm.Color), 'flex')}>
          <FolderIcon className="w-4 mr-1" />
          <div>{courseOnTerm?.Nickname || courseOnTerm?.FK_Course.Code}</div>
        </div>
      )}
    </div>
  )
}
