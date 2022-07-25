import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { format } from 'date-fns'
import { AutomationLog } from 'hooks/automation/useAutomationDetails'

interface Props {
  log: AutomationLog
}

export default function LogLine({ log }: Props) {
  return (
    <div className="w-full grid grid-container grid-cols-12 items-center text-sm">
      <div className="col-span-1 border-r">
        {log.Success ? (
          <CheckIcon className="mx-auto w-4 h-5 text-green-500" />
        ) : (
          <XIcon className="mx-autow-4 h-5 text-red-500" />
        )}
      </div>

      <div className="col-span-4 flex justify-center">
        {format(new Date(log.Time), 'MM/dd/yy HH:mm')}
      </div>
      <div className="col-span-7 truncate px-2 text-center border-l">
        {log.Message}
      </div>
    </div>
  )
}
