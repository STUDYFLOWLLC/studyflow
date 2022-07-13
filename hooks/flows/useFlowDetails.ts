/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { FlowType, FlowVisibility } from 'types/Flow'

export interface FlowDetail {
  FlowID: string
  CreatedTime: string
  UserEnteredDate: string
  Type: FlowType
  Title: string
  Body: string
  Visibility: FlowVisibility
  FK_CourseOnTermID: number
  FK_CourseOnTerm: {
    Nickname: string
    Color: string
    FK_Course: {
      Code: string
    }
  }
}

interface Ret {
  flowDetails: FlowDetail
  flowDetailsLoading: boolean
  flowDetailsError: any
  mutateFlowDetails: KeyedMutator<any>
}

export default function useFlowDetails(FlowID: string | undefined): Ret {
  const query = gql`
    query FindFirstFlow($where: FlowWhereInput) {
      findFirstFlow(where: $where) {
        FlowID
        CreatedTime
        UserEnteredDate
        Type
        Title
        Body
        Visibility
        FK_CourseOnTermID
        FK_CourseOnTerm {
          Nickname
          Color
          FK_Course {
            Code
          }
        }
      }
    }
  `

  const variables = {
    where: {
      FlowID: {
        equals: FlowID || '',
      },
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (data?.mutate) {
    return {
      flowDetails: data.mutatedFlow,
      flowDetailsLoading: false,
      flowDetailsError: null,
      mutateFlowDetails: mutate,
    }
  }

  if (data?.findFirstFlow) {
    return {
      flowDetails: data.findFirstFlow,
      flowDetailsLoading: false,
      flowDetailsError: null,
      mutateFlowDetails: mutate,
    }
  }

  return {
    flowDetails: data,
    flowDetailsLoading: !error && !data,
    flowDetailsError: error,
    mutateFlowDetails: mutate,
  }
}
