import { LockClosedIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import SetupHeader from '../Header'
import IncompleteProfile from '../Profile/IncompleteProfile'

export default function DashProfileSetup() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [begun, setBegun] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (begun) {
    return (
      <div>
        <SetupHeader step={0} />
        <IncompleteProfile />
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center prose mx-auto">
      <h1 className="font-bold text-center my-8">
        Welcome to the Studyflow open beta
      </h1>
      <div
        className={classNames(
          { 'text-gray-400': theme === 'light' },
          { 'text-gray-200': theme === 'dark' },
          'w-16 h-16 transition-all duration-1000',
        )}
      >
        <LockClosedIcon />
      </div>
      <p className="text-center">
        To unlock dashboard, flows, task managing, and social learning, please
        complete our brief setup process. Here you will setup your profile,
        enter the courses your are taking this semester, and find classmates
        that are using Studyflow.
      </p>
      <button
        type="button"
        className="text-md bg-primary mx-4 text-gray-800 inline-flex justify-center rounded-md border border-transparent px-4 py-2 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        onClick={() => {
          setBegun(true)
        }}
      >
        Begin Setup
      </button>
      <p className="m-2">Setup takes approximately 5 minutes.</p>
    </div>
  )
}
