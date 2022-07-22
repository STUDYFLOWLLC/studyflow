import HideButton from 'components/Dashbar/HideButton'
import { Dispatch, SetStateAction, useState } from 'react'
import AutomationTutorial from './AutomationTutorial'

interface Props {
  showDashBar: boolean
  setShowDashBar: Dispatch<SetStateAction<boolean>>
}

export default function AutomationHeader({
  showDashBar,
  setShowDashBar,
}: Props) {
  const [tutorialOpen, setTutorialOpen] = useState(false)

  return (
    <div className="relative">
      <div className="border-b border-gray-200 px-2 py-4 flex items-center justify-between sm:px-4">
        <div className="min-w-0 flex items-center">
          {!showDashBar && (
            <HideButton direction="show" setShowDashBar={setShowDashBar} />
          )}
          <h1 className="ml-2 text-lg font-medium">Automation</h1>
        </div>
        <button
          type="button"
          className="alex-button-outline"
          onClick={() => setTutorialOpen(true)}
        >
          Tutorial
        </button>
        <AutomationTutorial isOpen={tutorialOpen} setIsOpen={setTutorialOpen} />
      </div>
    </div>
  )
}
