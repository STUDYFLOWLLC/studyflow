import { useUser } from '@supabase/supabase-auth-helpers/react'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import AcceptedFriends from './AcceptedFriends'
import IncomingFriends from './IncomingFriends'
import RequestedFriends from './RequestedFriends'

export default function FriendsDisplay() {
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { friends, friendsLoading } = useFriends(userDetails?.UserID)

  return (
    <div className="w-4/5 flex flex-wrap mx-auto justify-around border rounded-md">
      <RequestedFriends />
      <AcceptedFriends />
      <IncomingFriends />
    </div>
  )
}
