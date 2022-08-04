import { UserAddIcon, XIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { PublicUser } from 'types/Social'
import {
  cancelFriendship,
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

  if (!friends) return null

  if (
    friends.accepted.find((f) => f.FK_UserFrom.UserID === PublicUser?.UserID)
  ) {
    return (
      <button
        type="button"
        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
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
        <XIcon className="-ml-1 mr-2 h-5 w-5 text-red-400" aria-hidden="true" />
        <span>Cancel Request</span>
      </button>
    )
  }

  if (
    friends.requested.find((f) => f.FK_UserTo.UserID === PublicUser?.UserID)
  ) {
    return (
      <button
        type="button"
        className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        onClick={() =>
          cancelFriendship(
            friends.requested.find(
              (f) => f.FK_UserTo.Username === PublicUser?.Username,
            ),
            friends,
            mutateFriends,
          )
        }
        onKeyDown={() =>
          cancelFriendship(
            friends.requested.find(
              (f) => f.FK_UserTo.Username === PublicUser?.Username,
            ),
            friends,
            mutateFriends,
          )
        }
      >
        <XIcon className="-ml-1 mr-2 h-5 w-5 text-red-400" aria-hidden="true" />
        <span>Cancel Request</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      onClick={() =>
        sendFriendship(userDetails, PublicUser, friends, mutateFriends)
      }
      onKeyDown={() =>
        sendFriendship(userDetails, PublicUser, friends, mutateFriends)
      }
    >
      <UserAddIcon
        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
      <span>Send Request</span>
    </button>
  )
}
