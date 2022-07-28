/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { PublicUser } from 'types/Social'

export interface UserOnStudyGroup {
  UserOnStudyGroupID: number
  SendDate: string
  AcceptTime: string
  RemoveTime: string
  FK_User: PublicUser
}

export interface StudyGroup {
  StudyGroupID: number
  Name: string
  FK_UserOnStudyGroup: UserOnStudyGroup[]
}

interface Ret {
  privateGroupDetails: StudyGroup | null
  privateGroupDetailsLoading: boolean
  privateGroupDetailsError: any
  mutatePrivateGroupDetails: KeyedMutator<any>
}

export default function usePrivateGroupDetails(
  userId: number | undefined,
): Ret {
  const query = gql`
    query User(
      $where: UserWhereUniqueInput!
      $fkStudyGroupsWhere2: StudyGroupWhereInput
      $fkUserOnStudyGroupWhere2: UserOnStudyGroupWhereInput
    ) {
      user(where: $where) {
        FK_StudyGroups(where: $fkStudyGroupsWhere2) {
          StudyGroupID
          Name
          FK_UserOnStudyGroup(where: $fkUserOnStudyGroupWhere2) {
            UserOnStudyGroupID
            SendTime
            AcceptedTime
            FK_User {
              UserID
              ProfilePictureLink
              Name
              Username
              FK_School {
                Name
              }
            }
          }
        }
      }
    }
  `

  const variables = {
    where: {
      UserID: userId,
    },
    fkStudyGroupsWhere2: {
      Name: {
        equals: 'Private',
      },
    },
    fkUserOnStudyGroupWhere2: {
      AND: [
        {
          CanceledTime: {
            equals: null,
          },
        },
        {
          RejectedTime: {
            equals: null,
          },
        },
        {
          RemovedTime: {
            equals: null,
          },
        },
      ],
    },
  }

  const { data, error, mutate } = useSWR(userId ? [query, variables] : null, {
    revalidateOnMount: false,
  })

  if (data?.mutate) {
    return {
      privateGroupDetails: data.newGroup,
      privateGroupDetailsLoading: false,
      privateGroupDetailsError: null,
      mutatePrivateGroupDetails: mutate,
    }
  }

  if (data?.user?.FK_StudyGroups.length > 0) {
    return {
      privateGroupDetails: data.user.FK_StudyGroups[0],
      privateGroupDetailsLoading: false,
      privateGroupDetailsError: null,
      mutatePrivateGroupDetails: mutate,
    }
  }

  return {
    privateGroupDetails: null,
    privateGroupDetailsLoading: false,
    privateGroupDetailsError: error,
    mutatePrivateGroupDetails: mutate,
  }
}
