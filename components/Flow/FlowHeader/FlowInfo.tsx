/* eslint-disable no-underscore-dangle */
import { Menu, Transition } from '@headlessui/react'
import { InformationCircleIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'

interface Props {
  flowId: string
}

export default function DeleteFlow({ flowId }: Props) {
  const { theme } = useTheme()
  const { flowDetails } = useFlowDetails(flowId)

  const [mounted, setMounted] = useState(false)
  const [showDelete, setShowDelete] = useState(false)

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
          'flex items-center font-light mr-1.5 text-xl px-1.5 hover:shadow-sm  border border-transparent  rounded-md cursor-pointer',
        )}
      >
        <InformationCircleIcon className="h-6 w-6" />
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
                <div className="max-w-xl text-sm text-info">
                  <p>
                    <b>
                      Created:{' '}
                      {new Date(flowDetails.CreatedTime)
                        .toString()
                        .slice(0, 21)}
                    </b>
                  </p>
                  <p>
                    <b>
                      Last Opened:{' '}
                      {new Date(flowDetails.LastOpened).toString().slice(0, 21)}
                    </b>
                  </p>
                  <p>
                    <b>Views: {flowDetails?._count.FK_FlowView}</b>
                  </p>
                  <p>
                    <b>
                      Flashcard Stacks:{' '}
                      {flowDetails?._count.FK_FlashcardStacks || 0}
                    </b>
                  </p>
                  <p>
                    <b>Tasks: {flowDetails?._count.FK_Tasks}</b>
                  </p>
                  <p className="text-2xs text-center w-full">
                    <b>ID: {flowDetails?.FlowID}</b>
                  </p>
                </div>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
