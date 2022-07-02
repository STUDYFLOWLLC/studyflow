import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import AddTask from 'components/Tasks/AddTask'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  formatISO,
  getDay,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import React from 'react'
import BasicDisplayTasks from '../BasicDisplayTasks'

const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]

interface Props {
  user: User
  coursesOnTerm: CourseOnTerm[]
  coursesOnTermLoading: boolean
}

const sameDate = (date1: Date | undefined, date2: Date | undefined) => {
  if (!date1 || !date2) return false
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}

export default function CalendarView({
  user,
  coursesOnTerm,
  coursesOnTermLoading,
}: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)

  // Today's date
  const today = startOfToday()

  // Current month
  const [currentMonth, setCurrentMonth] = React.useState(
    format(today, 'MMM-yyyy'),
  )
  // State of date that will show tasks displayed
  const [dateToDisplay, setDateToDisplay] = React.useState(today)

  // First day of current month
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  // Days of current month
  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  // Previous month
  const previousMonth = () => {
    const firstDayLastMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayLastMonth, 'MMM-yyyy'))
  }

  // Next month
  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  const numTasks = tasks.filter(
    (task) =>
      !task.Completed &&
      task.DueDate?.substring(0, 10) ===
        formatISO(dateToDisplay).substring(0, 10),
  ).length

  return (
    <div className="flex">
      <div className="w-1/2 mt-16 px-6 border-r border-gray-400">
        {/* Header */}
        <div className="mb-4">
          <span className="mt-4 text-xl mr-2">
            {dateToDisplay.toDateString().substring(0, 10)}
          </span>
          <span className="text-sm text-gray-400">
            {numTasks} {numTasks === 1 ? 'Task' : 'Tasks'}
          </span>
        </div>

        {/* Display Task with Viewing Date */}
        <div>
          <BasicDisplayTasks
            tasks={tasks.filter(
              (task) =>
                task.DueDate?.substring(0, 10) ===
                formatISO(dateToDisplay).substring(0, 10),
            )}
          />
        </div>
        {/* Add Task, with correct Due Date */}
        <div>
          <AddTask
            user={user}
            coursesOnTerm={coursesOnTerm}
            coursesOnTermLoading={coursesOnTermLoading}
            dueDate={dateToDisplay}
          />
        </div>
      </div>

      {/* Calendar Display */}
      <div className="grid gird-cols-2 w-1/2 mt-14">
        <div className="flex items-center mb-4">
          <h2 className="flex-auto text-3xl font-semibold text-gray-900 ml-6">
            {format(firstDayCurrentMonth, 'MMM yyyy')}
          </h2>
          <button
            onClick={previousMonth}
            type="button"
            className="flex flex-none items-center justify-center text-gray-400 hover:text-gray-800 mr-6"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-8 w-8" aria-hidden="true" />
          </button>
          <button
            onClick={nextMonth}
            type="button"
            className="flex flex-none items-center justify-center text-gray-400 hover:text-gray-800 mr-6"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="grid grid-cols-7 text-center text-xl text-gray-500 mb-2">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="grid grid-cols-7 text-xl">
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIdx > 6 && 'border-gray-200',
                dayIdx === 0 && colStartClasses[getDay(day)],
              )}
            >
              <button
                type="button"
                onClick={() => setDateToDisplay(day)}
                className={classNames(
                  sameDate(day, dateToDisplay) && 'text-white',
                  !sameDate(day, dateToDisplay) &&
                    isToday(day) &&
                    'text-primary',
                  !sameDate(day, dateToDisplay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    'text-gray-900',
                  !sameDate(day, dateToDisplay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    'text-gray-400',
                  sameDate(day, dateToDisplay) &&
                    isToday(day) &&
                    'bg-primary/70',
                  sameDate(day, dateToDisplay) &&
                    !isToday(day) &&
                    'bg-gray-900',
                  !sameDate(day, dateToDisplay) && 'hover:bg-gray-200',
                  (sameDate(day, dateToDisplay) || isToday(day)) &&
                    'font-semibold',
                  'flex w-14 h-14 mx-auto mb-5 items-center text-2xl justify-center rounded-full',
                )}
              >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                  {format(day, 'd')}
                </time>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
