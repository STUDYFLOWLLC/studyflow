import { School } from '@prisma/client'
import { User } from '@supabase/supabase-js'
import classnames from 'classnames'
import CourseSearch from 'components/Forms/Course/CourseSearch'
import SchoolInfo from 'components/Setup/EnterEducation/SchoolInfo'
import TermCreate from 'components/Setup/EnterEducation/TermCreate'
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

  console.log(userDetails)

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
          userDetails.FK_Terms.length === 0) && (
          <div className="w-full pl-2 mt-2">
            <p className="w-full text-left text-lg">1. Create a term</p>
            <TermCreate
              user={user}
              selectedSchool={selectedSchool}
              setHasCreatedTerm={setHasCreatedTerm}
            />
          </div>
        )}
        <p className="w-full text-left pl-2 mt-2">
          Add courses to {userDetails.FK_Terms[0]?.TermName}{' '}
          {userDetails.FK_Terms[0]?.TermType}
        </p>
        <CourseSearch selectedSchool={selectedSchool} />
      </div>
    </SkeletonTheme>
  )
}
