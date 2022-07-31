import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'

interface Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

export default function AutomationTutorial({ isOpen, setIsOpen }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        {/* Full-screen scrollable container */}
        <div className="w-full fixed inset-0 h-4/5 my-auto flex items-center justify-center">
          {/* Container to center the panel */}
          <div className="w-full flex items-center h-full justify-center">
            {/* The actual dialog panel  */}
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
                  'prose w-full max-w-4xl h-full mx-4 md:mx-8 lg:mx-16 transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all',
                )}
              >
                <Dialog.Title as="h2" className="leading-6">
                  Welcome to Automation
                </Dialog.Title>
                <div className="mt-1">
                  <p>
                    Please select a tutorial below. No tutorial for your
                    note-taking combo? Request a tutorial.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
