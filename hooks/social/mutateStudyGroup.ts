/* eslint-disable import/prefer-default-export */
import { gql, request } from 'graphql-request'

export async function mutateCreatePrivateGroup(userId: number) {
  const mutation = gql`
    mutation Mutation($data: StudyGroupCreateInput!) {
      createStudyGroup(data: $data) {
        StudyGroupID
      }
    }
  `

  const variables = {
    data: {
      Name: 'Private',
      FK_User: {
        connect: {
          UserID: userId,
        },
      },
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateAddUserOnStudyGroup(
  userId: number,
  studyGroupId: number,
) {
  const mutation = gql`
    mutation CreateUserOnStudyGroup($data: UserOnStudyGroupCreateInput!) {
      createUserOnStudyGroup(data: $data) {
        UserOnStudyGroupID
      }
    }
  `

  const variables = {
    data: {
      FK_StudyGroup: {
        connect: {
          StudyGroupID: studyGroupId,
        },
      },
      FK_User: {
        connect: {
          UserID: userId,
        },
      },
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
