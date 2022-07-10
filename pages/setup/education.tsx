import { School } from '@prisma/client'
import { withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import { User } from '@supabase/supabase-auth-helpers/react'
import classnames from 'classnames'
import SchoolSearch from 'components/Forms/School/SchoolSearch'
import SchoolDisplay from 'components/Setup/Education/SchoolDisplay'
import SetupHeader from 'components/Setup/Header'
import SetupStepTitle from 'components/Setup/SetupStepTitle'
import LoadWithText from 'components/spinners/LoadWithText'
import useSchoolDetails from 'hooks/school/useSchoolDetails'
import setUserSchool from 'hooks/setup/setUserSchool'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useHotkeys } from 'react-hotkeys-hook'
import { SkeletonTheme } from 'react-loading-skeleton'
import { SpinnerSizes } from 'types/Loading'
import setupRedirectHandler from 'utils/setupRedirectHandler'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const { userDetails, userDetailsLoading, mutateUserDetails } = useUserDetails(
    user.id,
  )
  const { schoolDetails, schoolDetailsLoading, mutateSchoolDetails } =
    useSchoolDetails(userDetails?.FK_SchoolID)

  const [mounted, setMounted] = useState(false)

  const updateSchoolinDB = async (school: School) => {
    mutateSchoolDetails(
      { school, mutate: true },
      {
        revalidate: false,
      },
    )
    mutateUserDetails(
      {
        ...userDetails,
        FK_SchoolID: school.SchoolID,
        mutate: true,
      },
      {
        revalidate: false,
      },
    )
    toast.success('School updated!')

    const newSchool = await setUserSchool(user.email || '', school.SchoolID)
    if (newSchool.Name === 'Error')
      return toast.error(
        'Could not update school. Please refresh and try again.',
      )
  }

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

  useEffect(() => {
    setMounted(true)
    setupRedirectHandler(router, userDetailsLoading, userDetails?.SetupStep)
  }, [userDetails, userDetailsLoading])

  if (!mounted) return null

  if (userDetailsLoading) {
    return (
      <div className="w-full flex flex-col items-center">
        <SetupHeader step={1} />
        <SetupStepTitle title="Education" />
        <LoadWithText
          text="Loading 1903 colleges and universities"
          size={SpinnerSizes.medium}
        />
      </div>
    )
  }

  if (!userDetails.FK_SchoolID) {
    return (
      <div className="w-full flex flex-col items-center">
        <SetupHeader step={1} />
        <SetupStepTitle title="Education" />
        <SchoolSearch
          selectedSchool={schoolDetails}
          updateSchoolinDB={updateSchoolinDB}
        />
      </div>
    )
  }

  if (!schoolDetailsLoading) {
    return (
      <div className="w-full flex flex-col items-center">
        <SetupHeader step={1} />
        <SetupStepTitle title="Education" />
        <SkeletonTheme
          baseColor={classnames(
            { '#ebebeb': theme === 'light' },
            { '#303D50': theme === 'dark' },
          )}
          highlightColor={classnames(
            { '#f5f5f5': theme === 'light' },
            { '#5C7599': theme === 'dark' },
          )}
        >
          <SchoolDisplay selectedSchool={schoolDetails} />
        </SkeletonTheme>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col items-center">
      <SetupHeader step={1} />
      <SetupStepTitle title="Education" />
      <LoadWithText text="Loading school details" size={SpinnerSizes.medium} />
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
