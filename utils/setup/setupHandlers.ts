import setBasicProfile from 'hooks/setup/setBasicProfile'
import { UserDetail } from 'hooks/useUserDetails'
import { KeyedMutator } from 'swr'

export default async function makeUser(
  supabaseId: string | undefined,
  email: string,
  userDetails: UserDetail | null,
  mutateUserDetails: KeyedMutator<any>,
) {
  if (!supabaseId) {
    mutateUserDetails(
      {
        failure: true,
        mutate: true,
      },
      {
        revalidate: true,
      },
    )
    return
  }

  // create in backend
  const data = await setBasicProfile(supabaseId, email)

  // update in frontend
  mutateUserDetails(
    {
      ...userDetails,
      ...data,
      mutate: true,
    },
    {
      revalidate: true,
    },
  )
}
