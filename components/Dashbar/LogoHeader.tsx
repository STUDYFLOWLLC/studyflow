import HideButton from 'components/Dashbar/HideButton'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  showHideButton: boolean
  setShowDashBar: Dispatch<SetStateAction<boolean>>
}
export default function LogoHeader({ showHideButton, setShowDashBar }: Props) {
  return (
    <div className="flex items-center justify-between flex-shrink-0 px-4">
      <div className="flex items-center flex-shrink-0">
        <img src="/logo.svg" className="w-auto h-8" alt="wave" />
        <p className="mx-2 font-semibold text-xl">Studyflow</p>
      </div>
      {showHideButton && <HideButton setShowDashBar={setShowDashBar} />}
    </div>
  )
}
