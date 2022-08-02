/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { FlowType, FlowVisibility } from 'types/Flow'

export interface AutomationLog {
  AutomationLogID: number
  Time: string
  Success: boolean
  Message: string
  FK_CourseOnTermAutomationID: number
}

export interface CourseOnTermAutomation {
  CourseOnTermAutomationID: number
  FolderID: string
  DefaultType: FlowType
  DefaultVisibility?: FlowVisibility
  AutomationLog: AutomationLog[]
  FK_AutomationID: number
  FK_CourseOnTermID: number
}

export interface Automation {
  AutomationID: number
  RefreshToken: string
  CourseOnTermAutomations: CourseOnTermAutomation[]
}

interface Ret {
  automationDetails: Automation | undefined
  automationDetailsLoading: boolean
  automationDetailsError: any
  mutateAutomationDetails: KeyedMutator<any>
}

export default function useAutomationDetails(userId: number | undefined): Ret {
  const query = gql`
    query ExampleQuery($where: AutomationWhereUniqueInput!) {
      automation(where: $where) {
        AutomationID
        RefreshToken
        CourseOnTermAutomations {
          CourseOnTermAutomationID
          FolderID
          DefaultType
          DefaultVisibility
          FK_AutomationID
          FK_CourseOnTermID
          AutomationLog {
            AutomationLogID
            Time
            Success
            Message
            FK_CourseOnTermAutomationID
          }
        }
        FK_UserID
      }
    }
  `

  const variables = {
    where: {
      FK_UserID: userId,
    },
  }

  const { data, error, mutate } = useSWR(userId ? [query, variables] : null)

  if (data?.automation) {
    return {
      automationDetails: data.automation,
      automationDetailsLoading: false,
      automationDetailsError: null,
      mutateAutomationDetails: mutate,
    }
  }

  return {
    automationDetails: undefined,
    automationDetailsLoading: !data && !error,
    automationDetailsError: error,
    mutateAutomationDetails: mutate,
  }
}
