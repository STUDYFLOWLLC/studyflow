/* eslint-disable no-unused-expressions */
import classnames from 'classnames'
import BigProfileButton from 'components/buttons/BigProfileButton'
import CoursesNav from 'components/Dashbar/CourseNavs'
import LogoHeader from 'components/Dashbar/LogoHeader'
import MainNavs from 'components/Dashbar/MainNavs'
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import DashSearch from './DashSearch'

interface DashProps {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  loading: boolean
}

export default function index(props: DashProps) {
  const { searchValue, setSearchValue, loading } = props
  const { theme, setTheme } = useTheme()

  useHotkeys(
    'cmd+l',
    (e) => {
      e.preventDefault()
      theme === 'light' ? setTheme('dark') : setTheme('light')
    },
    [theme],
  )

  return (
    <div
      className={classnames(
        { 'bg-slate-100': theme === 'light' },
        { 'bg-base-200': theme === 'dark' },
        'hidden lg:flex lg:flex-col lg:w-56 lg:fixed lg:inset-y-0 lg:pt-5 lg:pb-4',
      )}
    >
      <LogoHeader />
      <div className="mt-6 h-0 flex-1 flex flex-col overflow-y-auto">
        {/* User account dropdown */}
        <BigProfileButton
          name="Jessy Schwartz"
          username="jschrawtz"
          pfpLink="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          loading={loading}
        />
        {/* Sidebar Search */}
        <DashSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        {/* Navigation */}
        <nav className="px-3 mt-6">
          <MainNavs />
          <CoursesNav loading={loading} />
        </nav>
      </div>
    </div>
  )
}
