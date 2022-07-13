import {
  mutateFlowCourseOnTerm,
  mutateFlowTitle,
  mutateFlowType,
  mutateFlowVisibility,
  mutateUserEnteredDate,
} from 'hooks/flows/mutateFlow'
import { DashFlow } from 'hooks/flows/useDashFlows'
import { FlowDetail } from 'hooks/flows/useFlowDetails'
import { KeyedMutator } from 'swr'
import { FlowType, FlowVisibility } from 'types/Flow'

export function changeVisibility(
  flowId: string,
  newVisibility: FlowVisibility,
  flowDetails: FlowDetail,
  mutateFlowDetails: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
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
  flowDetails: FlowDetail,
  mutateFlowDetails: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
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
  flowDetails: FlowDetail,
  mutateFlowDetails: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
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
  flowDetails: FlowDetail,
  mutateFlowDetails: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
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
  flowDetails: FlowDetail,
  mutateFlowDetails: KeyedMutator<any>,
  dashFlows: DashFlow[],
  mutateDashFlows: KeyedMutator<any>,
) {
  // change in backend
  mutateFlowCourseOnTerm(flowDetails.FlowID, newId)

  // mutate locally
  mutateFlowDetails(
    {
      mutatedFlow: {
        ...flowDetails,
        FK_CourseOnTermID: newId,
        FK_CourseOnTerm: {
          Nickname: newNickname,
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
