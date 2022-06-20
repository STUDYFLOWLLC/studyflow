import { PlusCircleIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import CourseLine from 'components/Dashbar/CourseLine'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import Skeleton from 'react-loading-skeleton'

export interface CourseDisplay {
  name: string
  href: string
  bgColorClass: string
  loading: boolean
}

const fakeCourse: CourseOnTerm = {
  CourseOnTermID: 0,
  Color: '',
  Nickname: '',
  FK_Course: {
    Code: '',
    Term: '',
    Title: '',
    FK_Professor: {
      Name: '',
      Email: '',
    },
  },
}

const reorder = (
  list: CourseDisplay[],
  startIndex: number,
  endIndex: number,
) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export default function CourseNavs() {
  const { theme } = useTheme()
  const { user, error } = useUser()
  const { userDetails, userDetailsLoading } = useUserDetails(user?.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )
  const [teams, setTeams] = useState<CourseDisplay[]>([
    {
      name: 'Linear Algebra',
      href: '#',
      bgColorClass: 'bg-indigo-500',
      loading: coursesOnTermLoading,
    },
    {
      name: '2110',
      href: '#',
      bgColorClass: 'bg-green-500',
      loading: coursesOnTermLoading,
    },
    {
      name: 'Discrete',
      href: '#',
      bgColorClass: 'bg-orange-500',
      loading: coursesOnTermLoading,
    },
    {
      name: 'Cog Sci',
      href: '#',
      bgColorClass: 'bg-blue-500',
      loading: coursesOnTermLoading,
    },
    {
      name: 'Bio',
      href: '#',
      bgColorClass: 'bg-yellow-500',
      loading: coursesOnTermLoading,
    },
  ])
  const [mounted, setMounted] = useState(false)

  const onEnd = (result: DropResult) => {
    const { destination, source } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const newTeams: CourseDisplay[] = reorder(
      teams,
      result.source.index,
      result.destination ? result.destination.index : 0,
    )

    setTeams(newTeams)
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="mt-6">
      <div className="w-100 flex items-center justify-between">
        <div>
          <p className="px-2 text-xs font-semibold text-gray-500 tracking-wider">
            Courses
          </p>
        </div>
        <PlusCircleIcon
          className="text-gray-500 cursor-pointer"
          style={{ width: '1.125rem' }}
        />
      </div>
      {coursesOnTermLoading &&
        [1, 2, 3, 4].map((_) => (
          <div
            key={_}
            className={classNames(
              {
                'text-gray-700 hover:text-gray-900 hover:bg-gray-50':
                  theme === 'light',
              },
              { 'hover:bg-slate-700': theme === 'dark' },
              'mt-1 space-y-1 group flex items-center justify-between px-2 py-1 text-sm font-medium rounded-md cursor-pointer',
            )}
          >
            <div
              className="flex self-center items-center"
              style={{ marginLeft: '0.15rem' }}
            >
              <Skeleton className="w-2.5 h-2.5 mr-4" circle />
              <Skeleton width={150} />
            </div>
          </div>
        ))}

      <DragDropContext onDragEnd={onEnd}>
        <Droppable droppableId="courses">
          {(provided) => (
            <div
              className="mt-1 space-y-1"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {!coursesOnTermLoading &&
                coursesOnTerm.map((course, index) => (
                  <CourseLine
                    key={course.FK_Course.Code}
                    index={index}
                    course={course}
                    loading={userDetailsLoading || coursesOnTermLoading}
                    current={false}
                  />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
