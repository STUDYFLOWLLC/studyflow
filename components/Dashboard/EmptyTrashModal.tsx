import { Dialog, Transition } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import ButtonSpinner from 'components/spinners/ButtonSpinner'
import useDashFlows from 'hooks/flows/useDashFlows'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { emptyTrash } from 'utils/user/userHandlers'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function EmptyTrashModal({ open, setOpen }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { dashFlows, mutateDashFlows } = useDashFlows(userDetails?.UserID)

  const [mounted, setMounted] = useState(false)
  const [deleting, setDeleting] = useState(false)

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
              'w-full prose mx-auto max-w-2xl py-2 px-4 transform overflow-hidden rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 transition-all',
            )}
          >
            <div className="pl-2 pr-4 text-sm flex items-center prose mx-auto my-24">
              <div className="px-2 py-2">
                <h1 className="font-medium">Empty Trash?</h1>
                <h3 className="text-info font-normal">
                  This action is irreversible.
                </h3>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                    onClick={async () => {
                      await emptyTrash(
                        userDetails?.UserID,
                        dashFlows,
                        mutateDashFlows,
                        setDeleting,
                      )
                      setOpen(false)
                    }}
                    onKeyDown={async () => {
                      await emptyTrash(
                        userDetails?.UserID,
                        dashFlows,
                        mutateDashFlows,
                        setDeleting,
                      )
                      setOpen(false)
                    }}
                  >
                    Bye-bye
                    <ButtonSpinner show={deleting} />
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
