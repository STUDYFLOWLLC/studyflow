import { gql } from 'graphql-request'
import useSWR, { mutate } from 'swr'

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
    supabaseId
      ? [
          gql`
            query UserDetails($where: UserWhereInput, $take: Int) {
              users(where: $where, take: $take) {
                Username
                ProfilePictureLink
                DefaultVisibility
                SupabaseID
                SetupComplete
                CreatedTime
                Email
                Name
                FK_Terms {
                  TermType
                  TermName
                }
              }
            }
          `,
          variables,
        ]
      : null,
  )

  if (data && data.users[0] === undefined) {
    return {
      userDetails: {
        profileCreated: false,
      },
      isLoading: !error && !data,
      isError: error,
      mutateUserDetails: mutate,
    }
  }

  if (data) {
    return {
      userDetails: data.users[0],
      isLoading: !error && !data,
      isError: error,
      mutateUserDetails: mutate,
    }
  }

  return {
    userDetails: data,
    isLoading: !error && !data,
    isError: error,
    mutateUserDetails: mutate,
  }
}
