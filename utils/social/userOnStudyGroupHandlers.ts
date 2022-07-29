/* eslint-disable import/prefer-default-export */
import {
  mutateAcceptUserOnStudyGroup,
  mutateCancelUserOnStudyGroup,
  mutateRejectUserOnStudyGroup,
  mutateRemoveUserOnStudyGroup,
} from 'hooks/social/mutateUserOnStudyGroup'
import { GroupInvite } from 'hooks/social/useGroupInvites'
import { StudyGroup } from 'hooks/social/usePrivateGroupDetails'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'

// YOUR STUDYGROUPS
export function cancelUserOnStudyGroup(
  userOnStudyGroupId: number,
  privateGroupDetails: StudyGroup | null,
  mutatePrivateGroupDetails: KeyedMutator<any>,
) {
  if (!privateGroupDetails) return

  // mutate in backend
  mutateCancelUserOnStudyGroup(userOnStudyGroupId)

  // mutate locally
  mutatePrivateGroupDetails(
    {
      newGroup: {
        ...privateGroupDetails,
        FK_UserOnStudyGroup: privateGroupDetails.FK_UserOnStudyGroup.filter(
          (uosg) => uosg.UserOnStudyGroupID !== userOnStudyGroupId,
        ),
      },
      mutate: true,
    },
    { revalidate: false },
  )

  toast.success('Study group invite canceled')
}

export function removeUserOnStudyGroup(
  userOnStudyGroupId: number,
  privateGroupDetails: StudyGroup | null,
  mutatePrivateGroupDetails: KeyedMutator<any>,
) {
  if (!privateGroupDetails) return

  // mutate in backend
  mutateRemoveUserOnStudyGroup(userOnStudyGroupId)

  // mutate locally
  mutatePrivateGroupDetails(
    {
      newGroup: {
        ...privateGroupDetails,
        FK_UserOnStudyGroup: privateGroupDetails.FK_UserOnStudyGroup.filter(
          (uosg) => uosg.UserOnStudyGroupID !== userOnStudyGroupId,
        ),
      },
      mutate: true,
    },
    { revalidate: false },
  )

  toast.success('Student removed from study group')
}

// STUDYGROUP INVITES
export function rejectStudyGroupInvite(
  userOnStudyGroupId: number,
  groupInvites: GroupInvite[] | null,
  mutateGroupInvites: KeyedMutator<any>,
) {
  if (!groupInvites) return

  // mutate in backend
  mutateRejectUserOnStudyGroup(userOnStudyGroupId)

  // mutate locally
  mutateGroupInvites(
    {
      userOnStudyGroups: groupInvites.filter(
        (uosg) => uosg.UserOnStudyGroupID !== userOnStudyGroupId,
      ),
      mutate: true,
    },
    { revalidate: false },
  )

  toast.success('Study group invite rejected')
}

export function acceptStudyGroupInvite(
  userOnStudyGroupId: number,
  groupInvites: GroupInvite[] | null,
  mutateGroupInvites: KeyedMutator<any>,
) {
  if (!groupInvites) return

  // mutate in backend
  mutateAcceptUserOnStudyGroup(userOnStudyGroupId)

  // mutate locally
  mutateGroupInvites(
    {
      userOnStudyGroups: groupInvites.filter(
        (uosg) => uosg.UserOnStudyGroupID !== userOnStudyGroupId,
      ),
      mutate: true,
    },
    { revalidate: false },
  )

  toast.success('Succcessfully joined study group!')
}
