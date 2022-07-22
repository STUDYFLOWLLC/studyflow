import { CourseOnTermAutomation } from 'hooks/automation/useAutomationDetails'

interface Props {
  automation: CourseOnTermAutomation
}

export default function AutomationCardBody({ automation }: Props) {
  return (
    <div className="w-full flex flex-col items-center">AutomationCardBody</div>
  )
}
