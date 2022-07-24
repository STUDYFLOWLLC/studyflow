import { CourseOnTermAutomation } from 'hooks/automation/useAutomationDetails'
import LogLine from './LogLine'

interface Props {
  automation: CourseOnTermAutomation | undefined
}

export default function AutomationCardBody({ automation }: Props) {
  if (!automation) return <div />

  return (
    <div className="w-full flex flex-col items-center">
      {automation?.AutomationLog?.length > 0 ? (
        automation?.AutomationLog.map((log) => (
          <LogLine key={log.AutomationLogID} log={log} />
        ))
      ) : (
        <span>blank</span>
      )}
    </div>
  )
}
