import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import CMDPalette from 'components/CMDPalette'
import Dashbar from 'components/Dashbar'
import DashbarSmall from 'components/DashbarSmall'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import DashHeadSmall from 'components/Dashboard/DashHeadSmall'
import DashWelcome from 'components/Dashboard/DashWelcome'
import FlowListSmall from 'components/Dashboard/FlowListSmall'
import AssignmentsAndAssessments from 'components/Dashboard/Upcoming/AssignmentsAndAssessments'
import FlowModal from 'components/Flow/FlowModal'
import FlowTable from 'components/FlowTable'
import DashSetup from 'components/Setup/DashSetup'
import Taskover from 'components/Taskover'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { SkeletonTheme } from 'react-loading-skeleton'
import { FlowType } from 'types/Flow'
import { SetupSteps } from 'types/SetupSteps'

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
    setMounted(true)
    // setupRedirectHandler(router, userDetailsLoading, userDetails?.SetupStep)
  }, [])

  if (userDetailsError) return <p>error</p>

  if (!mounted) return null

  // if more than 24 hours since showing welcome message, show it again
  const shouldShowWelcomeMessageBasedOnTime =
    new Date().getTime() -
      new Date(userDetails?.FK_Settings?.LastSeenWelcomeMessageAt).getTime() >
    60 * 1000 * 60 * 24

  return (
    <SkeletonTheme
      baseColor={classNames(
        { '#ebebeb': theme === 'light' },
        { '#303D50': theme === 'dark' },
      )}
      highlightColor={classNames(
        { '#f5f5f5': theme === 'light' },
        { '#5C7599': theme === 'dark' },
      )}
    >
      <div className="min-h-full">
        <Dashbar
          showDashBar={showDashBar}
          setShowDashBar={setShowDashBar}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <div
          className={classNames({ 'lg:pl-56': showDashBar }, 'flex flex-col')}
        >
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

          {(!userDetails || userDetails.SetupStep === SetupSteps.COMPLETE) && (
            <main className="flex-1">
              <DashHeadBig
                pageDisplayed="Home"
                showDashBar={showDashBar}
                setShowDashBar={setShowDashBar}
                flowModalOpen={flowModalOpen}
                setFlowModalOpen={setFlowModalOpen}
                setCreateFlowAs={setCreateFlowAs}
              />
              {userDetails &&
                (!userDetails?.FK_Settings?.HasSeenWelcomeMessage ||
                  shouldShowWelcomeMessageBasedOnTime) && <DashWelcome />}
              {/* <Pinned /> */}
              <AssignmentsAndAssessments />
              <FlowListSmall />
              <FlowTable
                setFlowModalOpen={setFlowModalOpen}
                setCurrentFlow={setCurrentFlow}
              />
            </main>
          )}
          {userDetails && userDetails.SetupStep !== SetupSteps.COMPLETE && (
            <main className="flex-1">
              <DashHeadBig
                disabled
                pageDisplayed="Welcome to Studyflow"
                showDashBar={showDashBar}
                setShowDashBar={setShowDashBar}
                flowModalOpen={flowModalOpen}
                setFlowModalOpen={setFlowModalOpen}
                setCreateFlowAs={setCreateFlowAs}
              />
              <DashSetup />
            </main>
          )}
        </div>
        <Taskover />
        <CMDPalette />
        <FlowModal
          isOpen={flowModalOpen}
          setIsOpen={setFlowModalOpen}
          firstCourse={coursesOnTerm?.[0]}
          flowId={currentFlow}
          setCurrentFlow={setCurrentFlow}
          createAs={createFlowAs}
        />
      </div>
    </SkeletonTheme>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
