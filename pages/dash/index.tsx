import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import CMDPalette from 'components/CMDPalette'
import DashBar from 'components/Dashbar'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import FlowListSmall from 'components/Dashboard/FlowListSmall'
import Pinned from 'components/Dashboard/Pinned'
import DashHeadSmall from 'components/DashHeadSmall'
import FlowTable from 'components/FlowTable'
import Taskover from 'components/Taskover'
import useUserDetails from 'hooks/useUserDetails'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import setupRedirectHandler from 'utils/setupRedirectHandler'

interface Props {
  user: User
}

export default function Dash({ user }: Props) {
  const router = useRouter()

  /* eslint-disable */
  const { userDetails, userDetailsLoading, userDetailsError } = useUserDetails(
    user.id,
  )
  /* eslint-enable */
  const [mounted, setMounted] = useState(false)
  const [showDashBar, setShowDashBar] = useState(true)
  const [searchValue, setSearchValue] = useState('')

  useHotkeys(
    'cmd+i, ctrl+i',
    (e) => {
      e.preventDefault()
      setShowDashBar(!showDashBar)
    },
    {
      enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
    },
    [showDashBar],
  )

  useEffect(() => {
    setupRedirectHandler(router, userDetailsLoading, userDetails?.SetupStep)
  }, [userDetails, userDetailsLoading])

  if (userDetailsError) return <p>error</p>

  return (
    <div className="min-h-full">
      <DashBar
        showDashBar={showDashBar}
        setShowDashBar={setShowDashBar}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className={classNames({ 'lg:pl-56': showDashBar }, 'flex flex-col')}>
        <DashHeadSmall />
        <main className="flex-1">
          <DashHeadBig
            showDashBar={showDashBar}
            setShowDashBar={setShowDashBar}
          />
          <Pinned />
          <FlowListSmall />
          <FlowTable />
        </main>
      </div>
      <Taskover />
      <CMDPalette />
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
