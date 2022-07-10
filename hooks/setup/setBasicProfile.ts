import { gql, request } from 'graphql-request'

export default async function setBasicProfile(
  SupabaseID: string,
  email: string,
) {
  const query = gql`
    mutation Mutation($data: UserCreateInput!) {
      createUser(data: $data) {
        UserID
      }
    }
  `

  const variables = {
    data: {
      SupabaseID,
      Email: email,
    },
  }

  const data = await request('/api/graphql', query, variables)
  return data
}
