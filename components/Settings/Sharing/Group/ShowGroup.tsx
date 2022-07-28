import { useUser } from '@supabase/supabase-auth-helpers/react'
import MainSpinner from 'components/spinners/MainSpinner'
import usePrivateGroupDetails from 'hooks/social/usePrivateGroupDetails'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'types/Loading'
import GroupMember from './GroupMember'

export default function ShowGroup() {
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const {
    privateGroupDetails,
    privateGroupDetailsLoading,
    mutatePrivateGroupDetails,
  } = usePrivateGroupDetails(userDetails?.UserID)

  if (privateGroupDetailsLoading) {
    return (
      <div className="flex flex-col items-center prose">
        <MainSpinner size={SpinnerSizes.medium} />
        <p>Loading your groups...</p>
      </div>
    )
  }

  if (
    privateGroupDetails === null ||
    privateGroupDetails?.FK_UserOnStudyGroup?.length === 0
  ) {
    return <span className="text-sm pb-4">no one in group :( Add below</span>
  }

  return (
    <div className="flex flex-wrap w-full justify-center">
      {privateGroupDetails?.FK_UserOnStudyGroup.map((userOnStudyGroup) => (
        <GroupMember
          key={userOnStudyGroup.FK_User.UserID}
          userOnStudyGroup={userOnStudyGroup}
        />
      ))}
    </div>
  )
}
