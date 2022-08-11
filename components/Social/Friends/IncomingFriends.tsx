import { GlobeIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'
import IncomingFriend from '../Displays/IncomingFriend'

export default function RequestedFriends() {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { friends, friendsLoading } = useFriends(userDetails?.UserID)

  return (
    <div className="flex flex-col items-center">
      <p
        className={classNames(
          { 'mb-0 pb-0': (friends?.incoming || []).length > 0 },
          'px-2 uppercase text-xs font-semibold tracking-wider rounded-md',
        )}
      >
        Incoming requests
      </p>
      {friendsLoading && (
        <div className="mb-6">
          <MainSpinner size={SpinnerSizes.medium} />
        </div>
      )}
      {friends?.incoming.map((friendship) => (
        <IncomingFriend key={friendship.FriendshipID} friendship={friendship} />
      ))}
      {friends?.incoming.length === 0 && (
        <div className="flex flex-col items-center">
          <GlobeIcon className="w-6 h-6" />
          <p className="text-center text-xs mx-0 p-0 mt-2">
            No incoming requests
          </p>
        </div>
      )}
    </div>
  )
}
