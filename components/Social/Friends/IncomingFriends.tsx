import { useUser } from '@supabase/supabase-auth-helpers/react'
import MainSpinner from 'components/spinners/MainSpinner'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'
import IncomingFriend from '../Displays/IncomingFriend'

export default function RequestedFriends() {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { friends, friendsLoading } = useFriends(userDetails?.UserID)

  console.log(friends)

  return (
    <div className="flex flex-col">
      <p className="px-2 uppercase text-xs font-semibold tracking-wider rounded-md">
        Incoming requests
      </p>
      {friendsLoading && <MainSpinner size={SpinnerSizes.medium} />}
      {friends?.incoming.map((friendship) => (
        <IncomingFriend key={friendship.FriendshipID} friendship={friendship} />
      ))}
      {friends?.incoming.length === 0 && <span>No incoming requests</span>}
    </div>
  )
}
