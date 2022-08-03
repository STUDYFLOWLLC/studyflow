import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import CreateRepetition from './CreateRepetition'

interface Props {
  flowId: string
  currentRepetition: string | null
  setCurrentRepetition: (currentRepetition: string | null) => void
}

export default function FlashcardReviewModal({
  flowId,
  currentRepetition,
  setCurrentRepetition,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Transition show={currentRepetition !== null} as={Fragment}>
      <Dialog
        open={currentRepetition !== null}
        onClose={() => {
          setCurrentRepetition(null)
        }}
        className="fixed inset-0 overflow-y-auto p-4 sm:p-6 md:p-20 z-[90]"
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
          <Dialog.Overlay className="-z-50 fixed inset-0 bg-gray-500 bg-opacity-25 transition-all" />
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
              { 'bg-white': theme === 'light' },
              { 'bg-base-100': theme === 'dark' },
              'overflow-y-auto no-scrollbar max-w-3xl w-full h-full mx-auto prose relative rounded-md p-2 transition-all',
            )}
          >
            <CreateRepetition
              flowId={flowId}
              currentRepetition={currentRepetition}
              setCurrentRepetition={setCurrentRepetition}
            />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
