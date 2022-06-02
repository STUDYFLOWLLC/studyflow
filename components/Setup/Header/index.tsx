import SetupHeaderText from 'components/Setup/Header/SetupHeaderText'
import SetupSteps from 'components/Setup/Header/SetupSteps'

export default function SetupHeader() {
  return (
    <div className="w-full flex items-center justify-center">
      <SetupHeaderText />
      <SetupSteps step={0} />
    </div>
  )
}
