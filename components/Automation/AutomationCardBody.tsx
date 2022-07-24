import { CourseOnTermAutomation } from 'hooks/automation/useAutomationDetails'
import LogLine from './LogLine'

interface Props {
  automation: CourseOnTermAutomation | undefined
}

export default function AutomationCardBody({ automation }: Props) {
  if (!automation) return <div />

  return (
    <div className="w-full max-h-48 overflow-auto flex flex-col items-center">
      {automation?.AutomationLog?.length > 0 ? (
        automation?.AutomationLog.sort((logA, logB) =>
          logA.Time < logB.Time ? 1 : -1,
        ).map((log) => <LogLine key={log.AutomationLogID} log={log} />)
      ) : (
        <span>blank</span>
      )}
    </div>
  )
}
