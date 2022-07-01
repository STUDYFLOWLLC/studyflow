import { CalendarIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { isToday } from 'date-fns'
import abbreviateDate from 'utils/abbreviateDate'

interface Props {
  date: string
}

export default function DateIcon({ date }: Props) {
  const dateObj = new Date(date)

  return (
    // I kind of like it with this text color
    <div className="text-sm">
      {date && (
        <div
          className={classNames(
            { 'text-gray-400': isToday(dateObj) },
            'text-amber-400 flex',
          )}
        >
          <CalendarIcon className="w-4 mr-1" />
          <div>{abbreviateDate(dateObj)}</div>
        </div>
      )}
    </div>
  )
}
