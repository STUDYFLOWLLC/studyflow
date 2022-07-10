import { gql } from 'graphql-request'
import useSWR from 'swr'
import { SetupSteps } from 'types/SetupSteps'

export default function useUserDetails(supabaseId: string | undefined | null) {
  const variables = {
    where: {
      SupabaseID: {
        equals: supabaseId || null,
      },
    },
  }

  const { data, error, mutate } = useSWR(
    [
      gql`
        query Query($where: UserWhereInput) {
          findFirstUser(where: $where) {
            UserID
            Username
            ProfilePictureLink
            DefaultVisibility
            SupabaseID
            SetupStep
            CreatedTime
            Email
            Name
            FK_SchoolID
            FK_Terms {
              TermType
              TermName
              TermID
            }
            FK_Settings {
              HasSeenWelcomeMessage
              LastSeenWelcomeMessageAt
            }
          }
        }
      `,
      variables,
    ],
    {
      revalidateOnMount: false,
      revalidateOnFocus: false,
    },
  )

  console.log(error)

  if (data?.mutate) {
    return {
      userDetails: data,
      userDetailsLoading: false,
      userDetailsError: null,
      mutateUserDetails: mutate,
    }
  }

  if (data && data.findFirstUser) {
    return {
      userDetails: data.findFirstUser,
      userDetailsLoading: !data && !error,
      userDetailsError: error,
      mutateUserDetails: mutate,
    }
  }

  if (data && data.findFirstUser === null) {
    return {
      userDetails: {
        SetupStep: SetupSteps.PROFILE,
      },
      userDetailsLoading: !data && !error,
      userDetailsError: error,
      mutateUserDetails: mutate,
    }
  }

  return {
    userDetails: data,
    userDetailsLoading: !data && !error,
    userDetailsError: error,
    mutateUserDetails: mutate,
  }
}
