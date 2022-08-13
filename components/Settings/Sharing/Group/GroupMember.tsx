import { XIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import usePrivateGroupDetails, {
  UserOnStudyGroup,
} from 'hooks/social/usePrivateGroupDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'
import {
  cancelUserOnStudyGroup,
  removeUserOnStudyGroup,
} from 'utils/social/userOnStudyGroupHandlers'
import ProfilePicOrPlaceholder from '../ProfilePicOrPlaceholder'

interface Props {
  userOnStudyGroup: UserOnStudyGroup
}

export default function GroupMember({ userOnStudyGroup }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { privateGroupDetails, mutatePrivateGroupDetails } =
    usePrivateGroupDetails(userDetails?.UserID)

  return (
    <div className="border flex items-center rounded-lg text-xs py-1 px-1 m-2">
      <ProfilePicOrPlaceholder
        link={userOnStudyGroup.FK_User.ProfilePictureLink}
        name={userOnStudyGroup.FK_User.Name}
        textSize="text-md"
      />
      <div className="flex flex-col px-1">
        <span>{userOnStudyGroup.FK_User.Name}</span>
        <span className="font-medium">
          @{userOnStudyGroup.FK_User.Username}
        </span>
      </div>
      {!userOnStudyGroup.AcceptedTime ? (
        <>
          <Tippy
            content="Invite pending"
            offset={TOOLTIP_OFFSET}
            delay={TOOLTIP_OFFSET}
          >
            <div
              className={classNames(
                'bg-yellow-400',
                'ring-offset-1 w-2 h-2 mx-2 rounded-full',
              )}
            />
          </Tippy>
          <Tippy
            content="Cancel invite"
            offset={TOOLTIP_OFFSET}
            delay={TOOLTIP_DELAY}
          >
            <XIcon
              className={classNames(
                { 'hover:bg-gray-100': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'w-6 h-6 mr-1 text-red-400 p-0.5 rounded-md cursor-pointer',
              )}
              onClick={() =>
                cancelUserOnStudyGroup(
                  userOnStudyGroup.UserOnStudyGroupID,
                  privateGroupDetails,
                  mutatePrivateGroupDetails,
                )
              }
              onKeyDown={() =>
                cancelUserOnStudyGroup(
                  userOnStudyGroup.UserOnStudyGroupID,
                  privateGroupDetails,
                  mutatePrivateGroupDetails,
                )
              }
            />
          </Tippy>
        </>
      ) : (
        <Tippy
          content="Remove student"
          offset={TOOLTIP_OFFSET}
          delay={TOOLTIP_DELAY}
        >
          <XIcon
            className={classNames(
              { 'hover:bg-gray-100': theme === 'light' },
              { 'hover:bg-slate-600': theme === 'dark' },
              'w-6 h-6 mr-1 text-red-400 p-0.5 rounded-md cursor-pointer',
            )}
            onClick={() =>
              removeUserOnStudyGroup(
                userOnStudyGroup.UserOnStudyGroupID,
                privateGroupDetails,
                mutatePrivateGroupDetails,
              )
            }
            onKeyDown={() =>
              removeUserOnStudyGroup(
                userOnStudyGroup.UserOnStudyGroupID,
                privateGroupDetails,
                mutatePrivateGroupDetails,
              )
            }
          />
        </Tippy>
      )}
    </div>
  )
}
