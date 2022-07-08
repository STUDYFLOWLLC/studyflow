/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { FlowType } from 'types/Flow'

interface DashFlow {
  FlowID: string
  Title: string
  UserEnteredDate: string
  Type: FlowType
  FK_CourseOnTerm: {
    Nickname: string
    Color: string
    FK_Course: {
      Code: string
    }
  }
}

// used in the dashboard for a loading skeleton
const FakeFlow: DashFlow = {
  FlowID: 'FAKE',
  Title: 'Loading...',
  UserEnteredDate: '',
  Type: FlowType.LECTURE,
  FK_CourseOnTerm: {
    Nickname: "I'm not real",
    Color: '#000000',
    FK_Course: {
      Code: 'Loading...',
    },
  },
}

interface Ret {
  dashFlows: DashFlow[]
  dashFlowsLoading: boolean
  dashFlowsError: any
  mutateDashFlows: KeyedMutator<any>
}

export default function useDashFlows(userId: number | undefined): Ret {
  const query = gql`
    query Flows($where: FlowWhereInput) {
      flows(where: $where) {
        FlowID
        Title
        UserEnteredDate
        Type
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
      FK_CourseOnTerm: {
        is: {
          FK_Term: {
            is: {
              FK_User: {
                is: {
                  UserID: {
                    equals: userId,
                  },
                },
              },
            },
          },
        },
      },
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (data?.flows) {
    return {
      dashFlows: data.flows,
      dashFlowsLoading: false,
      dashFlowsError: null,
      mutateDashFlows: mutate,
    }
  }

  if (data?.mutate) {
    return {
      dashFlows: data?.mutatedFlows,
      dashFlowsLoading: false,
      dashFlowsError: null,
      mutateDashFlows: mutate,
    }
  }

  return {
    dashFlows: [] as DashFlow[],
    dashFlowsLoading: !data && !error,
    dashFlowsError: error,
    mutateDashFlows: mutate,
  }
}
