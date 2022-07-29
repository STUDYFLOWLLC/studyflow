import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Friendship } from 'types/Social'
import {
  acceptFriendship,
  rejectFriendship,
} from 'utils/social/friendshipHandlers'
import BasicStudentDisplay from './BasicStudentDisplay'

interface Props {
  friendship: Friendship
}

export default function IncomingFriend({ friendship }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { friends, mutateFriends } = useFriends(userDetails?.UserID)

  return (
    <div
      className="pl-2 pr-4 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center justify-between"
      // onClick={() => mutator(item.name)}
      // onKeyDown={() => mutator(item.name)}
    >
      <BasicStudentDisplay publicUser={friendship.FK_UserFrom} />
      <div className="flex">
        <XIcon
          className={classNames(
            { 'hover:bg-gray-100': theme === 'light' },
            { 'hover:bg-slate-600': theme === 'dark' },
            'w-6 h-6 mr-1 text-red-400 p-0.5 rounded-md cursor-pointer',
          )}
          onClick={() => rejectFriendship(friendship, friends, mutateFriends)}
          onKeyDown={() => rejectFriendship(friendship, friends, mutateFriends)}
        />
        <CheckIcon
          className={classNames(
            { 'hover:bg-gray-100': theme === 'light' },
            { 'hover:bg-slate-600': theme === 'dark' },
            'w-6 h-6 text-green-500 rounded-md p-0.5 cursor-pointer',
          )}
          onClick={() => acceptFriendship(friendship, friends, mutateFriends)}
          onKeyDown={() => acceptFriendship(friendship, friends, mutateFriends)}
        />
      </div>
    </div>
  )
}
