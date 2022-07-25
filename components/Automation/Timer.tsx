import MainSpinner from 'components/spinners/MainSpinner'
import useAutomationTimer from 'hooks/automation/useAutomationTimer'
import Countdown from 'react-countdown'
import { SpinnerSizes } from 'types/Loading'

interface RendererProps {
  minutes: number
  seconds: number
  completed: boolean
}

export default function Timer() {
  const { automationTimer } = useAutomationTimer()

  const renderer = ({ minutes, seconds, completed }: RendererProps) => {
    if (completed) {
      // Render a completed state
      return (
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center">
            <p className="m-0 mr-4 p-0 text-xl md:text-3xl">
              Running automations
            </p>
            <MainSpinner size={SpinnerSizes.medium} />
          </div>
          <p className="text-md m-0 mt-2 p-0">Please refresh your page. </p>
        </div>
      )
    }
    // Render a countdown
    const minutesReal = minutes < 10 ? `0${minutes}` : minutes
    const secondsReal = seconds < 10 ? `0${seconds}` : seconds
    return (
      <div className="w-full flex flex-col items-center">
        <p className="m-0 mr-4 p-0 text-xl md:text-3xl">
          {minutesReal}:{secondsReal}
        </p>
        <p className="text-md m-0 mt-2 p-0">a watched pot never boils.</p>
      </div>
    )
  }

  return (
    <div className="mt-6 mb-0 w-full text-center  prose max-w-none mx-auto">
      <Countdown date={automationTimer} renderer={renderer} />,
    </div>
  )
}
