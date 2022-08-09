import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import Dashbar from 'components/Dashbar'
import DashbarSmall from 'components/DashbarSmall'
import DashHeadSmall from 'components/Dashboard/DashHeadSmall'
import InputDefaultVisibility from 'components/Settings/Sharing/InputDefaultVisibility'
import InputPrivateGroup from 'components/Settings/Sharing/InputPrivateGroup'
import FriendsDisplay from 'components/Social/Friends/FriendsDisplay'
import StudentSearcher from 'components/Social/Friends/StudentSearcher'
import { useState } from 'react'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const [showDashBar, setShowDashBar] = useState(true)
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="min-h-full prose max-w-none">
      <Dashbar
        showDashBar={showDashBar}
        setShowDashBar={setShowDashBar}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        cmdPaletteOpen={cmdPaletteOpen}
        setCmdPaletteOpen={setCmdPaletteOpen}
      />
      <div
        className={classNames(
          { 'lg:pl-56': showDashBar },
          'flex flex-col w-full',
        )}
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
        <StudentSearcher />
        <FriendsDisplay />
        {/* <FriendsSearcher /> */}
        <div className="border w-4/5 mx-auto rounded-md p-2 my-6">
          <h3 className="m-0 p-0">Your social settings</h3>
          <p>
            Studyflow takes privacy and cheating seriously. Never share
            sensitive material on Studyflow.
          </p>
          <div className="flex justify-around items-center">
            <InputPrivateGroup />
            <InputDefaultVisibility />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
