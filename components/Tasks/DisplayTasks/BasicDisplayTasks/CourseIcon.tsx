import { FolderIcon, InboxIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import bgToTextColor from 'utils/bgToTextColor'

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

export default function CourseIcon({ courseOnTerm }: Props) {
  return (
    <div className="text-sm">
      {courseOnTerm?.CourseOnTermID === 0 && (
        <div className="flex items-center">
          <InboxIcon className="w-3.5 h-3.5 mr-1" />
          <div className="text-xs">General</div>
        </div>
      )}
      {courseOnTerm?.Color && courseOnTerm?.CourseOnTermID !== 0 && (
        <div
          className={classNames(
            bgToTextColor(courseOnTerm.Color),
            'flex items-center text-xs',
          )}
        >
          <FolderIcon className="w-3.5 h-3.5 mr-1" />
          <div>{courseOnTerm?.Nickname || courseOnTerm?.FK_Course?.Code}</div>
        </div>
      )}
    </div>
  )
}
