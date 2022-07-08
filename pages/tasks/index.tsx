/* eslint-disable no-case-declarations */
import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import CMDPalette from 'components/CMDPalette'
import DashBar from 'components/Dashbar'
import HideButton from 'components/Dashbar/HideButton'
import DashbarSmall from 'components/DashbarSmall'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import DashHeadSmall from 'components/Dashboard/DashHeadSmall'
import Taskover from 'components/Taskover'
import DisplayTasks from 'components/Tasks/DisplayTasks'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const [showDashBar, setShowDashBar] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [taskView, setTaskView] = useState('Today')

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
      {!showDashBar && (
        <HideButton direction="show" setShowDashBar={setShowDashBar} />
      )}
      <div className="min-h-full">
        <DashBar
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
          <main className="flex-1">
            <DashHeadBig
              pageDisplayed="TASKS"
              showDashBar={showDashBar}
              setShowDashBar={setShowDashBar}
              setTaskView={setTaskView}
              taskView={taskView}
              // Charles I added these for the dashboard if you ever want to open a flow from a tas
              // then you will have to implement these and the flow modal. just talk to me about
              // it if you ever want to and we can do it together.
              flowModalOpen={false}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              setFlowModalOpen={() => {}}
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              setCreateFlowAs={() => {}}
            />
          </main>
        </div>
        <Taskover />
        <CMDPalette />
      </div>
      <div className={classNames({ 'lg:pl-56': showDashBar })}>
        <DisplayTasks user={user} taskView={taskView} />
      </div>
    </>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
