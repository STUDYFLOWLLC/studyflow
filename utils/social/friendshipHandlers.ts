/* eslint-disable import/prefer-default-export */

import { mutateAcceptFriendship } from 'hooks/social/mutateFriendship'
import { Friends } from 'hooks/social/useFriends'
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
}
