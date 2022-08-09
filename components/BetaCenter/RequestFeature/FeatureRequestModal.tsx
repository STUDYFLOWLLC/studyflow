import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames'
import BugPlate from 'dinnerplate/BugPlate'
import { FeatureRequest } from 'hooks/beta/useFeatureRequests'
import { Fragment } from 'react'
import abbreviateDate from 'utils/abbreviateDate'

interface Props {
  featureRequest: FeatureRequest | null
  modalOpen: boolean
  setModalOpen: (modalOpen: boolean) => void
}

export default function BugReportModal({
  featureRequest,
  modalOpen,
  setModalOpen,
}: Props) {
  return (
    <Transition show={modalOpen} as={Fragment}>
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
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
          <Dialog.Panel className="bg-base-100 overflow-y-auto no-scrollbar max-w-4xl w-full h-full mx-auto prose relative rounded-md p-2 transition-all">
            {featureRequest ? (
              <div className="my-3">
                <div className="border-b pb-3">
                  <p className="p-0 m-0">
                    <span className="font-bold">
                      {featureRequest.Title || 'Untitled'}{' '}
                    </span>
                    <span className="text-info">
                      by {featureRequest.FK_User?.Name || 'Anonymous'}
                    </span>
                  </p>
                  <p
                    className={classNames(
                      { 'text-red-500': !featureRequest.ImplementedTime },
                      { 'text-green-500': featureRequest.ImplementedTime },
                      'p-0 m-0',
                    )}
                  >
                    {!featureRequest.ImplementedTime
                      ? `Not implemented. Created ${abbreviateDate(
                          new Date(featureRequest.CreatedTime),
                        )}`
                      : `Implemented ${abbreviateDate(
                          new Date(featureRequest.ImplementedTime),
                        )}`}
                  </p>
                </div>
                <BugPlate value={JSON.parse(featureRequest.Body)} readonly />
              </div>
            ) : (
              <p>No request found!</p>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}
