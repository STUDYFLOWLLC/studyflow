import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classnames from 'classnames'
import CMDPalette from 'components/CMDPalette'
import DashBar from 'components/Dashbar'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import FlowListSmall from 'components/Dashboard/FlowListSmall'
import Pinned from 'components/Dashboard/Pinned'
import DashHeadSmall from 'components/DashHeadSmall'
import FlowTable from 'components/FlowTable'
import Taskover from 'components/Taskover'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import setupRedirectHandler from 'utils/setupRedirectHandler'

interface Props {
  user: User
}

export default function Dash({ user }: Props) {
  const { theme } = useTheme()
  const router = useRouter()

  /* eslint-disable */
  const { userDetails, userDetailsLoading, userDetailsError } = useUserDetails(
    user.id,
  )
  /* eslint-enable */
  const [mounted, setMounted] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setMounted(true)
    setupRedirectHandler(router, userDetailsLoading, userDetails?.SetupStep)
  }, [userDetails, userDetailsLoading])

  if (!mounted) return null
  if (userDetailsError) return <p>error</p>

  return (
    <SkeletonTheme
      baseColor={classnames(
        { '#ebebeb': theme === 'light' },
        { '#202020': theme === 'dark' },
      )}
      highlightColor={classnames(
        { '#f5f5f5': theme === 'light' },
        { '#444': theme === 'dark' },
      )}
    >
      <div className="min-h-full">
        <DashBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={!userDetails}
        />
        <div className="lg:pl-56 flex flex-col">
          <DashHeadSmall />
          <main className="flex-1">
            <DashHeadBig />
            <Pinned />
            <FlowListSmall />
            <FlowTable />
          </main>
        </div>
        <Taskover />
        <CMDPalette />
      </div>
    </SkeletonTheme>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
