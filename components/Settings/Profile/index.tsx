import InputEmail from 'components/Settings/Profile/InputEmail'
import InputName from 'components/Settings/Profile/InputName'
import InputPFP from 'components/Settings/Profile/InputPFP'
import InputUsername from 'components/Settings/Profile/InputUsername'
import SettingsInfo from 'components/Settings/SettingsInfo'
import { useState } from 'react'

interface Props {
  activeTab: string
}

export default function index({ activeTab }: Props) {
  if (activeTab !== 'Profile') return null

  const [checkingUnique, setCheckingUnique] = useState(false)
  const [uniqueCheck, setUniqueCheck] = useState(false)

  return (
    <div className="w-full mt-10 divide-y divide-gray-200">
      <SettingsInfo
        title="Profile"
        description="Edit your basic information."
      />
      <div className="mt-6 w-full">
        <div className="divide-y divide-gray-200">
          <InputName />
          <InputUsername
            checkingUnique={checkingUnique}
            setCheckingUnique={setCheckingUnique}
            uniqueCheck={uniqueCheck}
            setUniqueCheck={setUniqueCheck}
          />
          <InputPFP />
          <InputEmail />
        </div>
      </div>
    </div>
  )
}
