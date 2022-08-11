import { HeartIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
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
    <div className="flex flex-col items-center">
      <p
        className={classNames(
          { 'mb-0 pb-0': (friends?.requested || []).length > 0 },
          'px-2 uppercase text-xs font-semibold tracking-wider rounded-md',
        )}
      >
        Sent requests
      </p>
      {friendsLoading && (
        <div className="mb-6">
          <MainSpinner size={SpinnerSizes.medium} />
        </div>
      )}
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
        <div className="flex flex-col items-center">
          <HeartIcon className="w-6 h-6" />
          <p className="text-center text-xs mx-0 p-0 mt-2">
            Nothing to worry about.
          </p>
        </div>
      )}
    </div>
  )
}
