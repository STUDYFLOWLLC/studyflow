/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import { DashFlow } from 'hooks/flows/useDashFlows'
import useSWR, { KeyedMutator } from 'swr'

interface Ret {
  upcoming: DashFlow[]
  upcomingLoading: boolean
  upcomingError: any
  mutateUpcoming: KeyedMutator<any>
}

export default function useUpcoming(userId: number): Ret {
  const query = gql`
    query Flows($where: FlowWhereInput) {
      flows(where: $where) {
        FlowID
        UserEnteredDate
        Title
        Type
        FK_CourseOnTerm {
          Color
          Nickname
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
              FK_UserID: {
                equals: userId,
              },
            },
          },
        },
      },
      AND: [
        {
          Type: {
            in: ['ASSESSMENT', 'ASSIGNMENT'],
          },
        },
      ],
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (data?.flows) {
    return {
      upcoming: data.flows,
      upcomingLoading: false,
      upcomingError: null,
      mutateUpcoming: mutate,
    }
  }

  if (data?.mutate) {
    return {
      upcoming: data?.mutatedUpcoming,
      upcomingLoading: false,
      upcomingError: null,
      mutateUpcoming: mutate,
    }
  }

  return {
    upcoming: [] as DashFlow[],
    upcomingLoading: !data && !error,
    upcomingError: error,
    mutateUpcoming: mutate,
  }
}
