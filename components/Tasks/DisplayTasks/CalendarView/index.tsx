import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import React from 'react'
import { TaskType } from 'types/Task'
import DayPopup from './DayPopup'

interface Props {
  user: User
}

const sameDate = (date1: Date | undefined, date2: Date | undefined) => {
  if (!date1 || !date2) return false
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}

export default function CalendarView({ user }: Props) {
  const [open, setOpen] = React.useState(false)

  const { userDetails } = useUserDetails(user.id)
  const { tasks } = useTasks(userDetails?.UserID)

  // Number of tasks Due on a given date
  const numDueTasks = (date: Date) =>
    tasks.filter(
      (task) =>
        !task.Completed &&
        task.DueDate?.substring(0, 10) === format(date, 'yyyy-MM-dd') &&
        task.Type === TaskType.DUE,
    ).length

  // Number of tasks Work-on on a given date
  const numWorkOnTasks = (date: Date) =>
    tasks.filter(
      (task) =>
        !task.Completed &&
        task.DueDate?.substring(0, 10) === format(date, 'yyyy-MM-dd') &&
        task.Type === TaskType.WORK_ON,
    ).length

  // Number of tasks Review on a given date
  const numReviewTasks = (date: Date) =>
    tasks.filter(
      (task) =>
        !task.Completed &&
        task.DueDate?.substring(0, 10) === format(date, 'yyyy-MM-dd') &&
        task.Type === TaskType.REVIEW,
    ).length

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

  return (
    <div className="flex">
      {/* Calendar Display */}
      <div className="grid gird-cols-2 w-full my-6 mx-4 h-full">
        <div className="flex justify-center mb-4">
          <button
            onClick={previousMonth}
            type="button"
            className="text-gray-400 hover:text-gray-800"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-7 w-7" aria-hidden="true" />
          </button>
          <h2 className="text-2xl font-semibold text-gray-900 mx-6">
            {format(firstDayCurrentMonth, 'MMM yyyy')}
          </h2>
          <button
            onClick={nextMonth}
            type="button"
            className="text-gray-400 hover:text-gray-800"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        <div className="isolate grid grid-cols-7 text-center text-xl text-gray-500 mb-2">
          <div>S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>
        <div className="grid grid-cols-7 text-xl border-b border-l">
          {days.map((day) => (
            <div
              key={day.toString()}
              className="flex flex-col border-t border-r h-20"
            >
              <button
                type="button"
                onClick={() => {
                  setDateToDisplay(day)
                  setOpen(true)
                }}
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
                  'h-7 w-7 mt-0.5 ml-0.5 text-sm border border-transparent rounded-full p-0.5',
                )}
              >
                <time dateTime={format(day, 'yyyy-MM-dd')}>
                  {format(day, 'd')}
                </time>
              </button>
              <div className="text-xs ml-2">
                {numWorkOnTasks(day) > 0 && (
                  <div className="text-cyan-500">
                    {numWorkOnTasks(day)} Work-on
                  </div>
                )}
                {numDueTasks(day) > 0 && (
                  <div className="text-orange-500">{numDueTasks(day)} Due</div>
                )}
                {numReviewTasks(day) > 0 && (
                  <div className="text-purple-500">
                    {numReviewTasks(day)}{' '}
                    {numReviewTasks(day) > 1 ? 'Reviews' : 'Review'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <DayPopup
        dateToDisplay={dateToDisplay}
        user={user}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}
