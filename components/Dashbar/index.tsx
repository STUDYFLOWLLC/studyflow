/* eslint-disable no-unused-expressions */
import classnames from 'classnames'
import BigProfileButton from 'components/buttons/BigProfileButton'
import CourseNavs from 'components/Dashbar/CourseNavs'
import LogoHeader from 'components/Dashbar/LogoHeader'
import MainNavs from 'components/Dashbar/MainNavs'
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import DashSearch from './DashSearch'

interface DashProps {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  loading: boolean
}

export default function index({
  searchValue,
  setSearchValue,
  loading,
}: DashProps) {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useHotkeys(
    'cmd+l, ctrl+l',
    (e) => {
      e.preventDefault()
      theme === 'light' ? setTheme('dark') : setTheme('light')
    },
    {
      enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
    },
    [theme],
  )

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

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
        <BigProfileButton
          name="Jessy Scwartz"
          username="jschrawtz"
          pfpLink="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
          loading={loading}
        />
        <DashSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <nav className="px-3 mt-6">
          <MainNavs />
          <CourseNavs />
        </nav>
      </div>
    </div>
  )
}
