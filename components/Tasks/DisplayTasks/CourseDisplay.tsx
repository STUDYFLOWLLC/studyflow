import { AcademicCapIcon } from '@heroicons/react/outline'

export default function DateDisplay() {
  return (
    // Make the text the course color
    <div className="flex">
      <AcademicCapIcon className="w-5 mr-1" />
      <div>Course</div>
    </div>
  )
}
