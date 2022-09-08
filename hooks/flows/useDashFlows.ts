/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'graphql-request'
import { KeyedMutator } from 'swr'
import useSWRInfinite from 'swr/infinite'
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
  FK_Repetition?: {
    RepetitionID: string
  }
}

interface Ret {
  dashFlows: DashFlow[]
  dashFlowsLoading: boolean
  dashFlowsError: any
  mutateDashFlows: KeyedMutator<any>
  size: number
  setSize: (
    size: number | ((_size: number) => number),
  ) => Promise<any[] | undefined>
  isValidating: boolean
}

export default function useDashFlows(
  userId: number | undefined,
  groupBy?: 'All' | number | 'Trash',
  isUpcoming?: boolean,
  index = 0,
): Ret {
  const query = gql`
    query Flows(
      $where: FlowWhereInput
      $orderBy: [FlowOrderByWithRelationInput!]
      $take: Int
      $skip: Int
    ) {
      flows(where: $where, orderBy: $orderBy, take: $take, skip: $skip) {
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
        FK_Repetition {
          RepetitionID
        }
      }
    }
  `

  let variables: any = {}

  if (groupBy === 'All' || !groupBy) {
    variables = {
      where: {
        AND: [
          {
            DeletedTime: {
              equals: null,
            },
          },
          {
            FK_UserID: {
              equals: null,
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
          {
            Trashed: {
              equals: false,
            },
          },
        ],
      },
      orderBy: [
        {
          CreatedTime: 'desc',
        },
      ],
    }
  } else if (groupBy === 'Trash') {
    variables = {
      where: {
        AND: [
          {
            DeletedTime: {
              equals: null,
            },
          },
          {
            OR: [
              {
                FK_UserID: {
                  equals: userId,
                },
              },
            ],
          },
        ],
      },
      orderBy: [
        {
          CreatedTime: 'desc',
        },
      ],
    }
  } else {
    variables = {
      where: {
        AND: [
          {
            DeletedTime: {
              equals: null,
            },
          },
          {
            FK_CourseOnTermID: {
              equals: groupBy,
            },
          },
          {
            Trashed: {
              equals: false,
            },
          },
        ],
      },
      orderBy: [
        {
          CreatedTime: 'desc',
        },
      ],
    }
  }

  // A function to get the SWR key of each page,
  // its return value will be accepted by `fetcher`.
  // If `null` is returned, the request of that page won't start.
  const getKey = (
    pageIndex: number,
    previousPageData: { flows: DashFlow[] },
  ) => {
    const variablesLocal = structuredClone(variables)
    console.log('Page index: ', pageIndex)
    console.log('Previous Data', previousPageData)
    variablesLocal.take = 8
    variablesLocal.skip = pageIndex * 8
    console.log(variablesLocal.skip)
    console.log(variablesLocal)
    if (previousPageData && previousPageData.flows.length < 8) return null // reached the end
    return userId ? [query, variablesLocal] : null
  }

  const { data, error, mutate, size, setSize, isValidating } =
    useSWRInfinite(getKey)

  if (data?.[0]?.flows) {
    const joinedFlows = data.reduce((acc, cur) => acc.concat(cur.flows), [])
    const flows = joinedFlows.sort((flowA: DashFlow, flowB: DashFlow) =>
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
      size,
      setSize,
      isValidating,
    }
  }

  if (data?.[0]?.mutate) {
    const joinedFlows = data.reduce((acc, cur) => acc.concat(cur.flows), [])
    const flows = joinedFlows.mutatedFlows.sort(
      (flowA: DashFlow, flowB: DashFlow) => sortByLastOpened(flowA, flowB),
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
      size,
      setSize,
      isValidating,
    }
  }

  return {
    dashFlows: [] as DashFlow[],
    dashFlowsLoading: !data && !error,
    dashFlowsError: error,
    mutateDashFlows: mutate,
    size,
    setSize,
    isValidating,
  }
}
