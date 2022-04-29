import useSWR from 'swr'
import { fetcherWithVaribles } from './fetchers'

export default function useUserDetails(supabaseId: string) {
  const variables = {
    where: {
      SupabaseID: {
        equals: supabaseId
      }
    },
    take: 1
  }

  const { data, error } = useSWR(
    [
      `
        query ExampleQuery($where: UserWhereInput, $take: Int) {
          users(where: $where, take: $take) {
            Username
            ProfilePictureLink
            DefaultVisibility
          }
        }      
    `,
      variables
    ],
    fetcherWithVaribles
  )

  if (data) {
    return {
      userDetails: data.users[0],
      isLoading: !error && !data,
      isError: error
    }
  }

  return {
    userDetails: data,
    isLoading: !error && !data,
    isError: error
  }
}
