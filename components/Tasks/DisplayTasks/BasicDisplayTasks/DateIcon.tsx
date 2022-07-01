import { CalendarIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { isBefore, isToday, isTomorrow, startOfToday } from 'date-fns'
import abbreviateDate from 'utils/abbreviateDate'

interface Props {
  date: string
}

export default function DateIcon({ date }: Props) {
  const dateObj = new Date(date)

  return (
    <div className="text-sm">
      {date && (
        <div
          className={classNames(
            { 'text-red-400': isBefore(dateObj, startOfToday()) },
            { 'text-amber-400': isToday(dateObj) },
            { 'text-blue-400': isTomorrow(dateObj) },
            { 'text-gray-400': !isToday(dateObj) && !isTomorrow(dateObj) },
            'flex',
          )}
        >
          <CalendarIcon className="w-4 mr-1" />
          <div>{abbreviateDate(dateObj)}</div>
        </div>
      )}
    </div>
  )
}
