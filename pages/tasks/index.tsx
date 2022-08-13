/* eslint-disable no-case-declarations */
import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import CMDPalette from 'components/CMDPalette'
import DashBar from 'components/Dashbar'
import DashbarSmall from 'components/DashbarSmall'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import DashHeadSmall from 'components/Dashboard/DashHeadSmall'
import NotThereYet from 'components/Misc/NotThereYet'
import Taskover from 'components/Taskover'
import DisplayTasks from 'components/Tasks/DisplayTasks'
import Head from 'next/head'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { ActionType } from 'types/CMDPalette'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const [showDashBar, setShowDashBar] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [taskView, setTaskView] = useState('Today')
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)

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

  return (
    <>
      <Head>
        <title>Tasks | Studyflow</title>
        <meta property="og:title" content="Tasks | Studyflow" key="title" />
      </Head>
      <NotThereYet />
      <div className="min-h-full hidden lg:block">
        <DashBar
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
            pageDisplayed="Tasks"
            showDashBar={showDashBar}
            setShowDashBar={setShowDashBar}
            setTaskView={setTaskView}
            taskView={taskView}
            // Charles I added these for the dashboard if you ever want to open a flow from a task
            // then you will have to implement these and the flow modal. just talk to me about
            // it if you ever want to and we can do it together.
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            setCreateFlowAs={() => {}}
          />
        </div>
        <Taskover />
        <CMDPalette
          include={[ActionType.JUMPTO]}
          open={cmdPaletteOpen}
          setOpen={setCmdPaletteOpen}
        />
      </div>
      <div className={classNames({ 'lg:pl-56': showDashBar })}>
        <DisplayTasks user={user} taskView={taskView} />
      </div>
    </>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
