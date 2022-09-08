import { CakeIcon } from '@heroicons/react/24/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
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
    <div className="flex flex-col items-center max-h-32 overflow-y-auto">
      <p
        className={classNames(
          { 'mb-0 pb-0': (friends?.accepted || []).length > 0 },
          'px-2 uppercase text-xs font-semibold tracking-wider rounded-md',
        )}
      >
        Your friends
      </p>
      {friendsLoading && (
        <div className="mb-6">
          <MainSpinner size={SpinnerSizes.medium} />
        </div>
      )}
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
      {friends?.accepted.length === 0 && (
        <div className="flex flex-col items-center">
          <CakeIcon className="w-6 h-6" />
          <p className="text-center text-xs mx-0 p-0 mt-2">
            A lone wolf! Search for other students above.
          </p>
        </div>
      )}
    </div>
  )
}
