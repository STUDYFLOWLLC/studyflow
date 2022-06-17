import { FlowType, Visibility } from '@prisma/client'
import { gql, request } from 'graphql-request'

export interface FlowRet {
  FlowID: string
  CreatedTime: string
  Type: FlowType
  Title: string
  Body: string
  Visibility: Visibility
}

export default async function setBasicProfile(
  FlowID: string,
): Promise<FlowRet> {
  const query = gql`
    query FindFirstFlow($where: FlowWhereInput) {
      findFirstFlow(where: $where) {
        FlowID
        CreatedTime
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
        equals: FlowID,
      },
    },
  }

  const data = await request(
    'http://localhost:3000/api/graphql',
    query,
    variables,
  )

  return data.findFirstFlow
}
