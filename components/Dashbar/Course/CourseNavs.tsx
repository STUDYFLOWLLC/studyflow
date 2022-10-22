import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import CourseLine from 'components/Dashbar/Course/CourseLine'
import { mutateCourseOnTermIndex } from 'hooks/school/mutateCourseOnTerm'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import Skeleton from 'react-loading-skeleton'
import { TOOLTIP_OFFSET } from 'types/Magic'
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
  const { user } = useUser()
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

    if (result.destination !== null && result.destination !== undefined) {
      const sourceIndex = result.source.index
      const destinationIndex = result.destination.index || 0

      const originalCourses = structuredClone(coursesOnTerm) // just so our mutators don't mess up which course is which

      if (sourceIndex > destinationIndex) {
        for (let i = destinationIndex; i < sourceIndex; i += 1) {
          console.log('moving', originalCourses[i].Nickname, 'down')
          mutateCourseOnTermIndex(
            originalCourses[i].CourseOnTermID,
            originalCourses[i].Index + 1,
          )
        }
      } else {
        for (let i = sourceIndex + 1; i <= destinationIndex; i += 1) {
          console.log('moving', originalCourses[i].Nickname, 'up')
          mutateCourseOnTermIndex(
            originalCourses[i].CourseOnTermID,
            originalCourses[i].Index - 1,
          )
        }
      }
      console.log(
        'moving',
        originalCourses[sourceIndex].Nickname,
        'to',
        destinationIndex,
      )
      mutateCourseOnTermIndex(
        originalCourses[sourceIndex].CourseOnTermID,
        destinationIndex,
      )
    }
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
        <div className="w-full flex items-center text-info justify-between">
          <div>
            <p className="px-2 text-xs font-semibold tracking-wider">Courses</p>
          </div>
          <Tippy
            content="Edit your courses"
            delay={[1000, 100]}
            offset={TOOLTIP_OFFSET}
            placement="right"
          >
            <PencilSquareIcon
              className="cursor-pointer w-4 mb-0.5 hover:text-primary transition-all"
              onClick={() => {
                if (!coursesOnTermLoading) setCourseModalOpen(true)
              }}
            />
          </Tippy>
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
