import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FlowSortOptions } from 'utils/flows/sortFlows'
import FlowSortPicker from './FlowSortPicker'
import FlowTableNav from './FlowTableNav'

export interface Tab {
  name: string
  active: boolean
  handler: () => void
}

interface Props {
  sortBy: FlowSortOptions
  setSortBy: (sortBy: FlowSortOptions) => void
  groupBy: number | 'All' | 'Trash'
  setGroupBy: (groupBy: number | 'All' | 'Trash') => void
}

export default function FlowTableHeader({
  sortBy,
  setSortBy,
  groupBy,
  setGroupBy,
}: Props) {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails } = useUserDetails(user?.id)
  const { coursesOnTerm } = useCoursesOnTerm(userDetails?.FK_Terms?.[0]?.TermID)

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const tabs: Tab[] = [
    {
      name: 'All',
      active: groupBy === 'All',
      handler: () => {
        setGroupBy('All')
      },
    },
  ].concat(
    coursesOnTerm
      ?.map((courseOnTerm) => ({
        name: courseOnTerm.Nickname || courseOnTerm.FK_Course.Code,
        active: groupBy === courseOnTerm.CourseOnTermID,
        handler: () => setGroupBy(courseOnTerm.CourseOnTermID),
      }))
      .concat([
        {
          name: 'Trash',
          active: groupBy === 'Trash',
          handler: () => setGroupBy('Trash'),
        },
      ]),
  )

  return (
    <thead
      className={classNames(
        {
          'border-gray-200 bg-gray-50 text-gray-500': theme === 'light',
        },
        'w-full border-b border-t',
      )}
    >
      <div className="flex items-center pl-5">
        <FlowTableNav tabs={tabs} />
        <FlowSortPicker sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <th className="hidden md:table-cell px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
        Date
      </th>
      <th className="hidden md:table-cell px-1 py-3 text-xs font-medium uppercase tracking-wider">
        Next Review
      </th>
      <td className="md:table-cell pr-6 py-3 text-right text-xs font-medium  uppercase tracking-wider" />
    </thead>
  )
}
