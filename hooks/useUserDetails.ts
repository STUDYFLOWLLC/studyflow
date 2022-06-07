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
            query Query($where: UserWhereInput) {
              findFirstUser(where: $where) {
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
                  TermID
                }
              }
            }
          `,
          variables,
        ]
      : null,
  )

  if (data && data.findFirstUser === null) {
    return {
      userDetails: {
        profileCreated: false,
      },
      isLoading: !error && !data,
      isError: error,
      mutateUserDetails: mutate,
    }
  }

  if (data && data.findFirstUser) {
    return {
      userDetails: data.findFirstUser,
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
