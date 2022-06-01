import useSWR from 'swr'
import { fetcherWithVariables } from './fetchers'

export default function useUserDetails(supabaseId: string | undefined) {
  const supabaseIdReal = supabaseId === undefined ? '' : supabaseId
  const variables = {
    where: {
      SupabaseID: {
        equals: supabaseIdReal,
      },
    },
    take: 1,
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
      variables,
    ],
    fetcherWithVariables,
  )

  if (data) {
    return {
      userDetails: data.users,
      isLoading: !error && !data,
      isError: error,
    }
  }

  return {
    userDetails: data,
    isLoading: !error && !data,
    isError: error,
  }
}
