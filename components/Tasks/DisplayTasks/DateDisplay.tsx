import { CalendarIcon } from '@heroicons/react/outline'

export default function DateDisplay() {
  return (
    // I kind of like it with this text color
    <div className="flex text-secondary">
      <CalendarIcon className="w-4 mr-1" />
      <div>Due Date</div>
    </div>
  )
}
