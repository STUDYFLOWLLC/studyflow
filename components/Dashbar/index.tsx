/* eslint-disable no-unused-expressions */
import { Transition } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import BigProfileButton from 'components/buttons/BigProfileButton'
import CourseNavs from 'components/Dashbar/CourseNavs'
import LogoHeader from 'components/Dashbar/LogoHeader'
import MainNavs from 'components/Dashbar/MainNavs'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { SkeletonTheme } from 'react-loading-skeleton'
import { SetupSteps } from 'types/SetupSteps'
import DashSearch from './DashSearch'

interface Props {
  showDashBar: boolean
  setShowDashBar: Dispatch<SetStateAction<boolean>>
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export default function index({
  showDashBar,
  setShowDashBar,
  searchValue,
  setSearchValue,
}: Props) {
  const { theme, setTheme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { coursesOnTerm, coursesOnTermLoading, mutateCoursesOnTerm } =
    useCoursesOnTerm(userDetails?.FK_Terms?.[0]?.TermID)

  const [mounted, setMounted] = useState(false)
  const [showHideButton, setShowHideButton] = useState(false)

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
      <Transition.Root show={showDashBar} as={Fragment}>
        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-200 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-out duration-200 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div
            className={classNames(
              {
                'blur-sm pointer-events-none transition-all duration-1000':
                  userDetails && userDetails?.SetupStep !== SetupSteps.COMPLETE,
              },
              { 'bg-slate-100': theme === 'light' },
              { 'bg-base-200': theme === 'dark' },
              'hidden h-full lg:flex lg:flex-col lg:w-56 lg:fixed lg:inset-y-0 lg:pt-5 lg:pb-4',
            )}
            onMouseEnter={() => setShowHideButton(true)}
            onMouseLeave={() => setShowHideButton(false)}
          >
            <LogoHeader
              showHideButton={showHideButton}
              setShowDashBar={setShowDashBar}
            />
            <div className="mt-4 h-full flex-1 flex flex-col overflow-y-auto">
              <BigProfileButton
                name={userDetails?.Name}
                username={userDetails?.Username}
                pfpLink={userDetails?.ProfilePictureLink}
                loading={userDetailsLoading}
              />
              <DashSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <nav className="px-3 mt-6">
                <MainNavs />
                <CourseNavs />
              </nav>
            </div>
          </div>
        </Transition.Child>
      </Transition.Root>
    </SkeletonTheme>
  )
}
