import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import useUserDetails from 'hooks/useUserDetails'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import setupRedirectHandler from 'utils/setupRedirectHandler'

interface Props {
  user: User
}

export default function community({ user }: Props) {
  const router = useRouter()

  const { userDetails, userDetailsLoading } = useUserDetails(user.id)

  useEffect(() => {
    // router.push('/dash')
    setupRedirectHandler(router, userDetailsLoading, userDetails?.SetupStep)
  }, [userDetails, userDetailsLoading])

  return <div>community</div>
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
