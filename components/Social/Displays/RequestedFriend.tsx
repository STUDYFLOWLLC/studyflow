/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import ProfilePicOrPlaceholder from 'components/Settings/Sharing/ProfilePicOrPlaceholder'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Friendship, PublicUser } from 'types/Social'
import { cancelFriendship } from 'utils/social/friendshipHandlers'

interface Props {
  friendship: Friendship
  displayUser: PublicUser
}

export default function RequestedFriend({ friendship, displayUser }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { friends, mutateFriends } = useFriends(userDetails?.UserID)

  return (
    <div
      className="w-72 p-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center justify-between"
      // onClick={() => mutator(item.name)}
      // onKeyDown={() => mutator(item.name)}
    >
      <div className="cursor-pointer flex items-center">
        <ProfilePicOrPlaceholder
          link={displayUser.ProfilePictureLink}
          name={displayUser.Name}
          dimension="w-8 h-8"
          textSize="text-md"
        />
        <div className="ml-2 truncate flex flex-col">
          <span className="text-xs">
            {displayUser.Name}{' '}
            <span className="font-medium">@{displayUser.Username}</span>
          </span>
          <span className="text-2xs">{displayUser.FK_School.Name}</span>
        </div>
      </div>
      <div className="flex">
        <p
          className={classNames(
            { 'hover:bg-gray-100': theme === 'light' },
            { 'hover:bg-slate-600': theme === 'dark' },
            'px-2 py-1 ml-1 uppercase text-xs font-semibold tracking-wider cursor-pointer text-rose-400 rounded-md',
          )}
          onClick={() => cancelFriendship(friendship, friends, mutateFriends)}
          onKeyDown={() => cancelFriendship(friendship, friends, mutateFriends)}
        >
          Cancel
        </p>
      </div>
    </div>
  )
}
