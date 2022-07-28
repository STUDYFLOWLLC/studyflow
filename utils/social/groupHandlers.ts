/* eslint-disable import/prefer-default-export */

import { UserHit } from 'components/Settings/Sharing/InputPrivateGroup'
import {
  mutateAddUserOnStudyGroup,
  mutateCreatePrivateGroup,
} from 'hooks/social/mutateGroup'
import { StudyGroup } from 'hooks/social/usePrivateGroupDetails'
import { KeyedMutator } from 'swr'

export async function addUserToGroup(
  userId: number | undefined,
  newUser: UserHit,
  privateGroupDetails: StudyGroup | null,
  mutatePrivateGroupDetails: KeyedMutator<any>,
  setLoading: (loading: boolean) => void,
) {
  if (!userId) return

  setLoading(true)

  let groupId

  // create the group if there is not one
  if (privateGroupDetails === null || privateGroupDetails.StudyGroupID === 0) {
    const data = await mutateCreatePrivateGroup(userId)
    groupId = data?.createStudyGroup?.StudyGroupID
    if (!groupId) return
  }

  // mutate in backend
  mutateAddUserOnStudyGroup(
    newUser.UserID,
    groupId || privateGroupDetails?.StudyGroupID,
  )

  // mutate locally
  mutatePrivateGroupDetails(
    {
      newGroup: {
        ...privateGroupDetails,
        StudyGroupID: groupId,
        Name: 'Private',
        FK_UserOnStudyGroup: [
          ...(privateGroupDetails?.FK_UserOnStudyGroup || []),
          {
            SendDate: new Date().toISOString(),
            FK_User: {
              UserID: newUser.UserID,
              ProfilePictureLink: newUser.ProfilePictureLink,
              Name: newUser.Name,
              Username: newUser.Username,
              FK_School: {
                Name: newUser.school,
              },
            },
          },
        ],
      },
      mutate: true,
    },
    {
      revalidate: false,
    },
  )

  setLoading(false)
}
