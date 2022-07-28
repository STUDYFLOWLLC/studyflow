import { gql } from 'graphql-request'
import useSWR from 'swr'

export default function useGroupInvites(userId: number) {
  const query = gql`
    query Query($where: UserOnStudyGroupWhereInput) {
      userOnStudyGroups(where: $where) {
        UserOnStudyGroupID
        FK_StudyGroup {
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

  return {}
}
