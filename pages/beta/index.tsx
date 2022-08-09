import withPageAuth from '@supabase/supabase-auth-helpers/nextjs/utils/withPageAuth'
import classNames from 'classnames'
import { BetaDisplays } from 'components/BetaCenter/BetaNavbar'
import ContactUs from 'components/BetaCenter/ContactUs'
import ReportBug from 'components/BetaCenter/ReportBug/index'
import RequestFeature from 'components/BetaCenter/RequestFeature'
import Dashbar from 'components/Dashbar'
import DashbarSmall from 'components/DashbarSmall'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import DashHeadSmall from 'components/Dashboard/DashHeadSmall'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

export default function beta() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [showDashBar, setShowDashBar] = useState(true)
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [betaView, setBetaView] = useState<BetaDisplays>(
    BetaDisplays.REPORT_BUG,
  )

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

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
          cmdPaletteOpen={cmdPaletteOpen}
          setCmdPaletteOpen={setCmdPaletteOpen}
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

          <DashHeadBig
            pageDisplayed="Beta Center"
            showDashBar={showDashBar}
            setShowDashBar={setShowDashBar}
            betaView={betaView}
            setBetaView={setBetaView}
            // Charles I added these for the dashboard if you ever want to open a flow from a task
            // then you will have to implement these and the flow modal. just talk to me about
            // it if you ever want to and we can do it together.
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            setCreateFlowAs={() => {}}
          />
          {betaView === BetaDisplays.REPORT_BUG && <ReportBug />}
          {betaView === BetaDisplays.REQUEST_FEATURE && <RequestFeature />}
          {betaView === BetaDisplays.CONTACT_US && <ContactUs />}
        </div>
      </div>
    </SkeletonTheme>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
