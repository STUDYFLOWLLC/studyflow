import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import SchoolSearch from 'components/Forms/School/SchoolSearch'
import LoadWithText from 'components/spinners/LoadWithText'
import useSchoolDetails from 'hooks/school/useSchoolDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import { SpinnerSizes } from 'types/Loading'
import SchoolDisplay from '../Education/SchoolDisplay'
import SetupHeader from '../Header'
import SetupStepTitle from '../SetupStepTitle'

export default function DashEducationSetup() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { schoolDetails, schoolDetailsLoading } = useSchoolDetails(
    userDetails?.FK_SchoolID,
  )

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (schoolDetails) {
    return (
      <div className="w-full flex flex-col items-center">
        <SetupHeader />
        <SetupStepTitle title="Education" />
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
          <SchoolDisplay />
        </SkeletonTheme>
      </div>
    )
  }

  if (userDetailsLoading) {
    return (
      <div className="w-full flex flex-col items-center">
        <SetupHeader />
        <SetupStepTitle title="Education" />
        <LoadWithText
          text="Loading 1903 colleges and universities"
          size={SpinnerSizes.medium}
        />
      </div>
    )
  }

  if (!userDetails?.FK_SchoolID) {
    return (
      <div className="w-full flex flex-col items-center">
        <SetupHeader />
        <SetupStepTitle title="Education" />
        <SchoolSearch />
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      <SetupHeader />
      <SetupStepTitle title="Education" />
      <LoadWithText text="Loading school details" size={SpinnerSizes.medium} />
    </div>
  )
}
