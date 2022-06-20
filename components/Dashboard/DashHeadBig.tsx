import HideButton from 'components/Dashbar/HideButton'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  showDashBar: boolean
  setShowDashBar: Dispatch<SetStateAction<boolean>>
}

export default function DashHeadBig({ showDashBar, setShowDashBar }: Props) {
  return (
    <div className="border-b border-gray-200 px-2 py-4 sm:flex sm:items-center sm:justify-between sm:px-4">
      <div className="min-w-0 flex items-center">
        {!showDashBar && (
          <HideButton direction="show" setShowDashBar={setShowDashBar} />
        )}
        <h1 className="text-lg font-medium sm:truncate">Home</h1>
      </div>
      <div className="mt-4 flex sm:mt-0 sm:ml-4 items-center">
        <button
          type="button"
          className="btn btn-primary btn-sm sm:order-1 sm:ml-3"
        >
          Create
        </button>
      </div>
    </div>
  )
}
