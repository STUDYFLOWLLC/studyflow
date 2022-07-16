import { Popover } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/solid'

interface Props {
  disabled?: boolean
}

export default function PlusButton({ disabled }: Props) {
  if (disabled) {
    return (
      <button
        type="button"
        disabled={disabled}
        className="text-gray-800 flex items-center p-1 rounded-md hover:border hover:shadow-sm focus:outline-none"
      >
        <PlusIcon className="w-5" />
      </button>
    )
  }
  return (
    <Popover.Button
      type="button"
      className="text-gray-800 flex items-center p-1 rounded-md border border-transparent hover:border-gray-300 hover:shadow-sm focus:outline-none"
    >
      <PlusIcon className="w-5" />
    </Popover.Button>
  )
}
