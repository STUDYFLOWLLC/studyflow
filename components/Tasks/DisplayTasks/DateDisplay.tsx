import { CalendarIcon } from '@heroicons/react/outline'

interface Props {
  date: string
}

export default function DateDisplay({ date }: Props) {
  const dateObj = new Date(date)
  // console.log(dateObj)
  console.log(!date)
  return (
    // I kind of like it with this text color
    <div className="text-sm">
      {date && (
        <div className="text-secondary flex">
          <CalendarIcon className="w-4 mr-1" />
          <div>{date}</div>
        </div>
      )}
    </div>
  )
}
