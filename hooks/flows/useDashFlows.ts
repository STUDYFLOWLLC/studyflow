/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { FlowType, FlowVisibility } from 'types/Flow'
import { sortByLastOpened } from 'utils/flows/sortFlows'

export interface DashFlow {
  FlowID: string
  CreatedTime: string
  LastOpened: string
  Title: string
  UserEnteredDate: string
  Type: FlowType
  Visibility: FlowVisibility
  Trashed: boolean
  WasAutomated: boolean
  FK_CourseOnTerm?: {
    CourseOnTermID: number
    Nickname: string
    Color: string
    FK_Course: {
      Code: string
    }
  }
  FK_UserID?: number
}

interface Ret {
  dashFlows: DashFlow[]
  dashFlowsLoading: boolean
  dashFlowsError: any
  mutateDashFlows: KeyedMutator<any>
}

export default function useDashFlows(
  userId: number | undefined,
  isUpcoming?: boolean,
): Ret {
  const query = gql`
    query Flows(
      $where: FlowWhereInput
      $orderBy: [FlowOrderByWithRelationInput!]
    ) {
      flows(where: $where, orderBy: $orderBy) {
        FlowID
        Title
        CreatedTime
        LastOpened
        UserEnteredDate
        Type
        Visibility
        Trashed
        WasAutomated
        FK_CourseOnTerm {
          CourseOnTermID
          Nickname
          Color
          FK_Course {
            Code
          }
        }
        FK_UserID
      }
    }
  `

  const variables = {
    where: {
      OR: [
        {
          FK_UserID: {
            equals: userId,
          },
        },
        {
          FK_CourseOnTerm: {
            is: {
              FK_Term: {
                is: {
                  FK_UserID: {
                    equals: userId,
                  },
                },
              },
            },
          },
        },
      ],
    },
    orderBy: [
      {
        CreatedTime: 'asc',
      },
    ],
  }

  const { data, error, mutate } = useSWR(userId ? [query, variables] : null)

  if (data?.flows) {
    const flows = data?.flows.sort((flowA: DashFlow, flowB: DashFlow) =>
      sortByLastOpened(flowA, flowB),
    )

    return {
      dashFlows: !isUpcoming
        ? flows
        : flows.filter(
            (flow: DashFlow) =>
              flow.Type === FlowType.ASSESSMENT ||
              flow.Type === FlowType.ASSIGNMENT,
          ),
      dashFlowsLoading: false,
      dashFlowsError: null,
      mutateDashFlows: mutate,
    }
  }

  if (data?.mutate) {
    const flows = data?.mutatedFlows.sort((flowA: DashFlow, flowB: DashFlow) =>
      sortByLastOpened(flowA, flowB),
    )

    return {
      dashFlows: !isUpcoming
        ? flows
        : flows.filter(
            (flow: DashFlow) =>
              flow.Type === FlowType.ASSESSMENT ||
              flow.Type === FlowType.ASSIGNMENT,
          ),
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
