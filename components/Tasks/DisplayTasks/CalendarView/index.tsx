import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
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
import { Task } from 'hooks/tasks/useTasks'
import React from 'react'
import { KeyedMutator } from 'swr'
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
  tasks: Task[]
  archiveTaskLocal: (TaskID: number) => void
  user: User
  coursesOnTerm: CourseOnTerm[]
  coursesOnTermLoading: boolean
  mutateTasks: KeyedMutator<any>
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
  tasks,
  archiveTaskLocal,
  user,
  coursesOnTerm,
  coursesOnTermLoading,
  mutateTasks,
}: Props) {
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
      task.DueDate.substring(0, 10) === formatISO(today).substring(0, 10),
  ).length

  return (
    <div className="flex">
      <div>
        {/* TODO: Add header */}
        <div>
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
            archiveTaskLocal={archiveTaskLocal}
            tasks={tasks.filter(
              (task) =>
                !task.Completed &&
                task.DueDate.substring(0, 10) ===
                  formatISO(dateToDisplay).substring(0, 10),
            )}
          />
        </div>
        {/* Add Task
          TODO: Make it so the task you add has DueDate of dateToDisplay */}
        <div>
          <AddTask
            user={user}
            tasks={tasks}
            mutateTasks={mutateTasks}
            coursesOnTerm={coursesOnTerm}
            coursesOnTermLoading={coursesOnTermLoading}
          />
        </div>
      </div>

      {/* Calendar Display */}
      <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
        <div className="w-64">
          <div className="flex items-center">
            <h2 className="flex-auto ml-2 font-semibold text-gray-900">
              {format(firstDayCurrentMonth, 'MMM yyyy')}
            </h2>
            <button
              onClick={previousMonth}
              type="button"
              className="-my-1.5 flex flex-none items-center justify-center m-1 p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              onClick={nextMonth}
              type="button"
              className="ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-2 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className="grid grid-cols-7 text-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx > 6 && 'border-gray-200',
                  dayIdx === 0 && colStartClasses[getDay(day)],
                  'm-0.5',
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
                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full',
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
    </div>
  )
}
