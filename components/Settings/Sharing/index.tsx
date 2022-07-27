import InputEmail from 'components/Settings/Profile/InputEmail'
import InputName from 'components/Settings/Profile/InputName'
import InputPFP from 'components/Settings/Profile/InputPFP'
import SettingsInfo from 'components/Settings/SettingsInfo'

interface Props {
  activeTab: string
}

export default function index({ activeTab }: Props) {
  if (activeTab !== 'Sharing') return null

  return (
    <div className="w-full mt-10 divide-y divide-gray-200">
      <SettingsInfo
        title="Sharing"
        description="Change who can see your flows and how you share them."
      />
      <div className="mt-6 w-full">
        <div className="divide-y divide-gray-200">
          <InputName />
          <InputPFP />
          <InputEmail />
        </div>
      </div>
    </div>
  )
}
