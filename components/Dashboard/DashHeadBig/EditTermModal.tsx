import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { SmallTerm } from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import InputTermName from './InputTermName'
import TermTypeChooser from './TermTypeChooser'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  term: SmallTerm | undefined
}

export default function EditTermModal({ open, setOpen, term }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20 z-30"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel
            className={classNames(
              { 'bg-base-100': theme === 'light' },
              { 'bg-base-200': theme === 'dark' },
              'w-full prose mx-auto max-w-lg p-4 transform overflow-hidden rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 transition-all',
            )}
          >
            <h3 className="border-b pb-2">Edit term {term?.TermName}</h3>
            <InputTermName term={term} />
            <div className="mb-8">
              <div className="text-lg text-info font-medium">Type</div>
              <div className="mx-auto w-24 mt-1 flex text-md">
                <TermTypeChooser term={term} />
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
