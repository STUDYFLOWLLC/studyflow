/* eslint-disable import/prefer-default-export */
import request, { gql } from 'graphql-request'

export async function mutateDeleteRepetition(repetitionId: string) {
  const mutation = gql`
    mutation Mutation(
      $data: RepetitionUpdateInput!
      $where: RepetitionWhereUniqueInput!
    ) {
      updateRepetition(data: $data, where: $where) {
        FK_FlowID
        DeletedTime
      }
    }
  `

  const variables = {
    data: {
      FK_Flow: {
        disconnect: true,
      },
      DeletedTime: {
        set: new Date().toISOString(),
      },
    },
    where: {
      RepetitionID: repetitionId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
