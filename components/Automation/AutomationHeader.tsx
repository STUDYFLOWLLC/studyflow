import HideButton from 'components/Dashbar/HideButton'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  showDashBar: boolean
  setShowDashBar: Dispatch<SetStateAction<boolean>>
}

export default function AutomationHeader({
  showDashBar,
  setShowDashBar,
}: Props) {
  return (
    <div className="relative">
      <div className="border-b border-gray-200 px-2 py-4 flex items-center justify-between sm:px-4">
        <div className="min-w-0 flex items-center">
          {!showDashBar && (
            <HideButton direction="show" setShowDashBar={setShowDashBar} />
          )}
          <h1 className="ml-2 text-lg font-medium">Automation</h1>
        </div>
        <a
          href="https://docs.studyflow.ai/docs/category/automation-advanced"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="alex-button-outline">
            Tutorial
          </button>
        </a>
      </div>
    </div>
  )
}
