import SetupSteps from 'components/Setup/Header/SetupSteps'

interface Props {
  step: number
}

export default function SetupHeader({ step }: Props) {
  return (
    <div className="w-full flex items-center mb-4 justify-center">
      <SetupSteps step={step} />
    </div>
  )
}
