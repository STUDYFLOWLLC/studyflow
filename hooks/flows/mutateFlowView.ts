/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */

import request, { gql } from 'graphql-request'

export async function mutateViewFlow(flowId: string, userId?: number) {
  const mutation = gql`
    mutation Mutation($data: FlowViewCreateInput!) {
      createFlowView(data: $data) {
        FlowViewID
      }
    }
  `

  const variables: any = {
    data: {
      FK_Flow: {
        connect: {
          FlowID: flowId,
        },
      },
    },
  }

  if (userId) {
    variables.data.FK_User = {
      connect: {
        UserID: userId,
      },
    }
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
