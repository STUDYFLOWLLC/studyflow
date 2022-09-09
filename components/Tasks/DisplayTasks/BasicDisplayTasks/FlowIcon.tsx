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
      className="text-xs flex items-center text-primary"
      onClick={() => {
        if (flowId) router.push(`/dash#${flowId}`)
      }}
      onKeyDown={() => {
        if (flowId) router.push(`/dash#${flowId}`)
      }}
    >
      <BookOpenIcon className="ml-2 h-3.5 w-3.5 mr-1" />
      <p className="w-20 truncate p-0 m-0">{title}</p>
    </div>
  )
}
