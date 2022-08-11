import { BookOpenIcon } from '@heroicons/react/outline'

interface Props {
  title?: string
}

export default function FlowIcon({ title }: Props) {
  if (!title) return null

  return (
    <div className="text-sm flex items-center text-primary">
      <BookOpenIcon className="w-4 h-4 ml-1" />
      <div>{title}</div>
    </div>
  )
}
