/* eslint-disable @typescript-eslint/no-explicit-any */

import { Flow } from '@prisma/client'
import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'

interface Ret {
  flowDetails: Flow
  flowDetailsLoading: boolean
  flowDetailsError: any
  mutateFlowDetails: KeyedMutator<any>
}

export default function useFlowDetails(FlowID: string | undefined): Ret {
  const query = gql`
    query FindFirstFlow($where: FlowWhereInput) {
      findFirstFlow(where: $where) {
        CreatedTime
        FlowID
        Type
        Title
        Body
        Visibility
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

  return {
    flowDetails: data,
    flowDetailsLoading: !error && !data,
    flowDetailsError: error,
    mutateFlowDetails: mutate,
  }
}
