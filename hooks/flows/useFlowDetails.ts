/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { FlowType, FlowVisibility } from 'types/Flow'
import { TaskType } from 'types/Task'

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
  Trashed: boolean
  FK_CourseOnTerm: SmallCourse
  FK_Tasks: FlowTask[]
  FK_FlashcardStacks: {
    FlashcardStackID: string
    Title: string
    Description: string
    FK_Flashcards: {
      FlashcardID: string
    }[]
  }[]
  FK_Repetition: {
    RepetitionID: string
  }
  _count: {
    FK_FlowView: number
    FK_FlashcardStacks: number
    FK_Tasks: number
  }
}

interface Ret {
  flowDetails: FlowDetail | null
  flowDetailsLoading: boolean
  flowDetailsError: any
  mutateFlowDetails: KeyedMutator<any>
}

export default function useFlowDetails(flowId: string | undefined): Ret {
  const query = gql`
    query Flow(
      $where: FlowWhereUniqueInput!
      $fkFlashcardStacksWhere2: FlashcardStackWhereInput
      $fkTasksWhere2: TaskWhereInput
    ) {
      flow(where: $where) {
        FlowID
        CreatedTime
        LastOpened
        UserEnteredDate
        Type
        Title
        Body
        Visibility
        Trashed
        FK_CourseOnTerm {
          CourseOnTermID
          Nickname
          Color
          FK_Course {
            Code
          }
        }
        FK_Tasks(where: $fkTasksWhere2) {
          TaskID
          Title
          Completed
          Description
          DueDate
          Type
        }
        FK_FlashcardStacks(where: $fkFlashcardStacksWhere2) {
          FlashcardStackID
          Title
          Description
          FK_Flashcards {
            FlashcardID
          }
        }
        FK_Repetition {
          RepetitionID
        }
        _count {
          FK_FlowView
          FK_FlashcardStacks
          FK_Tasks
        }
      }
    }
  `

  const variables = {
    where: {
      FlowID: flowId,
    },
    fkFlashcardStacksWhere2: {
      AND: [
        {
          FK_FlowID: {
            equals: flowId,
          },
        },
        {
          FK_Repetition: {
            isNot: {
              RepetitionID: {
                equals: '1',
              },
            },
          },
        },
        {
          DeletedTime: {
            equals: null,
          },
        },
      ],
    },
    fkTasksWhere2: {
      FK_RepetitionID: {
        equals: null,
      },
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  console.log(data)
  console.log(error)

  if (data?.mutate) {
    return {
      flowDetails: data.mutatedFlow,
      flowDetailsLoading: false,
      flowDetailsError: null,
      mutateFlowDetails: mutate,
    }
  }

  if (data?.flow) {
    return {
      flowDetails: data.flow,
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
