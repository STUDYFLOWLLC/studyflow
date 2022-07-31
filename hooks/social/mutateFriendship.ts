/* eslint-disable import/prefer-default-export */

import request, { gql } from 'graphql-request'

export async function mutateAcceptFriendship(friendshipId: number) {
  const mutation = gql`
    mutation Mutation(
      $data: FriendshipUpdateInput!
      $where: FriendshipWhereUniqueInput!
    ) {
      updateFriendship(data: $data, where: $where) {
        FriendshipID
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
      FriendshipID: friendshipId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateRejectFriendship(friendshipId: number) {
  const mutation = gql`
    mutation Mutation(
      $data: FriendshipUpdateInput!
      $where: FriendshipWhereUniqueInput!
    ) {
      updateFriendship(data: $data, where: $where) {
        FriendshipID
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
      FriendshipID: friendshipId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateRemoveFriendship(friendshipId: number) {
  const mutation = gql`
    mutation Mutation(
      $data: FriendshipUpdateInput!
      $where: FriendshipWhereUniqueInput!
    ) {
      updateFriendship(data: $data, where: $where) {
        FriendshipID
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
      FriendshipID: friendshipId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}

export async function mutateCancelFriendship(friendshipId: number) {
  const mutation = gql`
    mutation Mutation(
      $data: FriendshipUpdateInput!
      $where: FriendshipWhereUniqueInput!
    ) {
      updateFriendship(data: $data, where: $where) {
        FriendshipID
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
      FriendshipID: friendshipId,
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data
}