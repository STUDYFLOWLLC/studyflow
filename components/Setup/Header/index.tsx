import SetupHeaderText from 'components/Setup/Header/SetupHeaderText'
import SetupSteps from 'components/Setup/Header/SetupSteps'

interface Props {
  step: number
}

export default function SetupHeader({ step }: Props) {
  return (
    <div className="w-full flex items-center justify-center">
      <SetupHeaderText />
      <SetupSteps step={step} />
    </div>
  )
}
