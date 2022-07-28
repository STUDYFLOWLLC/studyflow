import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import { UserOnStudyGroup } from 'hooks/social/usePrivateGroupDetails'
import { TOOLTIP_OFFSET } from 'types/Magic'
import ProfilePicOrPlaceholder from '../ProfilePicOrPlaceholder'

interface Props {
  userOnStudyGroup: UserOnStudyGroup
}

export default function GroupMember({ userOnStudyGroup }: Props) {
  return (
    <div className="border flex items-center rounded-lg text-xs py-1 px-1 m-2">
      <ProfilePicOrPlaceholder
        link={userOnStudyGroup.FK_User.ProfilePictureLink}
        name={userOnStudyGroup.FK_User.Name}
      />
      <div className="flex flex-col px-1">
        <span>{userOnStudyGroup.FK_User.Name}</span>
        <span className="font-medium">
          @{userOnStudyGroup.FK_User.Username}
        </span>
      </div>
      {!userOnStudyGroup.AcceptDate && (
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
      )}
    </div>
  )
}
