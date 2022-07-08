import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import CMDPalette from 'components/CMDPalette'
import Dashbar from 'components/Dashbar'
import DashbarSmall from 'components/DashbarSmall'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import DashHeadSmall from 'components/Dashboard/DashHeadSmall'
import FlowListSmall from 'components/Dashboard/FlowListSmall'
import Pinned from 'components/Dashboard/Pinned'
import FlowModal from 'components/Flow/FlowModal'
import FlowTable from 'components/FlowTable'
import Taskover from 'components/Taskover'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { FlowType } from 'types/Flow'
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
  const { coursesOnTerm, coursesOnTermLoading, mutateCoursesOnTerm } =
    useCoursesOnTerm(userDetails?.FK_Terms?.[0]?.TermID)

  /* eslint-enable */
  const [mounted, setMounted] = useState(false)
  const [showDashBar, setShowDashBar] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [flowModalOpen, setFlowModalOpen] = useState(false)
  const [createFlowAs, setCreateFlowAs] = useState<FlowType | null>(null)
  const [currentFlow, setCurrentFlow] = useState<string>('')

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
      <Dashbar
        showDashBar={showDashBar}
        setShowDashBar={setShowDashBar}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <div className={classNames({ 'lg:pl-56': showDashBar }, 'flex flex-col')}>
        <DashHeadSmall
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSidebarOpen={setSidebarOpen}
        />
        <DashbarSmall
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <main className="flex-1">
          <DashHeadBig
            pageDisplayed="Home"
            showDashBar={showDashBar}
            setShowDashBar={setShowDashBar}
            flowModalOpen={flowModalOpen}
            setFlowModalOpen={setFlowModalOpen}
            setCreateFlowAs={setCreateFlowAs}
          />
          <Pinned />
          <FlowListSmall />
          <FlowTable
            setFlowModalOpen={setFlowModalOpen}
            setCurrentFlow={setCurrentFlow}
          />
        </main>
      </div>
      <Taskover />
      <CMDPalette />
      <FlowModal
        isOpen={flowModalOpen}
        setIsOpen={setFlowModalOpen}
        firstCourseOnTermId={coursesOnTerm?.[0]?.CourseOnTermID}
        flowId={currentFlow}
        setCurrentFlow={setCurrentFlow}
        createAs={createFlowAs}
      />
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
