import CMDPalette from 'components/CMDPalette'
import DashBar from 'components/Dashbar'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import FlowList from 'components/Dashboard/FlowList'
import FlowListSmall from 'components/Dashboard/FlowListSmall'
import Pinned from 'components/Dashboard/Pinned'
import DashHeadSmall from 'components/DashHeadSmall'
import Taskover from 'components/Taskover'
import { useAuth } from 'contexts/AuthContext'
import useUserDetails from 'hooks/useUserDetails'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface userDetailsInterface {
  users: []
}

export default function Example() {
  const [searchValue, setSearchValue] = useState('')
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    user === null ? router.push('/login') : null
  })

  const { userDetails, isLoading, isError } = useUserDetails(user.id)

  if (isLoading) return <p>loading</p>
  if (isError) return <p>error</p>
  if (userDetails === undefined) router.push('/setup')

  return (
    <div className="min-h-full">
      <DashBar searchValue={searchValue} setSearchValue={setSearchValue} />
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
