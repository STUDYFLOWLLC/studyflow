import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { FlowVisibility } from 'types/Flow'
import { TermType } from 'types/School'
import { SetupSteps } from 'types/SetupSteps'

export interface SmallTerm {
  TermID: number
  TermName: string
  TermType: TermType
}

export interface UserDetail {
  UserID: number
  CreatedTime: string
  SetupStep: SetupSteps
  SupabaseID: string
  HasRequestedAutomationAccess: boolean
  HasAutomationAccess: boolean
  Email: string
  Name?: string
  Username?: string
  ProfilePictureLink?: string
  DefaultVisibility?: FlowVisibility
  FK_SchoolID?: number
  FK_Terms?: SmallTerm[]
  FK_Settings?: {
    SettingID: number
    HasSeenWelcomeMessage?: boolean
    LastSeenWelcomeMessageAt?: string
  }
}

interface Ret {
  userDetails: UserDetail | null
  userDetailsLoading: boolean
  userDetailsError: any
  mutateUserDetails: KeyedMutator<any>
}

export default function useUserDetails(
  supabaseId: string | undefined | null,
  shouldRevalidateOnMount?: boolean,
): Ret {
  const query = gql`
    query Query($where: UserWhereInput) {
      findFirstUser(where: $where) {
        UserID
        CreatedTime
        SetupStep
        SupabaseID
        Email
        Username
        Name
        ProfilePictureLink
        DefaultVisibility
        HasRequestedAutomationAccess
        HasAutomationAccess
        FK_SchoolID
        FK_Terms {
          TermType
          TermName
          TermID
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
    where: {
      SupabaseID: {
        equals: supabaseId,
      },
    },
  }

  const { data, error, mutate } = useSWR(
    supabaseId ? [query, variables] : null,
    {
      revalidateOnMount: true,
    },
  )

  if (data?.mutate) {
    return {
      userDetails: { ...data, mutate: false },
      userDetailsLoading: false,
      userDetailsError: null,
      mutateUserDetails: mutate,
    }
  }

  if (data && data.findFirstUser !== null) {
    return {
      userDetails: data.findFirstUser,
      userDetailsLoading: !data && !error,
      userDetailsError: error,
      mutateUserDetails: mutate,
    }
  }

  if (data && data.findFirstUser === null) {
    return {
      userDetails: null,
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
