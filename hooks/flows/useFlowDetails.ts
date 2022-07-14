/* eslint-disable @typescript-eslint/no-explicit-any */

import { TaskType } from '@prisma/client'
import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { FlowType, FlowVisibility } from 'types/Flow'

export interface SmallCourse {
  CourseOnTermID: number
  Nickname: string
  Color: string
  FK_Course: {
    Code: string
  }
}

export interface FlowTask {
  TaskID: string
  Title: string
  Completed: boolean
  Description?: string
  DueDate?: string
  Type?: TaskType
}

export interface FlowDetail {
  FlowID: string
  CreatedTime: string
  LastOpened: string
  UserEnteredDate: string
  Type: FlowType
  Title: string
  Body: string
  Visibility: FlowVisibility
  FK_CourseOnTerm: SmallCourse
  FK_Tasks: FlowTask[]
  _count: {
    FK_FlowView: number
    FK_FlashcardStacks: number
    FK_Tasks: number
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
        LastOpened
        UserEnteredDate
        Type
        Title
        Body
        Visibility
        FK_CourseOnTerm {
          CourseOnTermID
          Nickname
          Color
          FK_Course {
            Code
          }
        }
        FK_Tasks {
          TaskID
          Title
          Completed
          Description
          DueDate
          Type
        }
        _count {
          FK_FlowView
          FK_FlashCardStacks
          FK_Tasks
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
