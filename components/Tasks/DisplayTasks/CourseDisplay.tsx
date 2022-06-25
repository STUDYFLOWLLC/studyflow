import { FolderIcon, InboxIcon } from '@heroicons/react/outline'

interface Props {
  course: number
}

export default function DateDisplay({ course }: Props) {
  console.log(course)
  return (
    // Make the text the course color
    <div className="flex">
      {course !== 0 && (
        <>
          <FolderIcon className="w-5 mr-1" />
          <div>{course}</div>
        </>
      )}

      {course === 0 && (
        <>
          <InboxIcon className="w-5 mr-1" />
          <div>General</div>
        </>
      )}
    </div>
  )
}
