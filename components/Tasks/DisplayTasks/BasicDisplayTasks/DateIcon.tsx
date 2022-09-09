import DateDropdown from 'components/dropdowns/DateDropdown'
import { useEffect, useState } from 'react'

interface Props {
  date: string
  changeDate: (newDate: Date | undefined) => void
}

export default function DateIcon({ date, changeDate }: Props) {
  const [forcedDate, setForcedDate] = useState<Date | undefined>(new Date(date))
  const [sendChange, setSendChange] = useState(false)
  const dateObj = new Date(date)

  useEffect(() => {
    if (date.slice(0, 16) !== forcedDate?.toISOString().slice(0, 16)) {
      changeDate(forcedDate)
    }
  }, [forcedDate])

  return (
    <div className="text-sm mr-2">
      {/* {date && (
        // <div
        //   className={classNames(
        //     { 'text-red-400': isOverdue },
        //     { 'text-amber-400': isToday(dateObj) },
        //     { 'text-blue-400': isTomorrow(dateObj) },
        //     {
        //       'text-gray-400':
        //         !isToday(dateObj) && !isTomorrow(dateObj) && !isOverdue,
        //     },
        //     'flex items-center',
        //   )}
        // >
        //   <CalendarIcon className="w-3.5 h-3.5 mr-1" />
        //   <p className="m-0 p-0 text-xs leading-4">{abbreviateDate(dateObj)}</p>
        // </div>
      )} */}
      <DateDropdown
        taskDueDateExact={dateObj}
        setTaskDueDateExact={setForcedDate}
        smallButton
      />
    </div>
  )
}
