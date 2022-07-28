import { Menu } from '@headlessui/react'
import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import ProfilePicOrPlaceholder from 'components/Settings/Sharing/ProfilePicOrPlaceholder'
import useFriends from 'hooks/social/useFriends'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { ActiveProps } from 'types/ActiveProps'
import { Friendship } from 'types/Social'
import { acceptFriendship } from 'utils/social/friendshipHandlers'

interface Props {
  friendship: Friendship
}

export default function FriendRequestIncoming({ friendship }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { friends, mutateFriends } = useFriends(userDetails?.UserID)

  return (
    <Menu.Item key={friendship.SentTime} disabled>
      {({ active }: ActiveProps) => (
        <div
          className="pl-2 pr-4 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center justify-between"
          // onClick={() => mutator(item.name)}
          // onKeyDown={() => mutator(item.name)}
        >
          <div className="w-64 cursor-pointer flex items-center">
            <ProfilePicOrPlaceholder
              link={friendship.FK_UserFrom.ProfilePictureLink}
              name={friendship.FK_UserFrom.Name}
              dimension="w-8 h-8"
              textSize="text-md"
            />
            <div className="ml-2 truncate flex flex-col">
              <span className="text-xs">
                {friendship.FK_UserFrom.Name}{' '}
                <span className="font-medium">
                  @{friendship.FK_UserFrom.Username}
                </span>
              </span>
              <span className="text-2xs">
                {friendship.FK_UserFrom.FK_School.Name}
              </span>
            </div>
          </div>
          <div className="flex">
            <XIcon
              className={classNames(
                { 'hover:bg-gray-100': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'w-6 h-6 mr-1 text-red-400 p-0.5 rounded-md cursor-pointer',
              )}
            />
            <CheckIcon
              className={classNames(
                { 'hover:bg-gray-100': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'w-6 h-6 text-green-500 rounded-md p-0.5 cursor-pointer',
              )}
              onClick={() =>
                acceptFriendship(friendship, friends, mutateFriends)
              }
              onKeyDown={() =>
                acceptFriendship(friendship, friends, mutateFriends)
              }
            />
          </div>
        </div>
      )}
    </Menu.Item>
  )
}
