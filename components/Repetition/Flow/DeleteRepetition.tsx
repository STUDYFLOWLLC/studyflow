import { Menu, Transition } from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import { deleteRepetition } from 'hooks/repetition/repetitionHandlers'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'

interface Props {
  flowId: string
  repetitionId: string
}

export default function DeleteStack({ flowId, repetitionId }: Props) {
  const { theme } = useTheme()
  const { flowDetails, mutateFlowDetails } = useFlowDetails(flowId)
  const { repetitionDetails } = useRepetitionDetails(repetitionId)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className={classNames(
          {
            'text-stone-500 hover:bg-gray-50 hover:border-gray-300':
              theme === 'light',
          },
          {
            'text-gray-400 hover:bg-slate-600 hover:border-slate-400':
              theme === 'dark',
          },
          'flex items-center font-light m-0 text-xl px-1.5 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
        )}
      >
        <TrashIcon className="h-5 w-5" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            { ' bg-white ring-black ring-1 ring-opacity-5': theme === 'light' },
            { 'bg-slate-700': theme === 'dark' },
            'absolute w-72 z-40 -left-64 origin-top-left rounded-md shadow-lg focus:outline-none',
          )}
        >
          <Menu.Item disabled>
            {({ active }: ActiveProps) => (
              <div className="pl-2 pr-4 py-2 text-sm flex items-center">
                <div className="px-2 py-2">
                  <h3 className="text-lg m-0 p-0 font-medium">
                    Delete repetition?
                  </h3>
                  <div className="mt-2 max-w-xl text-sm text-info">
                    <p>
                      This action is irreverisible. All flashcards and tasks in
                      this repetition will be wiped off the face of the... our
                      servers.
                    </p>
                  </div>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                      onClick={() =>
                        deleteRepetition(
                          repetitionDetails,
                          flowDetails,
                          mutateFlowDetails,
                        )
                      }
                      onKeyDown={() =>
                        deleteRepetition(
                          repetitionDetails,
                          flowDetails,
                          mutateFlowDetails,
                        )
                      }
                    >
                      Delete repetition
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
