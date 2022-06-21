import { CalendarIcon, CollectionIcon } from '@heroicons/react/outline'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import CourseDropdownHeader from 'components/Tasks/TasksHeader/CourseDropdownHeader'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useTermDetails from 'hooks/school/useTermDetails'
import useUserDetails from 'hooks/useUserDetails'

interface Props {
  user: User
  viewing: string
  setViewing: (viewing: string) => void
  coursesOnTerm: CourseOnTerm[]
  coursesOnTermLoading: boolean
}

export default function TaskHeader({
  user,
  viewing,
  setViewing,
  coursesOnTerm,
  coursesOnTermLoading,
}: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { termDetails, termDetailsLoading } = useTermDetails(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  return (
    <div className="flex justify-center">
      <div className="sm:w-1/2 w-5/6 flex justify-around border p-2 mt-6 rounded-md">
        <span
          className={classNames(
            {
              'bg-primary/50': viewing === 'Today',
            },
            {
              'bg-white hover:bg-gray-50 hover:cursor-pointer':
                viewing !== 'Today',
            },
            'inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-1 text-sm font-medium text-gray-700',
          )}
          onClick={() => setViewing('Today')}
          onKeyDown={() => setViewing('Today')}
        >
          <CalendarIcon className="w-5 mr-1" />
          Today
        </span>
        <span
          className={classNames(
            {
              'bg-primary/50': viewing === 'Upcoming',
            },
            {
              'bg-white hover:bg-gray-50 hover:cursor-pointer':
                viewing !== 'Upcoming',
            },
            'inline-flex items-center justify-center rounded-md border border-gray-300 shadow-sm px-4 py-1 text-sm font-medium text-gray-700',
          )}
          onClick={() => setViewing('Upcoming')}
          onKeyDown={() => setViewing('Upcoming')}
        >
          <CollectionIcon className="w-5 mr-1" />
          Upcoming
        </span>
        <CourseDropdownHeader
          items={coursesOnTerm.map((course) => ({
            color: course.Color,
            name: course.Nickname || course.FK_Course.Code,
            handler: () => setViewing(course.Nickname || course.FK_Course.Code),
          }))}
          loading={coursesOnTermLoading}
          setViewing={setViewing}
          viewing={viewing}
          viewingColor={
            coursesOnTerm.find((course) => course.Nickname === viewing)
              ?.Color || 'bg-primary/50'
          }
        />
      </div>
    </div>
  )
}
