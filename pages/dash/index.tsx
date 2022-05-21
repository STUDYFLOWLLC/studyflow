import { User, withAuthRequired } from '@supabase/supabase-auth-helpers/nextjs'
import CMDPalette from 'components/CMDPalette'
import DashBar from 'components/Dashbar'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import FlowList from 'components/Dashboard/FlowList'
import FlowListSmall from 'components/Dashboard/FlowListSmall'
import Pinned from 'components/Dashboard/Pinned'
import DashHeadSmall from 'components/DashHeadSmall'
import Taskover from 'components/Taskover'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'

interface Props {
  user: User
}

export default function Example({ user }: Props) {
  const { userDetails, isLoading, isError } = useUserDetails(user.email)

  const [searchValue, setSearchValue] = useState('')

  if (isError) return <p>error</p>
  // if (userDetails === undefined) router.push('/setup')

  return (
    <div className="min-h-full">
      <DashBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={isLoading}
      />
      <div className="lg:pl-56 flex flex-col">
        <DashHeadSmall />
        <main className="flex-1">
          <DashHeadBig />
          <Pinned />
          <FlowListSmall />
          <FlowList />
        </main>
      </div>
      <Taskover />
      <CMDPalette />
    </div>
  )
}

export const getServerSideProps = withAuthRequired({ redirectTo: '/login' })
