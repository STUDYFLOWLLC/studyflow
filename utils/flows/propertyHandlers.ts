import {
  mutateDeleteFlow,
  mutateFlowCourseOnTerm,
  mutateFlowTitle,
  mutateFlowType,
  mutateFlowVisibility,
  mutateTrashFLow,
  mutateUserEnteredDate,
} from 'hooks/flows/mutateFlow'
import { DashFlow } from 'hooks/flows/useDashFlows'
import { FlowDetail } from 'hooks/flows/useFlowDetails'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { editTaskCourse } from 'hooks/tasks/mutateTask'
import { UserDetail } from 'hooks/useUserDetails'
import { KeyedMutator } from 'swr'
import { FlowType, FlowVisibility } from 'types/Flow'

export function changeVisibility(
  flowId: string,
  newVisibility: FlowVisibility,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
  if (!flowDetails) return

  // change in backend
  mutateFlowVisibility(flowId, newVisibility)

  // mutate locally
  mutateFlowDetails(
    {
      mutatedFlow: { ...flowDetails, Visibility: newVisibility },
      mutate: true,
    },
    { revalidate: false },
  )
  mutateDashFlows(
    {
      mutatedFlows: dashFlows.map((flow) =>
        flow.FlowID === flowId ? { ...flow, Visibility: newVisibility } : flow,
      ),
      mutate: true,
    },
    { revalidate: false },
  )
}

export function changeTitle(
  flowId: string,
  newTitle: string,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
  if (!flowDetails) return

  // change in backend
  mutateFlowTitle(flowId, newTitle)

  // mutate locally
  mutateFlowDetails(
    {
      mutatedFlow: {
        ...flowDetails,
        Title: newTitle,
      },
      mutate: true,
    },
    {
      revalidate: false,
    },
  )
  mutateDashFlows(
    {
      mutatedFlows: dashFlows.map((flow) =>
        flow.FlowID === flowId ? { ...flow, Title: newTitle } : flow,
      ),
      mutate: true,
    },
    { revalidate: false },
  )
}

export function changeType(
  flowId: string,
  newType: FlowType,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
  if (!flowDetails) return

  // change in backend
  mutateFlowType(flowId, newType)

  // mutate locally
  mutateFlowDetails(
    { mutatedFlow: { ...flowDetails, Type: newType }, mutate: true },
    { revalidate: false },
  )
  mutateDashFlows(
    {
      mutatedFlows: dashFlows.map((flow) =>
        flow.FlowID === flowId ? { ...flow, Type: newType } : flow,
      ),
      mutate: true,
    },
    { revalidate: false },
  )
}

export function changeDate(
  flowId: string,
  newDate: Date,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
  if (!flowDetails) return

  const dateAsString = newDate.toISOString()

  // change in backend
  mutateUserEnteredDate(flowId, dateAsString)

  // mutate locally
  mutateFlowDetails(
    {
      mutatedFlow: {
        ...flowDetails,
        UserEnteredDate: dateAsString,
      },
      mutate: true,
    },
    { revalidate: false },
  )
  mutateDashFlows(
    {
      mutatedFlows: dashFlows.map((flow) =>
        flow.FlowID === flowId
          ? { ...flow, UserEnteredDate: dateAsString }
          : flow,
      ),
      mutate: true,
    },
    { revalidate: false },
  )
}

export function changeCourse(
  flowId: string,
  newId: number,
  newNickname: string,
  newCode: string,
  newColor: string,
  flowDetails: FlowDetail | null,
  mutateFlowDetails: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
  if (!flowDetails) return

  // change in backend
  mutateFlowCourseOnTerm(flowDetails.FlowID, newId)
  // we also have to change the task course in the backend
  for (let i = 0; i < flowDetails.FK_Tasks.length; i += 1) {
    editTaskCourse(flowDetails.FK_Tasks[i].TaskID, newId)
  }

  // mutate locally
  mutateFlowDetails(
    {
      mutatedFlow: {
        ...flowDetails,
        FK_CourseOnTermID: newId,
        FK_CourseOnTerm: {
          Nickname: newNickname,
          Color: newColor,
          FK_Course: {
            Code: newCode,
          },
        },
      },
      mutate: true,
    },
    {
      revalidate: false,
    },
  )
  mutateDashFlows(
    {
      mutatedFlows: dashFlows.map((flow) =>
        flow.FlowID === flowId
          ? {
              ...flow,
              FK_CourseOnTerm: {
                Color: newColor,
                Nickname: newNickname,
                FK_Course: {
                  Code: newCode,
                },
              },
            }
          : flow,
      ),
      mutate: true,
    },
    { revalidate: false },
  )
}

export async function trashFlow(
  flowId: string,
  userDetails: UserDetail | null,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
  closeFlowModal: () => void,
) {
  if (!flowId || !userDetails) return

  // mutate in backend
  mutateTrashFLow(flowId, userDetails?.UserID, true)

  // mutate locally
  mutateDashFlows(
    [
      {
        flows: dashFlows.filter((flow) => flow.FlowID !== flowId),
        mutate: true,
      },
    ],
    { revalidate: true },
  )

  closeFlowModal()
}

export async function restoreFlow(
  flowId: string,
  userDetails: UserDetail | null,
  newCourse: CourseOnTerm,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
  closeFlowModal: () => void,
) {
  if (!flowId || !userDetails) return

  // mutate in backend
  mutateTrashFLow(flowId, userDetails.UserID, false)
  mutateFlowCourseOnTerm(flowId, newCourse.CourseOnTermID)

  // mutate locally
  mutateDashFlows(
    {
      mutatedFlows: dashFlows.map((flow) => {
        if (flow.FlowID === flowId) {
          return {
            ...flow,
            Trashed: false,
            FK_CourseOnTerm: newCourse,
            FK_UserID: undefined,
          }
        }
        return flow
      }),
      mutate: true,
    },
    { revalidate: false },
  )

  closeFlowModal()
}

export async function deleteFlow(
  flowId: string,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
  closeFlowModal: () => void,
) {
  if (!flowId) return

  // mutate in backend
  mutateDeleteFlow(flowId)

  // mutate locally
  mutateDashFlows(
    {
      mutatedFlows: dashFlows.filter((flow) => flow.FlowID !== flowId),
      mutate: true,
    },
    { revalidate: false },
  )

  closeFlowModal()
}
