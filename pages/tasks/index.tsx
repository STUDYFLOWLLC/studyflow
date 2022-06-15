import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import DashBar from 'components/Dashbar'
import TaskHeader from 'components/Tasks/TaskHeader'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const [searchValue, setSearchValue] = useState('')
  const [viewing, setViewing] = useState('Today')

  return (
    <div className="min-h-full">
      <DashBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={!userDetails}
      />
      <div className="flex-1">
        <TaskHeader user={user} viewing={viewing} setViewing={setViewing} />
      </div>
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
