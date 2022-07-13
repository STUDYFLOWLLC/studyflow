import { useUser } from '@supabase/supabase-auth-helpers/react'
import useDashFlows from 'hooks/flows/useDashFlows'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { FlowType } from 'types/Flow'
import {
  changeCourse,
  changeDate,
  changeTitle,
  changeType,
} from 'utils/flows/propertyHandlers'
import FlowCourseChooser from './FlowCourseChooser'
import FlowDateChooser from './FlowDateChooser'
import FlowTitle from './FlowTitle'
import FlowTypeChooser from './FlowTypeChooser'

interface Props {
  flowId: string
  saving: boolean
}

export default function index({ flowId, saving }: Props) {
  const { flowDetails, flowDetailsLoading, mutateFlowDetails } =
    useFlowDetails(flowId)
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { dashFlows, dashFlowsLoading, mutateDashFlows } = useDashFlows(
    userDetails?.UserID,
  )
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0].TermID,
  )

  // mutators that are passed into flow properties. we need these because I don't
  // feel like passing in 1 millions props and making hooks inside the lower components
  const titleMutator = (newTitle: string) =>
    changeTitle(
      flowId,
      newTitle,
      flowDetails,
      mutateFlowDetails,
      dashFlows,
      mutateDashFlows,
    )

  const typeMutator = (newType: FlowType) =>
    changeType(
      flowId,
      newType,
      flowDetails,
      mutateFlowDetails,
      dashFlows,
      mutateDashFlows,
    )

  const dateMutator = (newDate: Date) =>
    changeDate(
      flowId,
      newDate,
      flowDetails,
      mutateFlowDetails,
      dashFlows,
      mutateDashFlows,
    )

  const courseMutator = (
    newId: number,
    newNickname: string,
    newCode: string,
    newColor: string,
  ) =>
    changeCourse(
      flowId,
      newId,
      newNickname,
      newCode,
      newColor,
      flowDetails,
      mutateFlowDetails,
      dashFlows,
      mutateDashFlows,
    )

  return (
    <div className="prose border-b pb-4 mb-4 w-full max-w-3xl mx-auto">
      <div className="flex items-baseline">
        <FlowTitle
          title={flowDetails?.Title}
          mutator={titleMutator}
          loading={flowDetailsLoading}
        />
        <FlowTypeChooser
          loading={flowDetailsLoading}
          type={flowDetails?.Type}
          mutator={typeMutator}
        />
      </div>
      <div className="border-l-2 ml-1 mt-4 mb-2">
        <FlowDateChooser
          loading={flowDetailsLoading}
          userEnteredDate={
            flowDetails?.UserEnteredDate || new Date().toISOString()
          }
          setUserEnteredDate={dateMutator}
        />
        <FlowCourseChooser
          title={
            flowDetailsLoading
              ? 'Course'
              : flowDetails?.FK_CourseOnTerm.Nickname ||
                flowDetails?.FK_CourseOnTerm.FK_Course.Code
          }
          coursesOnTermSmall={
            coursesOnTerm
              ? coursesOnTerm.map((course) => ({
                  CourseOnTermID: course.CourseOnTermID,
                  Nickname: course.Nickname,
                  Code: course.FK_Course.Code,
                  Color: course.Color,
                  mutator: courseMutator,
                }))
              : []
          }
          loading={flowDetailsLoading}
        />
      </div>
    </div>
  )
}
