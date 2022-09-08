import { CheckIcon, UserPlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { PublicUser } from 'types/Social'
import {
  acceptFriendship,
  cancelFriendship,
  rejectFriendship,
  removeFriendship,
  sendFriendship,
} from 'utils/social/friendshipHandlers'

interface Props {
  PublicUser: PublicUser | undefined
}

export default function FriendButton({ PublicUser }: Props) {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { friends, mutateFriends } = useFriends(userDetails?.UserID)

  if (userDetails?.Username === PublicUser?.Username) return null

  if (!friends) return null

  if (
    friends.accepted.find(
      (f) =>
        f.FK_UserFrom.UserID === PublicUser?.UserID ||
        f.FK_UserTo.UserID === PublicUser?.UserID,
    )
  ) {
    return (
      <button
        type="button"
        className="inline-flex justify-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md bg-base-100 border-info hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        onClick={() =>
          removeFriendship(
            friends.accepted.find(
              (f) => f.FK_UserTo.Username === PublicUser?.Username,
            ),
            friends,
            mutateFriends,
          )
        }
        onKeyDown={() =>
          removeFriendship(
            friends.accepted.find(
              (f) => f.FK_UserTo.Username === PublicUser?.Username,
            ),
            friends,
            mutateFriends,
          )
        }
      >
        <XMarkIcon
          className="-ml-1 mr-2 h-5 w-5 text-red-400"
          aria-hidden="true"
        />
        <span>Remove Friend </span>
      </button>
    )
  }

  const friendRequested = friends.requested.find(
    (f) => f.FK_UserTo.UserID === PublicUser?.UserID,
  )
  if (friendRequested) {
    return (
      <button
        type="button"
        className="inline-flex justify-center px-4 py-2 border shadow-sm text-sm font-medium rounded-md text-gray-700 bg-base-100 border-info hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        onClick={() =>
          cancelFriendship(friendRequested, friends, mutateFriends)
        }
        onKeyDown={() =>
          cancelFriendship(friendRequested, friends, mutateFriends)
        }
      >
        <XMarkIcon
          className="-ml-1 mr-2 h-5 w-5 text-red-400"
          aria-hidden="true"
        />
        <span>Cancel Request</span>
      </button>
    )
  }

  const friendIncoming = friends.incoming.find(
    (f) =>
      f.FK_UserTo.UserID === PublicUser?.UserID ||
      f.FK_UserFrom.UserID === PublicUser?.UserID,
  )
  if (friendIncoming) {
    return (
      <div className="flex items-center w-18 px-3 py-2 border rounded-md">
        <p className="p-0 m-0 mr-2 text-sm">Accept friend request? </p>
        <XMarkIcon
          className="w-6 h-6 mr-1 text-red-400 p-0.5 rounded-md cursor-pointer hover:bg-info/10"
          onClick={() =>
            rejectFriendship(friendIncoming, friends, mutateFriends)
          }
          onKeyDown={() =>
            rejectFriendship(friendIncoming, friends, mutateFriends)
          }
        />
        <CheckIcon
          className="w-6 h-6 text-green-500 rounded-md p-0.5 cursor-pointer hover:bg-info/10"
          onClick={() =>
            acceptFriendship(friendIncoming, friends, mutateFriends)
          }
          onKeyDown={() =>
            acceptFriendship(friendIncoming, friends, mutateFriends)
          }
        />
      </div>
    )
  }

  if (userDetails && PublicUser) {
    return (
      <button
        type="button"
        className="inline-flex justify-center px-4 py-2 border  shadow-sm text-sm font-medium rounded-md bg-base-100 border-info hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        onClick={() =>
          sendFriendship(userDetails, PublicUser, friends, mutateFriends)
        }
        onKeyDown={() =>
          sendFriendship(userDetails, PublicUser, friends, mutateFriends)
        }
      >
        <UserPlusIcon
          className="-ml-1 mr-2 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <span>Send Request</span>
      </button>
    )
  }

  return null
}
