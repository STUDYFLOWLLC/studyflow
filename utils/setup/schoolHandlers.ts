import { mutateUserSchool } from 'hooks/setup/mutateUser'
import { UserDetail } from 'hooks/useUserDetails'
import toast from 'react-hot-toast'
import { KeyedMutator } from 'swr'
import { School } from 'types/School'

export default async function changeSchool(
  school: School,
  userDetails: UserDetail | null,
  mutateUserDetails: KeyedMutator<any>,
  mutateSchoolDetails: KeyedMutator<any>,
  setSaving: (saving: boolean) => void,
) {
  if (!userDetails) return

  setSaving(true)

  await mutateUserSchool(userDetails.UserID, school.SchoolID)

  mutateSchoolDetails(
    { school, mutate: true },
    {
      revalidate: false,
    },
  )
  mutateUserDetails(
    {
      ...userDetails,
      FK_SchoolID: school.SchoolID,
      mutate: true,
    },
    {
      revalidate: false,
    },
  )

  setSaving(false)
  toast.success('School updated!')
}
