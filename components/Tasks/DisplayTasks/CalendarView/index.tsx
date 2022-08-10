import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import LoadWithText from 'components/spinners/LoadWithText'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isAfter,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
  startOfYesterday,
} from 'date-fns'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
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
  const { theme } = useTheme()
  const { userDetails } = useUserDetails(user.id)
  const { tasks, tasksLoading } = useTasks(userDetails?.UserID, 'All')

  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  // Number of tasks for each due-type on a given date. The completed if before the current date.
  const numDueTasksByType = (date: Date, type?: TaskType, past?: boolean) => {
    if (past) {
      return tasks.filter(
        (task) => task.Completed && sameDate(new Date(task.DueDate), date),
      ).length
    }
    if (!type)
      return tasks.filter(
        (task) => !task.Completed && sameDate(new Date(task.DueDate), date),
      ).length
    return tasks.filter(
      (task) =>
        !task.Completed &&
        sameDate(new Date(task.DueDate), date) &&
        task.Type === type,
    ).length
  }

  // Today's date
  const today = startOfToday()

  // Current month
  const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  // State of date that will show tasks displayed
  const [dateToDisplay, setDateToDisplay] = useState(today)

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

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex justify-center w-full">
      {tasksLoading ? (
        <LoadWithText
          size={SpinnerSizes.medium}
          text="Loading task calendar. This can take a while..."
        />
      ) : (
        <div className="grid gird-cols-2 w-full my-6 mx-4 h-full">
          <div className="flex justify-left mb-2">
            <h2 className="text-2xl font-semibold mr-4">
              {format(firstDayCurrentMonth, 'MMM yyyy')}
            </h2>
            <button
              onClick={previousMonth}
              type="button"
              className="text-info hover:text-gray-800 mr-4"
            >
              <ChevronLeftIcon className="h-7 w-7" aria-hidden="true" />
            </button>
            <button
              onClick={nextMonth}
              type="button"
              className="text-info hover:text-gray-800"
            >
              <ChevronRightIcon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <div className="isolate grid grid-cols-7 text-center text-xl text-info mb-2">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div className="grid grid-cols-7 text-xl border-b border-l">
            {days.map((day) => (
              <div
                key={day.toString()}
                className="cursor-pointer flex flex-col border-t border-r h-20"
                onClick={() => {
                  setDateToDisplay(day)
                  setOpen(true)
                }}
                onKeyDown={() => {
                  setDateToDisplay(day)
                  setOpen(true)
                }}
              >
                <div className="flex justify-center">
                  <button
                    type="button"
                    className={classNames(
                      sameDate(day, dateToDisplay) && 'text-white',
                      !sameDate(day, dateToDisplay) &&
                        isToday(day) &&
                        'text-primary',
                      !sameDate(day, dateToDisplay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-info',
                      sameDate(day, dateToDisplay) &&
                        isToday(day) &&
                        'bg-primary/70',
                      !sameDate(day, dateToDisplay) &&
                        theme === 'light' &&
                        'hover:bg-gray-200',
                      !sameDate(day, dateToDisplay) &&
                        theme === 'dark' &&
                        'hover:bg-slate-600',
                      (sameDate(day, dateToDisplay) || isToday(day)) &&
                        'font-semibold',
                      'h-6 w-6 mt-0.5 ml-0.5 text-sm border border-transparent rounded-full',
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </div>

                {/* Number of total tasks and tasks due. If they are before the current
              date, it shows the number of completed tasks */}
                {isAfter(day, startOfYesterday()) ? (
                  <div className="text-xs ml-2 mt-1">
                    {numDueTasksByType(day) > 0 && (
                      <div>
                        {numDueTasksByType(day)}{' '}
                        {numDueTasksByType(day) > 1 ? 'Tasks' : 'Task'}
                      </div>
                    )}
                    {numDueTasksByType(day, TaskType.DUE) > 0 && (
                      <div className="text-orange-500">
                        {numDueTasksByType(day, TaskType.DUE)} Due
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-xs ml-2 mt-1 opacity-40">
                    {numDueTasksByType(day, undefined, true) > 0 && (
                      <div>
                        {numDueTasksByType(day, undefined, true)}{' '}
                        {numDueTasksByType(day, undefined, true) > 1
                          ? 'Tasks Completed'
                          : 'Task Completed'}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <DayPopup
        dateToDisplay={dateToDisplay}
        user={user}
        open={open}
        setOpen={setOpen}
        sameDate={sameDate}
      />
    </div>
  )
}
