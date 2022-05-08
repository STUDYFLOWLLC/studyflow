import SpinnerPage from 'components/spinners/SpinnerPage'
import { useAuth } from 'contexts/AuthContext'
import useUserDetails from 'hooks/useUserDetails'
import { useRouter } from 'next/router'

export default function index() {
  const router = useRouter()
  const { user } = useAuth()
  if (!user) return null
  const { userDetails, isLoading, isError } = useUserDetails(user.email)
  if (!isLoading && userDetails === undefined) router.push('/setup')
  if (!isLoading && userDetails !== undefined) router.push('/dash')

  return <SpinnerPage />
}
