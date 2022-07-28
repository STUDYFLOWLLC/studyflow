/* eslint-disable import/prefer-default-export */

import {
  mutateAcceptFriendship,
  mutateCancelFriendship,
  mutateRejectFriendship,
  mutateRemoveFriendship,
} from 'hooks/social/mutateFriendship'
import { Friends } from 'hooks/social/useFriends'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import { Friendship } from 'types/Social'

export function acceptFriendship(
  friendship: Friendship,
  friends: Friends | null,
  mutateFriends: KeyedMutator<any>,
) {
  if (!friends) return

  // mutate in backend
  mutateAcceptFriendship(friendship.FriendshipID)

  // mutate locally
  mutateFriends(
    {
      newFriends: {
        requested: friends.requested,
        accepted: [...friends.accepted, friendship],
        incoming: friends.incoming.filter(
          (f) => f.FriendshipID !== friendship.FriendshipID,
        ),
      },
    },
    {
      revalidate: false,
    },
  )

  toast.success('Friendship accepted!')
}

export function rejectFriendship(
  friendship: Friendship,
  friends: Friends | null,
  mutateFriends: KeyedMutator<any>,
) {
  if (!friends) return

  // mutate in backend
  mutateRejectFriendship(friendship.FriendshipID)

  // mutate locally
  mutateFriends(
    {
      newFriends: {
        requested: friends.requested,
        accepted: friends.accepted,
        incoming: friends.incoming.filter(
          (f) => f.FriendshipID !== friendship.FriendshipID,
        ),
      },
    },
    {
      revalidate: false,
    },
  )
}

export function removeFriendship(
  friendship: Friendship,
  friends: Friends | null,
  mutateFriends: KeyedMutator<any>,
) {
  if (!friends) return

  // mutate in backend
  mutateRemoveFriendship(friendship.FriendshipID)

  // mutate locally
  mutateFriends(
    {
      newFriends: {
        requested: friends.requested,
        accepted: friends.accepted.filter(
          (f) => f.FriendshipID !== friendship.FriendshipID,
        ),
        incoming: friends.incoming,
      },
    },
    {
      revalidate: false,
    },
  )
}

export function cancelFriendship(
  friendship: Friendship,
  friends: Friends | null,
  mutateFriends: KeyedMutator<any>,
) {
  if (!friends) return

  // mutate in backend
  mutateCancelFriendship(friendship.FriendshipID)

  // mutate locally
  mutateFriends(
    {
      newFriends: {
        requested: friends.requested.filter(
          (f) => f.FriendshipID !== friendship.FriendshipID,
        ),
        accepted: friends.accepted,
        incoming: friends.incoming,
      },
    },
    {
      revalidate: false,
    },
  )
}
