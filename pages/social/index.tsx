import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import FriendsDisplay from 'components/Social/Friends/FriendsDisplay'
import FriendsSearcher from 'components/Social/Friends/FriendsSearcher'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  return (
    <div className="flex flex-col">
      social
      <FriendsDisplay />
      <FriendsSearcher />
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
