import HideButton from 'components/Dashbar/HideButton'
import CreateButton from 'components/Dashboard/CreateButton'
import TasksNavbar from 'components/Dashboard/TasksNavbar'
import NotificationBell from 'components/Social/Notifications/NotificationBell'
import { Dispatch, SetStateAction } from 'react'
import { FlowType } from 'types/Flow'
import TermSelector from './TermSelector'

interface Props {
  showDashBar: boolean
  setShowDashBar: Dispatch<SetStateAction<boolean>>
  pageDisplayed: string
  setCreateFlowAs: (value: FlowType | null) => void
  disabled?: boolean
  taskView?: string
  setTaskView?: (taskView: string) => void
}

export default function index({
  showDashBar,
  setShowDashBar,
  pageDisplayed,
  setCreateFlowAs,
  disabled,
  taskView,
  setTaskView,
}: Props) {
  return (
    <div className="relative">
      <div className="border-b border-gray-200 px-2 py-4 flex items-center justify-between sm:px-4">
        <div className="min-w-0 flex items-center">
          {!showDashBar && (
            <HideButton direction="show" setShowDashBar={setShowDashBar} />
          )}
          {pageDisplayed !== 'Term' ? (
            <h1 className="ml-2 text-lg font-medium">{pageDisplayed}</h1>
          ) : (
            <TermSelector />
          )}
          {taskView && setTaskView && (
            <TasksNavbar taskView={taskView} setTaskView={setTaskView} />
          )}
          <NotificationBell />
        </div>
        <div className="flex sm:mt-0 items-center">
          <CreateButton disabled={disabled} setCreateFlowAs={setCreateFlowAs} />
        </div>
      </div>
    </div>
  )
}
