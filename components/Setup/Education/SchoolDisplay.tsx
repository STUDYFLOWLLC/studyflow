import { School } from '@prisma/client'
import { User } from '@supabase/supabase-js'
import classnames from 'classnames'
import AddCourse from 'components/Setup/Education/AddCourse'
import SchoolInfo from 'components/Setup/Education/SchoolInfo'
import TermCreate from 'components/Setup/Education/TermCreate'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'

interface Props {
  user: User
  selectedSchool: School
}

export default function SchoolDisplay({ user, selectedSchool }: Props) {
  if (!selectedSchool.Name) return null

  const { theme } = useTheme()

  const { userDetails } = useUserDetails(user.id)
  const [mounted, setMounted] = useState(false)
  const [hasCreatedTerm, setHasCreatedTerm] = useState(false)

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
      <div
        className={classnames(
          { 'border-gray-300 border-2 bg-gray-50': theme === 'light' },
          { 'bg-slate-700': theme === 'dark' },
          'w-72 sm:w-96 flex flex-col justify-center items-center p-4 rounded mt-4 mb-0',
        )}
      >
        <SchoolInfo selectedSchool={selectedSchool} />
        {((!selectedSchool && !hasCreatedTerm) ||
          (userDetails && userDetails.FK_Terms.length === 0)) && (
          <div className="w-full pl-2 mt-2">
            <p className="w-full text-left text-lg">1. Create a term</p>
            <TermCreate
              user={user}
              selectedSchool={selectedSchool}
              setHasCreatedTerm={setHasCreatedTerm}
            />
          </div>
        )}
        {userDetails &&
          (hasCreatedTerm || userDetails.FK_Terms.length !== 0) && (
            <AddCourse user={user} selectedSchool={selectedSchool} />
          )}
      </div>
    </SkeletonTheme>
  )
}
