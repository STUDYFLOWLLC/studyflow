import { useUser } from '@supabase/supabase-auth-helpers/react'
import ProfileHeader from 'components/Social/Student/ProfileHeader'
import ProfileTabs from 'components/Social/Student/ProfileTabs'
import getPublicProfile from 'hooks/social/getPublicProfile'
import useUserDetails from 'hooks/useUserDetails'
import { useEffect, useState } from 'react'
import { PublicUser } from 'types/Social'

interface Props {
  PublicUser: PublicUser | undefined
}

export default function index({ PublicUser }: Props) {
  // THE FOLLOWING IS ONLY USED TO GIVE THE USER ACCESS, DON'T USE IT TO DISPLAY DATA!
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const [canEdit, setCanEdit] = useState(
    userDetails?.Username === PublicUser?.Username,
  )
  useEffect(
    () => setCanEdit(userDetails?.Username === PublicUser?.Username),
    [userDetails, PublicUser],
  )
  // END. PASS canEdit TO COMPONENTS THAT SHOULD BE EDITABLE

  if (!PublicUser) return <span>no user found!</span>

  return (
    <div className="h-full flex mb-5">
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            <article>
              <ProfileHeader PublicUser={PublicUser} canEdit={canEdit} />
              <ProfileTabs PublicUser={PublicUser} tab="Flows" />
            </article>
          </main>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: {
  query: { Username: string }
}) {
  const data = await getPublicProfile(context.query.Username)
  return {
    props: {
      PublicUser: data,
    },
  }
}
