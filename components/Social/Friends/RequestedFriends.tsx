import { useUser } from '@supabase/supabase-auth-helpers/react'
import RequestedFriend from 'components/Social/Displays/RequestedFriend'
import MainSpinner from 'components/spinners/MainSpinner'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'

export default function RequestedFriends() {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { friends, friendsLoading } = useFriends(userDetails?.UserID)

  return (
    <div className="flex flex-col">
      <p className="px-2 uppercase text-xs font-semibold tracking-wider rounded-md">
        Sent requests
      </p>
      {friendsLoading && <MainSpinner size={SpinnerSizes.medium} />}
      {friends?.requested.map((friendship) => (
        <RequestedFriend
          key={friendship.FriendshipID}
          friendship={friendship}
          displayUser={
            friendship.FK_UserFrom.UserID === userDetails?.UserID
              ? friendship.FK_UserTo
              : friendship.FK_UserFrom
          }
        />
      ))}
      {friends?.requested.length === 0 && (
        <span>No requests sent. make a request below</span>
      )}
    </div>
  )
}
