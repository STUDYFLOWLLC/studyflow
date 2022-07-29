/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { PublicUser } from 'types/Social'

interface StudyGroup {
  StudyGroupID: number
  Name: string
  FK_User: PublicUser
}

export interface GroupInvite {
  UserOnStudyGroupID: number
  FK_StudyGroup: StudyGroup
}

interface Ret {
  groupInvites: GroupInvite[] | null
  groupInvitesLoading: boolean
  groupInvitesError: any
  mutateGroupInvites: KeyedMutator<any>
}

export default function useGroupInvites(userId: number | undefined): Ret {
  const query = gql`
    query Query($where: UserOnStudyGroupWhereInput) {
      userOnStudyGroups(where: $where) {
        UserOnStudyGroupID
        FK_StudyGroup {
          StudyGroupID
          Name
          FK_User {
            UserID
            Name
            ProfilePictureLink
            Username
            FK_School {
              Name
            }
          }
        }
      }
    }
  `

  const variables = {
    where: {
      AND: [
        {
          FK_UserID: {
            equals: userId,
          },
        },
        {
          AcceptedTime: {
            equals: null,
          },
        },
        {
          RejectedTime: null,
        },
        {
          CanceledTime: null,
        },
        {
          RemovedTime: null,
        },
      ],
    },
  }

  const { data, error, mutate } = useSWR(userId ? [query, variables] : null)

  if (data?.userOnStudyGroups?.length !== undefined) {
    return {
      groupInvites: data.userOnStudyGroups,
      groupInvitesLoading: false,
      groupInvitesError: null,
      mutateGroupInvites: mutate,
    }
  }

  return {
    groupInvites: null,
    groupInvitesLoading: !data && !error,
    groupInvitesError: error,
    mutateGroupInvites: mutate,
  }
}
