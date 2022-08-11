import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import AddTask from 'components/Tasks/AddTask'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import useCoursesOnTerm, { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import {
  useCompletedTaskCount,
  useUncompletedTaskCount,
} from 'hooks/tasks/useTaskCount'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import bgToTextColor from 'utils/bgToTextColor'

interface Props {
  course: CourseOnTerm
  user: User
}

export default function CourseListDropdown({ course, user }: Props) {
  const { theme } = useTheme()
  const { userDetails } = useUserDetails(user.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [index, setIndex] = useState(0)
  const { tasks, tasksLoading } = useTasks(
    userDetails?.UserID,
    course.CourseOnTermID,
    index,
  )
  const { completedTaskCount, completedTaskCountLoading } =
    useCompletedTaskCount(userDetails?.UserID, course.CourseOnTermID)
  const { uncompletedTaskCount, uncompletedTaskCountLoading } =
    useUncompletedTaskCount(userDetails?.UserID, course.CourseOnTermID)

  const [mounted, setMounted] = useState(false)
  const [showCompleted, setShowCompleted] = useState(false)
  const [showTasks, setShowTasks] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>
      {/* Class Header */}
      <div className="flex justify-between">
        <span className="flex items-center mb-2">
          {showTasks ? (
            <ChevronDownIcon
              className={classNames(
                { 'hover:bg-gray-200': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'w-9 h-9 border border-transparent bg-transparent hover:cursor-pointer rounded-md p-1.5 mr-1',
              )}
              onClick={() => setShowTasks(false)}
              onKeyDown={() => setShowTasks(false)}
            />
          ) : (
            <ChevronRightIcon
              className={classNames(
                { 'hover:bg-gray-200': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'w-9 h-9 border border-transparent bg-transparent hover:cursor-pointer rounded-md p-1.5 mr-1',
              )}
              onClick={() => setShowTasks(true)}
              onKeyDown={() => setShowTasks(true)}
            />
          )}
          <span
            className={classNames(bgToTextColor(course.Color), 'font-bold')}
          >
            {course.Nickname || course.FK_Course?.Code}
          </span>
          {showTasks && (
            <span
              className={classNames(
                { 'hover:bg-gray-200': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'cursor-pointer rounded-md px-1.5 py-0.5 mx-1 uppercase text-sm text-info',
              )}
              onClick={() => setShowCompleted(!showCompleted)}
              onKeyDown={() => setShowCompleted(!showCompleted)}
            >
              {showCompleted ? 'Hide' : 'Show'} Completed
            </span>
          )}
          <span className="ml-3">
            {tasksLoading && <MainSpinner size={SpinnerSizes.small} />}
          </span>
        </span>
        {!completedTaskCountLoading && !uncompletedTaskCountLoading && (
          <span className="text-xs text-gray-400 mt-3">
            {uncompletedTaskCount} Active, {completedTaskCount} Completed
          </span>
        )}
      </div>

      {/* Class Tasks */}
      {showTasks && (
        <BasicDisplayTasks
          tasks={tasks}
          index={index}
          setIndex={setIndex}
          groupBy={course.CourseOnTermID}
          showCompleted={showCompleted}
        />
      )}

      {/* Add Task */}
      {showTasks && (
        <div className="mb-4 mt-1">
          <AddTask
            user={user}
            coursesOnTerm={coursesOnTerm}
            coursesOnTermLoading={coursesOnTermLoading}
            courseOnTerm={course}
            groupBy={course.CourseOnTermID}
            index={index}
            setIndex={setIndex}
          />
        </div>
      )}

      {/* Divider */}
      <div className="border-b mt-2 mb-10" />
    </div>
  )
}
