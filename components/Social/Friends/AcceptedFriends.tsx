import { useUser } from '@supabase/supabase-auth-helpers/react'
import AcceptedFriend from 'components/Social/Displays/AcceptedFriend'
import MainSpinner from 'components/spinners/MainSpinner'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'

export default function AcceptedFriends() {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { friends, friendsLoading } = useFriends(userDetails?.UserID)

  return (
    <div className="flex flex-col">
      <p className="px-2 uppercase text-xs font-semibold tracking-wider rounded-md">
        Your friends
      </p>
      {friendsLoading && <MainSpinner size={SpinnerSizes.medium} />}
      {friends?.accepted.map((friendship) => (
        <AcceptedFriend
          key={friendship.FriendshipID}
          friendship={friendship}
          displayUser={
            friendship.FK_UserFrom.UserID === userDetails?.UserID
              ? friendship.FK_UserTo
              : friendship.FK_UserFrom
          }
        />
      ))}
      {friends?.accepted.length === 0 && <span>No friends yet</span>}
    </div>
  )
}
