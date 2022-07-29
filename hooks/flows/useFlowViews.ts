/* eslint-disable no-underscore-dangle */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'

interface Ret {
  flowViews: number
  flowViewsLoading: boolean
  flowViewsError: any
  mutateFlowViews: KeyedMutator<any>
}

export default function useFlowViews(flowId: string): Ret {
  const query = gql`
    query Query($where: FlowViewWhereInput) {
      aggregateFlowView(where: $where) {
        _count {
          FlowViewID
        }
      }
    }
  `

  const variables = {
    where: {
      FK_FlowID: {
        equals: flowId,
      },
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (data?.mutate) {
    return {
      flowViews: data.newViews,
      flowViewsLoading: false,
      flowViewsError: null,
      mutateFlowViews: mutate,
    }
  }

  if (data?.aggregateFlowView?._count?.FlowViewID !== undefined) {
    return {
      flowViews: data.aggregateFlowView._count.FlowViewID,
      flowViewsLoading: false,
      flowViewsError: null,
      mutateFlowViews: mutate,
    }
  }

  return {
    flowViews: 0,
    flowViewsLoading: true,
    flowViewsError: error,
    mutateFlowViews: mutate,
  }
}
