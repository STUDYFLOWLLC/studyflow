import { gql, request } from 'graphql-request'

export default async function setBasicProfile(
  SupabaseID: string,
  email: string,
) {
  const query = gql`
    mutation Mutation($data: UserCreateInput!) {
      createUser(data: $data) {
        UserID
        CreatedTime
        SetupStep
        SupabaseID
        Email
        Name
        Username
        DefaultVisibility
        FK_SchoolID
        FK_Terms {
          TermID
          TermType
          TermName
        }
        FK_Settings {
          SettingID
          HasSeenWelcomeMessage
          LastSeenWelcomeMessageAt
        }
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
