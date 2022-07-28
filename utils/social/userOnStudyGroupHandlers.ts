/* eslint-disable import/prefer-default-export */
import { mutateCancelUserOnStudyGroup } from 'hooks/social/mutateUserOnStudyGroup'
import { StudyGroup } from 'hooks/social/usePrivateGroupDetails'
import { KeyedMutator } from 'swr'

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
}
