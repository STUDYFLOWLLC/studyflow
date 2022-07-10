import { School } from '@prisma/client'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classnames from 'classnames'
import AddCourse from 'components/Setup/Education/AddCourse'
import SchoolInfo from 'components/Setup/Education/SchoolInfo'
import TermCreate from 'components/Setup/Education/TermCreate'
import LoadWithText from 'components/spinners/LoadWithText'
import useTermDetails from 'hooks/school/useTermDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'

interface Props {
  selectedSchool: School
}

export default function SchoolDisplay({ selectedSchool }: Props) {
  const { theme } = useTheme()
  const { user } = useUser()

  const { userDetails } = useUserDetails(user?.id)
  const { termDetails, termDetailsLoading } = useTermDetails(
    userDetails.FK_Terms?.[0]?.TermID,
  )

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (!selectedSchool.Name)
    <LoadWithText text="Loading school details" size={SpinnerSizes.medium} />

  if (termDetailsLoading) {
    return (
      <div
        className={classnames(
          { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
          { 'bg-slate-700': theme === 'dark' },
          'w-72 sm:w-96 flex flex-col justify-center items-center p-4 rounded mt-4 mb-0',
        )}
      >
        <SchoolInfo selectedSchool={selectedSchool} />
        <LoadWithText text="Loading term details" size={SpinnerSizes.medium} />
      </div>
    )
  }

  return (
    <div
      className={classnames(
        { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
        { 'bg-slate-700': theme === 'dark' },
        'w-72 sm:w-96 flex flex-col justify-center items-center p-4 rounded mt-4 mb-0',
      )}
    >
      <SchoolInfo selectedSchool={selectedSchool} />
      {termDetails.TermID === 0 ? (
        <TermCreate selectedSchool={selectedSchool} />
      ) : (
        <AddCourse selectedSchool={selectedSchool} />
      )}
    </div>
  )
}
