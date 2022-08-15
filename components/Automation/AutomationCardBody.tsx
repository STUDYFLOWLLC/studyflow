import { useUser } from '@supabase/supabase-auth-helpers/react'
import useAutomationDetails, {
  CourseOnTermAutomation,
} from 'hooks/automation/useAutomationDetails'
import useUserDetails from 'hooks/useUserDetails'
import { FlowType, FlowVisibility } from 'types/Flow'
import { RepetitionType } from 'types/Repetition'
import {
  changeCourseOnTermAutomationDefaultRepetitionType,
  changeCourseOnTermAutomationDefaultType,
  changeCourseOnTermAutomationDefaultVisibility,
} from 'utils/automation/automationHandlers'
import LogLine from './LogLine'
import RepetitionTypeChooser from './RepetitionTypeChooser'
import TypeChooser from './TypeChooser'
import VisibilityChooser from './VisibilityChooser'

interface Props {
  courseOnTermAutomation: CourseOnTermAutomation | undefined
}

export default function AutomationCardBody({ courseOnTermAutomation }: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { automationDetails, mutateAutomationDetails } = useAutomationDetails(
    userDetails?.UserID,
  )

  if (!courseOnTermAutomation) return <div />

  return (
    <div className="w-full flex flex-col items-center">
      <TypeChooser
        mutator={(newType: FlowType) =>
          changeCourseOnTermAutomationDefaultType(
            courseOnTermAutomation.CourseOnTermAutomationID,
            newType,
            automationDetails,
            mutateAutomationDetails,
          )
        }
        type={courseOnTermAutomation?.DefaultType}
        loading={false}
      />
      <VisibilityChooser
        mutator={(newVisibility: FlowVisibility) =>
          changeCourseOnTermAutomationDefaultVisibility(
            courseOnTermAutomation.CourseOnTermAutomationID,
            newVisibility,
            automationDetails,
            mutateAutomationDetails,
          )
        }
        visibility={
          courseOnTermAutomation?.DefaultVisibility ||
          userDetails?.DefaultVisibility
        }
        loading={false}
      />
      <RepetitionTypeChooser
        mutator={(newRepetitionType: RepetitionType) =>
          changeCourseOnTermAutomationDefaultRepetitionType(
            courseOnTermAutomation.CourseOnTermAutomationID,
            newRepetitionType,
            automationDetails,
            mutateAutomationDetails,
          )
        }
        repetitionType={courseOnTermAutomation?.DefaultRepetitionType}
        loading={false}
      />
      <div className="w-full prose max-h-48 overflow-auto">
        <p className="p-0 m-0 mb-2 text-sm font-medium">Log:</p>
        {courseOnTermAutomation?.AutomationLog?.length > 0 ? (
          courseOnTermAutomation?.AutomationLog.sort((logA, logB) =>
            logA.Time < logB.Time ? 1 : -1,
          ).map((log) => <LogLine key={log.AutomationLogID} log={log} />)
        ) : (
          <span>blank</span>
        )}
      </div>
    </div>
  )
}
