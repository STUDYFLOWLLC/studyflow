import { gql, request } from 'graphql-request'

export default async function makeAutomation(
  userId: number | undefined,
  refreshToken: string,
) {
  if (!userId) return

  const mutation = gql`
    mutation Mutation($data: AutomationCreateInput!) {
      createAutomation(data: $data) {
        AutomationID
      }
    }
  `

  const variables = {
    data: {
      RefreshToken: refreshToken,
      FK_User: {
        connect: {
          UserID: userId,
        },
      },
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
