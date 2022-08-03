import HideButton from 'components/Dashbar/HideButton'
import logo from 'images/logo.svg'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  showHideButton?: boolean
  setShowDashBar?: Dispatch<SetStateAction<boolean>>
  social?: boolean
}
export default function LogoHeader({
  showHideButton,
  setShowDashBar,
  social,
}: Props) {
  return (
    <div className="flex items-center justify-between flex-shrink-0 px-4">
      <div className="flex items-center flex-shrink-0">
        <div className="w-9 h-9">
          <Image src={logo} alt="wave" />
        </div>
        <p className="mx-2 font-semibold text-xl">Studyflow</p>
      </div>
      {showHideButton && setShowDashBar && !social && (
        <HideButton direction="hide" setShowDashBar={setShowDashBar} />
      )}
    </div>
  )
}
