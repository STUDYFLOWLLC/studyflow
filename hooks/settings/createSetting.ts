import request, { gql } from 'graphql-request'

export default async function createSetting(userId: number, seen: boolean) {
  const mutation = gql`
    mutation Mutation($data: SettingCreateInput!) {
      createSetting(data: $data) {
        SettingID
      }
    }
  `

  const variables = {
    data: {
      HasSeenWelcomeMessage: seen,
      LastSeenWelcomeMessageAt: seen ? new Date() : null,
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
