import { ChevronDownIcon, PlusIcon } from '@heroicons/react/solid'

export default function FlowDropdown() {
  return (
    <button
      type="button"
      className="flex items-center border px-2 py-1 mr-1 rounded-md border-transparent bg-primary/50 hover:bg-primary/70"
    >
      <PlusIcon className="w-5 mr-0.5" />
      <ChevronDownIcon className="w-3" />
    </button>
  )
}
