import { PlusCircleIcon } from '@heroicons/react/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classNames from 'classnames'
import CourseLine from 'components/Dashbar/Course/CourseLine'
import { mutateCourseOnTermIndex } from 'hooks/school/mutateCourseOnTerm'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import Skeleton from 'react-loading-skeleton'
import { SetupSteps } from 'types/SetupSteps'
import CourseModal from './CourseModal/CourseModal'
import FakeCourseNavs from './FakeCourseNavs'

export interface CourseDisplay {
  name: string
  href: string
  bgColorClass: string
  loading: boolean
}

const reorder = (
  list: CourseOnTerm[],
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
  const { coursesOnTerm, coursesOnTermLoading, mutateCoursesOnTerm } =
    useCoursesOnTerm(userDetails?.FK_Terms?.[0]?.TermID)

  const [mounted, setMounted] = useState(false)
  const [courseModalOpen, setCourseModalOpen] = useState(false)

  const onEnd = async (result: DropResult) => {
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

    const newTeams: CourseOnTerm[] = reorder(
      coursesOnTerm,
      result.source.index,
      result.destination ? result.destination.index : 0,
    )

    mutateCoursesOnTerm(
      { coursesOnTerm: newTeams, mutate: true },
      {
        revalidate: false,
      },
    )

    if (result.destination) {
      const sourceCourse = coursesOnTerm[result.source.index]
      const destinationCourse = coursesOnTerm[result.destination?.index || 0]
      await mutateCourseOnTermIndex(
        sourceCourse.CourseOnTermID,
        destinationCourse.Index,
      )
      await mutateCourseOnTermIndex(
        destinationCourse.CourseOnTermID,
        sourceCourse.Index,
      )
    }

    // setTeams(newTeams)
  }

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  if (userDetails && userDetails?.SetupStep === SetupSteps.PROFILE)
    return <FakeCourseNavs />

  return (
    <>
      <CourseModal
        open={
          courseModalOpen ||
          (!coursesOnTermLoading && coursesOnTerm?.length === 0)
        }
        setOpen={setCourseModalOpen}
      />
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
            onClick={() => {
              if (!coursesOnTermLoading) setCourseModalOpen(true)
            }}
          />
        </div>
        {coursesOnTerm &&
          coursesOnTerm.length === 0 &&
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
                {coursesOnTerm &&
                  coursesOnTerm.length !== 0 &&
                  coursesOnTerm.map((course, index) => (
                    <CourseLine
                      key={course.FK_Course?.Code}
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
    </>
  )
}
