/* eslint-disable import/prefer-default-export */

import {
  mutateName,
  mutateProfilePictureLink,
  mutateUserDefaultVisibility,
  mutateUserEmail,
  mutateUsername,
} from 'hooks/setup/mutateUser'
import { UserDetail } from 'hooks/useUserDetails'
import { KeyedMutator } from 'swr'
import { FlowVisibility } from 'types/Flow'
import { supabase } from 'utils/supabase'

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

  if (!shouldSaveToBackend) return

  // mutate in backend
  const data = await mutateName(userDetails?.Email, newName)
  if (data) {
    setSaving(false)
  }
}

export async function changeUserUsername(
  newUsername: string,
  userDetails: UserDetail | null,
  mutateUserDetails: KeyedMutator<any>,
  setSaving: (isSaving: boolean) => void,
  shouldSaveToBackend: boolean, // needed to prevent saving to backend if username does not pass checks
) {
  if (!userDetails) return

  setSaving(true)

  // mutate locally
  mutateUserDetails(
    {
      ...userDetails,
      Username: newUsername,
      mutate: true,
    },
    {
      revalidate: false,
    },
  )

  if (!shouldSaveToBackend) return setSaving(false)

  // mutate in backend
  const data = await mutateUsername(userDetails?.Email, newUsername)
  if (data) {
    setSaving(false)
  }
}

export async function changeUserEmail(
  newEmail: string,
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
      Email: newEmail,
      mutate: true,
    },
    {
      revalidate: false,
    },
  )

  if (!shouldSaveToBackend) return

  // mutate in backend
  const data = await mutateUserEmail(userDetails?.Email, newEmail)
  if (data) {
    setSaving(false)
  }
}

export async function changeUserPFP(
  file: File | undefined,
  userDetails: UserDetail | null,
  mutateUserDetails: KeyedMutator<any>,
  setSaving: (isSaving: boolean) => void,
) {
  if (!file) return
  if (!userDetails) return

  setSaving(true)

  const { data, error } = await supabase.storage
    .from('pfp')
    .upload(`${userDetails.SupabaseID}/${file.name}`, file)

  if (data) {
    // mutate in backend
    const link = `https://afmrynysmeogummgkkrb.supabase.co/storage/v1/object/public/${data.Key}`
    const data2 = await mutateProfilePictureLink(userDetails?.Email, link)
    if (data2) {
      // mutate locally
      mutateUserDetails(
        {
          ...userDetails,
          ProfilePictureLink: link,
          mutate: true,
        },
        {
          revalidate: false,
        },
      )

      setSaving(false)
    }
  }
}

export function changeUserDefaultVisibility(
  newVisibility: FlowVisibility,
  userDetails: UserDetail | null,
  mutateUserDetails: KeyedMutator<any>,
) {
  if (!userDetails) return

  // mutate in backend
  mutateUserDefaultVisibility(userDetails?.Email, newVisibility)

  // mutate locally
  mutateUserDetails(
    {
      ...userDetails,
      DefaultVisibility: newVisibility,
      mutate: true,
    },
    {
      revalidate: false,
    },
  )
}
