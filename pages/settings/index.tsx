/* eslint-disable jsx-a11y/label-has-associated-control */

import { Switch } from '@headlessui/react'
import classNames from 'classnames'
import SettingsButton from 'components/buttons/SettingsButton'
import Dashbar from 'components/Dashbar'
import DashbarSmall from 'components/DashbarSmall'
import DashHeadSmall from 'components/Dashboard/DashHeadSmall'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

const tabs = [
  { name: 'General', href: '#', current: true },
  { name: 'Security', href: '#', current: false },
  { name: 'Notifications', href: '#', current: false },
  { name: 'Plan', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
]

export default function Settings() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [showDashBar, setShowDashBar] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
    useState(false)

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
        <Dashbar
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
          <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
            <div className="relative max-w-5xl mx-auto md:px-4 xl:px-0">
              <div className="pt-10 pb-16">
                <div className="px-4 sm:px-6 md:px-0">
                  <h1 className="text-3xl font-extrabold">Settings</h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                  <div className="py-6">
                    {/* Tabs */}
                    <div className="lg:hidden">
                      <label htmlFor="selected-tab" className="sr-only">
                        Select a tab
                      </label>
                      <select
                        id="selected-tab"
                        name="selected-tab"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                        defaultValue={tabs.find((tab) => tab.current).name}
                      >
                        {tabs.map((tab) => (
                          <option key={tab.name}>{tab.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="hidden lg:block">
                      <div
                        className={classNames(
                          { 'border-gray-200': theme === 'light' },
                          { 'border-gray-500': theme === 'dark' },
                          'border-b',
                        )}
                      >
                        <nav className="-mb-px flex justify-between">
                          {tabs.map((tab) => (
                            <a
                              key={tab.name}
                              href={tab.href}
                              className={classNames(
                                {
                                  'border-primary text-primary': tab.current,
                                },
                                {
                                  'border-transparent hover:border-gray-300':
                                    !tab.current && theme === 'light',
                                },
                                {
                                  'border-transparent hover:border-gray-300':
                                    !tab.current && theme === 'dark',
                                },
                                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                              )}
                            >
                              {tab.name}
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>

                    {/* Description list with inline editing */}
                    <div className="mt-10 divide-y divide-gray-200">
                      <div className="space-y-1">
                        <h3 className="text-lg leading-6 font-medium">
                          Profile
                        </h3>
                        <p className="max-w-2xl text-sm text-info">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                      </div>
                      <div className="mt-6">
                        <dl className="divide-y divide-gray-200">
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm text-info font-medium">
                              Name
                            </dt>
                            <dd className="mt-1 flex text-sm sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">Chelsea Hagon</span>
                              <SettingsButton text="Update" />
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-info">
                              Photo
                            </dt>
                            <dd className="mt-1 flex text-sm sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                  alt=""
                                />
                              </span>
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
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                            <dt className="text-sm font-medium text-info">
                              Email
                            </dt>
                            <dd className="mt-1 flex text-sm sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                chelsea.hagon@example.com
                              </span>
                              <SettingsButton text="Update" />
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                            <dt className="text-sm font-medium text-info">
                              Job title
                            </dt>
                            <dd className="mt-1 flex text-sm sm:mt-0 sm:col-span-2">
                              <span className="flex-grow">
                                Human Resources Manager
                              </span>
                              <SettingsButton text="Update" />
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div className="mt-10 divide-y divide-gray-200">
                      <div className="space-y-1">
                        <h3 className="text-lg leading-6 font-medium">
                          Account
                        </h3>
                        <p className="max-w-2xl text-sm text-info">
                          Manage how information is displayed on your account.
                        </p>
                      </div>
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
                          <Switch.Group
                            as="div"
                            className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
                          >
                            <Switch.Label
                              as="dt"
                              className="text-sm font-medium text-info"
                              passive
                            >
                              Auto-update applicant data
                            </Switch.Label>
                            <dd className="mt-1 flex text-sm sm:mt-0 sm:col-span-2">
                              <Switch
                                checked={autoUpdateApplicantDataEnabled}
                                onChange={setAutoUpdateApplicantDataEnabled}
                                className={classNames(
                                  {
                                    'bg-primary':
                                      autoUpdateApplicantDataEnabled,
                                  },
                                  {
                                    'bg-gray-200':
                                      !autoUpdateApplicantDataEnabled &&
                                      theme === 'light',
                                  },
                                  {
                                    'bg-gray-300':
                                      !autoUpdateApplicantDataEnabled &&
                                      theme === 'dark',
                                  },
                                  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:ml-auto',
                                )}
                              >
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    autoUpdateApplicantDataEnabled
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
                    </div>
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
