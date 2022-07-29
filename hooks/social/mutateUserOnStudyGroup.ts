/* eslint-disable import/prefer-default-export */

import request, { gql } from 'graphql-request'

export async function mutateCancelUserOnStudyGroup(userOnStudyGroupId: number) {
  const mutation = gql`
    mutation Mutation(
      $data: UserOnStudyGroupUpdateInput!
      $where: UserOnStudyGroupWhereUniqueInput!
    ) {
      updateUserOnStudyGroup(data: $data, where: $where) {
        UserOnStudyGroupID
      }
    }
  `

  const variables = {
    data: {
      CanceledTime: {
        set: new Date().toISOString(),
      },
    },
    where: {
      UserOnStudyGroupID: userOnStudyGroupId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateRejectUserOnStudyGroup(userOnStudyGroupId: number) {
  const mutation = gql`
    mutation Mutation(
      $data: UserOnStudyGroupUpdateInput!
      $where: UserOnStudyGroupWhereUniqueInput!
    ) {
      updateUserOnStudyGroup(data: $data, where: $where) {
        UserOnStudyGroupID
      }
    }
  `

  const variables = {
    data: {
      RejectedTime: {
        set: new Date().toISOString(),
      },
    },
    where: {
      UserOnStudyGroupID: userOnStudyGroupId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateAcceptUserOnStudyGroup(userOnStudyGroupId: number) {
  const mutation = gql`
    mutation Mutation(
      $data: UserOnStudyGroupUpdateInput!
      $where: UserOnStudyGroupWhereUniqueInput!
    ) {
      updateUserOnStudyGroup(data: $data, where: $where) {
        UserOnStudyGroupID
      }
    }
  `

  const variables = {
    data: {
      AcceptedTime: {
        set: new Date().toISOString(),
      },
    },
    where: {
      UserOnStudyGroupID: userOnStudyGroupId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateRemoveUserOnStudyGroup(userOnStudyGroupId: number) {
  const mutation = gql`
    mutation Mutation(
      $data: UserOnStudyGroupUpdateInput!
      $where: UserOnStudyGroupWhereUniqueInput!
    ) {
      updateUserOnStudyGroup(data: $data, where: $where) {
        UserOnStudyGroupID
      }
    }
  `

  const variables = {
    data: {
      RemovedTime: {
        set: new Date().toISOString(),
      },
    },
    where: {
      UserOnStudyGroupID: userOnStudyGroupId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}
