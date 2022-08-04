/* eslint-disable import/prefer-default-export */

import {
  mutateAcceptFriendship,
  mutateCancelFriendship,
  mutateRejectFriendship,
  mutateRemoveFriendship,
  mutateSendFriendship,
} from 'hooks/social/mutateFriendship'
import { Friends } from 'hooks/social/useFriends'
import { UserDetail } from 'hooks/useUserDetails'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import { Friendship, PublicUser } from 'types/Social'
import { v4 as uuid } from 'uuid'

export async function sendFriendship(
  userFrom: UserDetail | null,
  userTo: PublicUser | undefined,
  friends: Friends | null,
  mutateFriends: KeyedMutator<any>,
) {
  if (!friends || !userFrom || !userTo) return

  // mutate in backend
  const newId = uuid()
  mutateSendFriendship(newId, userFrom.UserID, userTo.UserID)

  // mutate in frontend
  mutateFriends(
    {
      newFriends: {
        ...friends,
        requested: [
          ...friends.requested,
          {
            FriendshipID: newId,
            SentTime: new Date().toISOString(),
            FK_UserFrom: userFrom as unknown as PublicUser,
            FK_UserTo: userTo,
          },
        ],
      },
    },
    {
      revalidate: false,
    },
  )
}

export function acceptFriendship(
  friendship: Friendship | undefined,
  friends: Friends | null,
  mutateFriends: KeyedMutator<any>,
) {
  if (!friends || !friendship) return

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
  friendship: Friendship | undefined,
  friends: Friends | null,
  mutateFriends: KeyedMutator<any>,
) {
  if (!friends || !friendship) return

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
  friendship: Friendship | undefined,
  friends: Friends | null,
  mutateFriends: KeyedMutator<any>,
) {
  if (!friends || !friendship) return

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
  friendship: Friendship | undefined,
  friends: Friends | null,
  mutateFriends: KeyedMutator<any>,
) {
  if (!friends || !friendship) return

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
