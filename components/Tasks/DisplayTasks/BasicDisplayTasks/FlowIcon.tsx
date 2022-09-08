import { BookOpenIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

interface Props {
  title?: string
  flowId?: string
}

export default function FlowIcon({ title, flowId }: Props) {
  const router = useRouter()

  if (!title) return null

  return (
    <div
      className="text-sm flex items-center text-primary"
      onClick={() => {
        if (flowId) router.push(`/dash#${flowId}`)
      }}
      onKeyDown={() => {
        if (flowId) router.push(`/dash#${flowId}`)
      }}
    >
      <BookOpenIcon className="ml-2 h-4 w-4 mr-1" />
      {title}
    </div>
  )
}
