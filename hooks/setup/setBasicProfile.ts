import { gql, request } from 'graphql-request'

export default function setBasicProfile(SupabaseID: string, email: string) {
  const query = gql`
    mutation Mutation($data: UserCreateInput!) {
      createUser(data: $data) {
        UserID
      }
    }
  `

  const variables = {
    data: {
      SupabaseID: SupabaseID,
      Email: email,
    },
  }

  request('/api/graphql', query, variables)
}
