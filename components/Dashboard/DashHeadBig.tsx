import HideButton from 'components/Dashbar/HideButton'
import CreateButton from 'components/Dashboard/CreateButton'
import TasksNavbar from 'components/Dashboard/TasksNavbar'
import { Dispatch, SetStateAction } from 'react'
import { FlowType } from 'types/Flow'

interface Props {
  showDashBar: boolean
  setShowDashBar: Dispatch<SetStateAction<boolean>>
  pageDisplayed: string
  flowModalOpen: boolean
  setFlowModalOpen: (value: boolean) => void
  setCreateFlowAs: (value: FlowType | null) => void
  disabled?: boolean
  taskView?: string
  setTaskView?: (taskView: string) => void
}

export default function DashHeadBig({
  showDashBar,
  setShowDashBar,
  pageDisplayed,
  flowModalOpen,
  setFlowModalOpen,
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
          <h1 className="ml-2 text-lg font-medium">{pageDisplayed}</h1>
          {taskView && setTaskView && (
            <TasksNavbar taskView={taskView} setTaskView={setTaskView} />
          )}
        </div>
        <div className="flex sm:mt-0 items-center">
          <CreateButton
            disabled={disabled}
            flowModalOpen={flowModalOpen}
            setFlowModalOpen={setFlowModalOpen}
            setCreateFlowAs={setCreateFlowAs}
          />
        </div>
      </div>
    </div>
  )
}
