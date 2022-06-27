import { HandIcon, PlusIcon } from '@heroicons/react/outline'
import classNames from 'classnames'

interface Props {
  opacity: string
}

export default function FlowAid({ opacity }: Props) {
  return (
    <div
      className={classNames(
        opacity,
        'absolute left-0 top-1 cursor-move transition-opacity transition-duration-750',
      )}
    >
      <span className="w-8 h-5 flex text-gray-500">
        <PlusIcon className="w-4 h-5 cursor-pointer" />
        <HandIcon className="w-4 h-5 cursor-move" />
      </span>
    </div>
  )
}
