/* eslint-disable import/prefer-default-export */

import { mutateName } from 'hooks/setup/mutateUser'
import { UserDetail } from 'hooks/useUserDetails'
import { KeyedMutator } from 'swr'

export async function changeUserName(
  newName: string,
  userDetails: UserDetail | null,
  mutateUserDetails: KeyedMutator<any>,
  setSaving: (isSaving: boolean) => void,
  shouldSaveToBackend: boolean, // needed to prevent saving to backend when name is too short
) {
  if (!userDetails) return

  setSaving(true)

  // mutate locally
  mutateUserDetails(
    {
      ...userDetails,
      Name: newName,
      mutate: true,
    },
    {
      revalidate: false,
    },
  )

  // mutate in backend
  const data = await mutateName(userDetails?.Email, newName)
  if (data) {
    setSaving(false)
  }
}
