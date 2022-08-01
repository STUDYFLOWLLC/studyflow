import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import MainFlashcard from '../MainFlashcard'

interface Props {
  flashcardStackId: string
  editing: string
  setEditing: (editing: string) => void
  reviewing: boolean
  setReviewing: (reviewing: boolean) => void
}

export default function FlashcardReviewModal({
  flashcardStackId,
  editing,
  setEditing,
  reviewing,
  setReviewing,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (!editing) return null

  return (
    <Transition show={!!editing || reviewing} as={Fragment}>
      <Dialog
        open={!!editing || reviewing}
        onClose={() => {
          setEditing('')
          setReviewing(false)
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
              'overflow-y-auto no-scrollbar max-w-2xl w-full h-4/5 mx-auto prose relative rounded-md p-2 transition-all',
            )}
          >
            <MainFlashcard
              flashcardStackId={editing}
              reviewing={reviewing}
              setReviewing={setReviewing}
              setEditing={setEditing}
            />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
