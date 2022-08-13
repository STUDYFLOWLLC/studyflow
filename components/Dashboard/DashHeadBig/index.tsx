import classNames from 'classnames'
import BetaNavbar, { BetaDisplays } from 'components/BetaCenter/BetaNavbar'
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
  betaView?: BetaDisplays
  setBetaView?: (betaView: BetaDisplays) => void
}

export default function index({
  showDashBar,
  setShowDashBar,
  pageDisplayed,
  setCreateFlowAs,
  disabled,
  taskView,
  setTaskView,
  betaView,
  setBetaView,
}: Props) {
  return (
    <div className="relative">
      <div className="border-b border-gray-200 px-2 py-4 flex items-center justify-between sm:px-4">
        <div className="flex items-center">
          {!showDashBar && (
            <HideButton direction="show" setShowDashBar={setShowDashBar} />
          )}
          {pageDisplayed !== 'Term' ? (
            <h1 className="ml-2 text-lg font-medium">{pageDisplayed}</h1>
          ) : (
            <div className="flex items-center">
              <TermSelector />
              <NotificationBell />
            </div>
          )}
          {taskView && setTaskView && (
            <div
              className={classNames(
                { 'left-16': showDashBar },
                { 'left-24': !showDashBar },
                'absolute bottom-0',
              )}
            >
              <TasksNavbar taskView={taskView} setTaskView={setTaskView} />
            </div>
          )}
          {betaView && setBetaView && (
            <BetaNavbar betaView={betaView} setBetaView={setBetaView} />
          )}
        </div>
        {!taskView && !betaView && (
          <div className="flex sm:mt-0 items-center">
            <CreateButton
              disabled={disabled}
              setCreateFlowAs={setCreateFlowAs}
            />
          </div>
        )}
      </div>
    </div>
  )
}
