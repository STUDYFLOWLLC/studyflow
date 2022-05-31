import classnames from 'classnames'
import ClassSearch from 'components/Forms/ClassSearch'
import SchoolSearch from 'components/Forms/SchoolSearch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

export default function index() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <SkeletonTheme
      baseColor={classnames(
        { '#ebebeb': theme === 'light' },
        { '#202020': theme === 'dark' },
      )}
      highlightColor={classnames(
        { '#f5f5f5': theme === 'light' },
        { '#444': theme === 'dark' },
      )}
    >
      <div className="w-full flex flex-col items-center">
        <SchoolSearch />
        <ClassSearch />
      </div>
    </SkeletonTheme>
  )
}
