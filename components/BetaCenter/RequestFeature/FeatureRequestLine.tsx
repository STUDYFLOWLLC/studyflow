/* eslint-disable react/destructuring-assignment */
import classNames from 'classnames'
import { FeatureRequest } from 'hooks/beta/useFeatureRequests'
import abbreviateDate from 'utils/abbreviateDate'

interface Props {
  featureRequest: FeatureRequest
  setModalOpen: (modalOpen: boolean) => void
  setCurrentRequest: (featureRequest: FeatureRequest) => void
}

export default function FeatureRequestLine({
  featureRequest,
  setModalOpen,
  setCurrentRequest,
}: Props) {
  return (
    <div
      className="max-h-80 overflow-auto border p-1 flex items-center justify-between cursor-pointer"
      onClick={() => {
        setCurrentRequest(featureRequest)
        setModalOpen(true)
      }}
      onKeyDown={() => {
        setCurrentRequest(featureRequest)
        setModalOpen(true)
      }}
    >
      <div className="">
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
      <span className="font-bold text-primary">See details</span>
    </div>
  )
}
