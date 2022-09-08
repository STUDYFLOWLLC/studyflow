import { CalendarIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { isBefore, isToday, isTomorrow, startOfToday } from 'date-fns'
import abbreviateDate from 'utils/abbreviateDate'

interface Props {
  date: string
}

export default function DateIcon({ date }: Props) {
  const dateObj = new Date(date)

  return (
    <div className="text-sm mr-2">
      {date && (
        <div
          className={classNames(
            { 'text-red-400': isBefore(dateObj, startOfToday()) },
            { 'text-amber-400': isToday(dateObj) },
            { 'text-blue-400': isTomorrow(dateObj) },
            { 'text-gray-400': !isToday(dateObj) && !isTomorrow(dateObj) },
            'flex items-center',
          )}
        >
          <CalendarIcon className="w-3.5 h-3.5 mr-1" />
          <p className="m-0 p-0 text-xs leading-4">{abbreviateDate(dateObj)}</p>
        </div>
      )}
    </div>
  )
}
