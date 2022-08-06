/* eslint-disable no-unused-expressions, no-console */
import { Dialog, Transition } from '@headlessui/react'
// import { QuickAction } from 'components/CMDPalette/CMDEntry'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { ActionType, QuickAction } from 'types/CMDPalette'
import CMDRaw from './CMDRaw'

interface Props {
  include: ActionType[]
  open: boolean
  setOpen: (open: boolean) => void
}

export default function CMDPalette({ include, open, setOpen }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedAction, setSelectedAction] = useState<QuickAction | null>(null)

  useHotkeys(
    'cmd+k, ctrl+k',
    (e) => {
      e.preventDefault()
      setOpen(!open)
    },
    {
      enableOnTags: ['INPUT'],
    },
    [open],
  )

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
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
          <Dialog.Panel className="max-w-2xl mx-auto">
            <CMDRaw
              placeholder="Search for common actions, pages, flows, users, or schools."
              include={[
                ActionType.JUMPTO,
                ActionType.STUDENT,
                ActionType.SCHOOL,
                ActionType.FLOW,
              ]}
              query={query}
              setQuery={setQuery}
              selectedAction={selectedAction}
              setSelectedAction={setSelectedAction}
              open={open}
              setOpen={setOpen}
            />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
