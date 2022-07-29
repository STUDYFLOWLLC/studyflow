import { Menu } from '@headlessui/react'
import { CheckIcon, XIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useGroupInvites, { GroupInvite } from 'hooks/social/useGroupInvites'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { ActiveProps } from 'types/ActiveProps'
import {
  acceptStudyGroupInvite,
  rejectStudyGroupInvite,
} from 'utils/social/userOnStudyGroupHandlers'
import BasicStudentDisplay from '../Displays/BasicStudentDisplay'

interface Props {
  groupInvite: GroupInvite
}

export default function FriendRequestIncoming({ groupInvite }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { groupInvites, mutateGroupInvites } = useGroupInvites(
    userDetails?.UserID,
  )

  return (
    <Menu.Item key={groupInvite.UserOnStudyGroupID} disabled>
      {({ active }: ActiveProps) => (
        <div
          className="pl-2 pr-4 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center justify-between"
          // onClick={() => mutator(item.name)}
          // onKeyDown={() => mutator(item.name)}
        >
          <BasicStudentDisplay publicUser={groupInvite.FK_StudyGroup.FK_User} />
          <div className="flex">
            <XIcon
              className={classNames(
                { 'hover:bg-gray-100': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'w-6 h-6 mr-1 text-red-400 p-0.5 rounded-md cursor-pointer',
              )}
              onClick={() =>
                rejectStudyGroupInvite(
                  groupInvite.UserOnStudyGroupID,
                  groupInvites,
                  mutateGroupInvites,
                )
              }
              onKeyDown={() =>
                rejectStudyGroupInvite(
                  groupInvite.UserOnStudyGroupID,
                  groupInvites,
                  mutateGroupInvites,
                )
              }
            />
            <CheckIcon
              className={classNames(
                { 'hover:bg-gray-100': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'w-6 h-6 text-green-500 rounded-md p-0.5 cursor-pointer',
              )}
              onClick={() =>
                acceptStudyGroupInvite(
                  groupInvite.UserOnStudyGroupID,
                  groupInvites,
                  mutateGroupInvites,
                )
              }
              onKeyDown={() =>
                acceptStudyGroupInvite(
                  groupInvite.UserOnStudyGroupID,
                  groupInvites,
                  mutateGroupInvites,
                )
              }
            />
          </div>
        </div>
      )}
    </Menu.Item>
  )
}
