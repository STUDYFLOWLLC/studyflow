/* eslint-disable import/prefer-default-export */

import request, { gql } from 'graphql-request'

export async function mutateSendFriendship(
  newId: string,
  userFromId: number,
  userToId: number,
) {
  const mutation = gql`
    mutation Mutation($data: FriendshipCreateInput!) {
      createFriendship(data: $data) {
        FriendshipID
        SentTime
        AcceptedTime
        FK_UserFrom {
          UserID
          ProfilePictureLink
          Name
          Username
          FK_School {
            Name
          }
        }
        FK_UserTo {
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
  `

  const variables = {
    data: {
      FriendshipID: newId,
      FK_UserFrom: {
        connect: {
          UserID: userFromId,
        },
      },
      FK_UserTo: {
        connect: {
          UserID: userToId,
        },
      },
      SentTime: new Date().toISOString(),
    },
  }

  const data = await request('/api/graphql', mutation, variables)
  return data.createFriendship
}

export async function mutateAcceptFriendship(friendshipId: string) {
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

export async function mutateRejectFriendship(friendshipId: string) {
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

export async function mutateRemoveFriendship(friendshipId: string) {
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

export async function mutateCancelFriendship(friendshipId: string) {
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
