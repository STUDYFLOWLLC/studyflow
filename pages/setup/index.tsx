import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classnames from 'classnames'
import SchoolSearch from 'components/Forms/SchoolSearch'
import CreateProfile from 'components/Setup/Profile/CreateProfile'
import SetupHeader from 'components/Setup/SetupHeader'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { SkeletonTheme } from 'react-loading-skeleton'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState(0)

  useHotkeys(
    'cmd+l, ctrl+l',
    (e) => {
      e.preventDefault()
      setTheme(theme === 'light' ? 'dark' : 'light')
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
      baseColor={classnames(
        { '#ebebeb': theme === 'light' },
        { '#313131': theme === 'dark' },
      )}
      highlightColor={classnames(
        { '#f5f5f5': theme === 'light' },
        { '#666': theme === 'dark' },
      )}
    >
      <div className="w-full flex flex-col items-center">
        <SetupHeader />
        {step === 0 && <CreateProfile user={user} setStep={setStep} />}
        {step === 1 && <SchoolSearch />}
      </div>
    </SkeletonTheme>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
