import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'

interface Props {
  id: string
}

export default function FlowJump({ id }: Props) {
  const router = useRouter()

  return (
    <div
      className="flex items-center text-xs cursor-pointer text-primary border border-primary hover:border-transparent hover:bg-primary hover:text-white py-px px-1 rounded-md transition-all"
      onClick={() => router.push(`/dash#${id}`)}
      onKeyDown={() => router.push(`/dash#${id}`)}
    >
      <span className="mr-0.5">Jump</span>{' '}
      <ArrowTopRightOnSquareIcon className="w-3 h-3" />
    </div>
  )
}
