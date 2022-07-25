import { BeakerIcon } from '@heroicons/react/outline'
import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import AutomationCards from 'components/Automation/AutomationCards'
import AutomationHeader from 'components/Automation/AutomationHeader'
import SetupAutomation from 'components/Automation/SetupAutomation'
import Timer from 'components/Automation/Timer'
import CMDPalette from 'components/CMDPalette'
import Dashbar from 'components/Dashbar'
import DashbarSmall from 'components/DashbarSmall'
import DashHeadSmall from 'components/Dashboard/DashHeadSmall'
import MainSpinner from 'components/spinners/MainSpinner'
import Taskover from 'components/Taskover'
import useAutomationDetails from 'hooks/automation/useAutomationDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ActionType } from 'types/CMDPalette'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const { theme } = useTheme()
  const { userDetails } = useUserDetails(user.id)
  const { automationDetails, automationDetailsLoading } = useAutomationDetails(
    userDetails?.UserID,
  )

  const [mounted, setMounted] = useState(false)
  const [showDashBar, setShowDashBar] = useState(true)
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (automationDetailsLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <BeakerIcon className="w-24 h-24" />
        <MainSpinner size={SpinnerSizes.medium} />
      </div>
    )
  }

  if (!automationDetails?.RefreshToken) return <SetupAutomation />

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
      <Toaster />
      <div className="min-h-full">
        <Dashbar
          showDashBar={showDashBar}
          setShowDashBar={setShowDashBar}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          cmdPaletteOpen={cmdPaletteOpen}
          setCmdPaletteOpen={setCmdPaletteOpen}
        />
        <div
          className={classNames({ 'lg:pl-56': showDashBar }, 'flex flex-col')}
        >
          <AutomationHeader
            showDashBar={showDashBar}
            setShowDashBar={setShowDashBar}
          />
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
          <Timer />
          <AutomationCards />
          <Taskover />
          <CMDPalette
            include={[ActionType.JUMPTO, ActionType.SCHOOL]}
            open={cmdPaletteOpen}
            setOpen={setCmdPaletteOpen}
          />
        </div>
      </div>
    </SkeletonTheme>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
