import HideButton from 'components/Dashbar/HideButton'
import TasksDropdown from 'components/Dashboard/TasksDropdown'
import { Dispatch, SetStateAction } from 'react'
import FlowDropdown from './FlowDropdown'

interface Props {
  showDashBar: boolean
  setShowDashBar: Dispatch<SetStateAction<boolean>>
  pageDisplayed: string
  viewing?: string
  setViewing?: (viewing: string) => void
}

export default function DashHeadBig({
  showDashBar,
  setShowDashBar,
  pageDisplayed,
  viewing,
  setViewing,
}: Props) {
  return (
    <div className="border-b border-gray-200 px-2 py-4 sm:flex sm:items-center sm:justify-between sm:px-4">
      <div className="min-w-0 flex items-center">
        {!showDashBar && (
          <HideButton direction="show" setShowDashBar={setShowDashBar} />
        )}
        <h1 className="text-lg font-medium sm:truncate">{pageDisplayed}</h1>
      </div>
      <div className="flex sm:mt-0 sm:ml-4 items-center">
        {viewing && setViewing ? (
          <TasksDropdown viewing={viewing} setViewing={setViewing} />
        ) : (
          <TasksDropdown />
        )}
        <FlowDropdown />
      </div>
    </div>
  )
}
