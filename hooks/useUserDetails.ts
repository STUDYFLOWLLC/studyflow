import { TermType } from '@prisma/client'
import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { FlowVisibility } from 'types/Flow'
import { SetupSteps } from 'types/SetupSteps'

export interface SmallTerm {
  TermID: number
  TermName: string
  TermType: TermType
}

interface UserDetail {
  UserID: number
  CreatedTime: string
  SetupStep: SetupSteps
  SupabaseID: string
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
        equals: supabaseId || null,
      },
    },
  }

  const { data, error, mutate } = useSWR([query, variables], {
    revalidateOnMount: false,
    revalidateOnFocus: false,
  })

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

  return {
    userDetails: data,
    userDetailsLoading: !data && !error,
    userDetailsError: error,
    mutateUserDetails: mutate,
  }
}
