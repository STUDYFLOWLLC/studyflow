import BigProfileButton from 'components/buttons/BigProfileButton'
import CoursesNav from 'components/Dashbar/CourseNavs'
import LogoHeader from 'components/Dashbar/LogoHeader'
import MainNavs from 'components/Dashbar/MainNavs'
import { Dispatch, SetStateAction } from 'react'
import DashSearch from './DashSearch'

interface DashProps {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export default function index(props: DashProps) {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-56 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100">
      <LogoHeader />
      <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
        {/* User account dropdown */}
        <BigProfileButton
          name="Jessy Schwartz"
          username="jschrawtz"
          pfpLink="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
        />
        {/* Sidebar Search */}
        <DashSearch
          searchValue={props.searchValue}
          setSearchValue={props.setSearchValue}
        />
        {/* Navigation */}
        <nav className="px-3 mt-6">
          <MainNavs />
          <CoursesNav />
        </nav>
      </div>
    </div>
  )
}
