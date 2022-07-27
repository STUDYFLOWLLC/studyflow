/* eslint-disable jsx-a11y/label-has-associated-control */

import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import Dashbar from 'components/Dashbar'
import DashbarSmall from 'components/DashbarSmall'
import DashHeadSmall from 'components/Dashboard/DashHeadSmall'
import SettingsProfile from 'components/Settings/Profile'
import SettingsNavBig from 'components/Settings/SettingsNavBig'
import SettingsNavSmall from 'components/Settings/SettingsNavSmall'
import SettingsSharing from 'components/Settings/Sharing'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useHotkeys } from 'react-hotkeys-hook'

interface Props {
  user: User
}
export interface Tab {
  name: string
  handler: (param1?: any, ...params: any[]) => any
}

export default function Settings({ user }: Props) {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [showDashBar, setShowDashBar] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [activeTab, setActiveTab] = useState('Profile')

  const tabs: Tab[] = [
    { name: 'Profile', handler: () => setActiveTab('Profile') },
    { name: 'Sharing', handler: () => setActiveTab('Sharing') },
    { name: 'Notifications', handler: () => setActiveTab('Notifications') },
    { name: 'Plus', handler: () => setActiveTab('Plus') },
    { name: 'Export', handler: () => setActiveTab('Export') },
    { name: 'Danger', handler: () => setActiveTab('Danger') },
  ]

  useHotkeys(
    'cmd+l, ctrl+l',
    (e) => {
      e.preventDefault()
      // eslint-disable-next-line no-unused-expressions
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
    <>
      {/*
        This example requires updating your template:
        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Toaster />
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
          <div className="w-full max-w-3xl mx-auto flex flex-col md:px-8 xl:px-0">
            <div className="w-full relative mx-auto md:px-4 xl:px-0">
              <div className="w-full pt-10 pb-16">
                <div className="px-4 sm:px-6 md:px-0">
                  <h1 className="text-3xl font-extrabold">Settings</h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0 w-full">
                  <div className="py-6 w-full">
                    {/* Tabs */}
                    <SettingsNavSmall
                      tabs={tabs}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />
                    <SettingsNavBig
                      tabs={tabs}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                    />

                    <SettingsProfile activeTab={activeTab} />
                    <SettingsSharing activeTab={activeTab} />

                    {/* <div className="mt-10 divide-y divide-gray-200">
                      <SettingsInfo
                        title="Account"
                        description="manage how information is displayed on your account."
                      />
                      <div className="mt-6">
                        <dl className="divide-y divide-gray-200">
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-info">
                              Language
                            </dt>
                            <dd className="mt-1 flex text-sm sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">English</span>
                              <SettingsButton text="Update" />
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-info">
                              Date format
                            </dt>
                            <dd className="mt-1 flex text-sm sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">DD-MM-YYYY</span>
                              <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                <SettingsButton text="Update" />
                                <span
                                  className="text-gray-300"
                                  aria-hidden="true"
                                >
                                  |
                                </span>
                                <SettingsButton text="Remove" />
                              </span>
                            </dd>
                          </div>
                          <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
                          >
                            <Switch.Label
                              as="dt"
                              className="text-sm font-medium text-info"
                              passive
                            >
                              Automatic timezone
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm sm:mt-0 sm:col-span-2">
                              <Switch
                                checked={automaticTimezoneEnabled}
                                onChange={setAutomaticTimezoneEnabled}
                                className={classNames(
                                  { 'bg-primary': automaticTimezoneEnabled },
                                  {
                                    'bg-gray-200':
                                      !automaticTimezoneEnabled &&
                                      theme === 'light',
                                  },
                                  {
                                    'bg-gray-300':
                                      !automaticTimezoneEnabled &&
                                      theme === 'dark',
                                  },
                                  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-auto',
                                )}
                              >
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    automaticTimezoneEnabled
                                      ? 'translate-x-5'
                                      : 'translate-x-0',
                                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                                  )}
                                />
                              </Switch>
                            </dd>
                          </Switch.Group>
                        </dl>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
