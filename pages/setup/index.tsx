import { withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classnames from 'classnames'
import SchoolSearch from 'components/Forms/SchoolSearch'
import SetupHeader from 'components/Setup/SetupHeader'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { SkeletonTheme } from 'react-loading-skeleton'

export default function index() {
  const { theme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)

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
        <SchoolSearch />
      </div>
    </SkeletonTheme>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
