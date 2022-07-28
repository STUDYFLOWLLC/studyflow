/* eslint-disable @typescript-eslint/no-explicit-any */

import { gql } from 'graphql-request'
import useSWR, { KeyedMutator } from 'swr'
import { Friendship } from 'types/Social'

export interface Friends {
  requested: Friendship[]
  accepted: Friendship[]
  incoming: Friendship[]
}

interface Ret {
  friends: Friends | null
  friendsLoading: boolean
  friendsError: any
  mutateFriends: KeyedMutator<any>
}

export default function useFriends(userId: number | undefined): Ret {
  const query = gql`
    query Query($where: FriendshipWhereInput) {
      friendships(where: $where) {
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
          FK_School {
            Name
          }
        }
      }
    }
  `

  const variables = {
    where: {
      OR: [
        {
          FK_UserFromID: {
            equals: userId || 0,
          },
        },
        {
          FK_UserToID: {
            equals: userId || 0,
          },
        },
      ],
    },
  }

  const { data, error, mutate } = useSWR([query, variables])

  if (data?.newFriends) {
    return {
      friends: data.newFriends,
      friendsLoading: false,
      friendsError: null,
      mutateFriends: mutate,
    }
  }

  if (data?.friendships?.length !== undefined) {
    const friendShips = data.friendships as Friendship[]
    return {
      friends: {
        requested: friendShips.filter(
          (friendship) =>
            friendship.FK_UserFrom.UserID === userId &&
            friendship.AcceptedTime === null,
        ),
        accepted: friendShips.filter(
          (friendship) => friendship.AcceptedTime !== null,
        ),
        incoming: friendShips.filter(
          (friendship) =>
            friendship.FK_UserTo.UserID === userId &&
            friendship.AcceptedTime === null,
        ),
      },
      friendsLoading: false,
      friendsError: null,
      mutateFriends: mutate,
    }
  }

  return {
    friends: null,
    friendsLoading: !data && !error,
    friendsError: error,
    mutateFriends: mutate,
  }
}
