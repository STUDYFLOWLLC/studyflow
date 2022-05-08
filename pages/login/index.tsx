import { useUser } from '@supabase/supabase-auth-helpers/react'
import Login from 'components/Auth/Login'

export default function index() {
  const { user, error } = useUser()

  return (
    <div className="h-screen">
      <Login />
    </div>
  )
}
