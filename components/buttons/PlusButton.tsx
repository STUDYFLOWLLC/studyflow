import { Popover } from '@headlessui/react'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/solid'

export default function PlusButton() {
  return (
    <Popover.Button
      type="button"
      className="text-gray-800 flex items-center border px-2 py-1 mr-1 rounded-md border-transparent bg-primary focus:outline-none"
    >
      <PlusIcon className="w-5 mr-0.5" />
      <ChevronDownIcon className="w-3" />
    </Popover.Button>
  )
}
