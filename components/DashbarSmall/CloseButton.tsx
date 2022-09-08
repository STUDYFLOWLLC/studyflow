import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

interface Props {
  setSidebarOpen: (open: boolean) => void
}

export default function CloseButton({ setSidebarOpen }: Props) {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-in-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="absolute top-0 right-0 -mr-12 pt-2">
        <button
          type="button"
          className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => setSidebarOpen(false)}
        >
          <span className="sr-only">Close sidebar</span>
          <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </Transition.Child>
  )
}
