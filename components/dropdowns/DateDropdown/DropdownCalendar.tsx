/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isSameMonth,
  isToday,
  parse,
  startOfMonth,
  startOfToday,
  startOfWeek,
} from 'date-fns'
import React from 'react'

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
  taskDueDateExact: Date | undefined
  setTaskDueDateExact: (taskDueDateExact: Date | undefined) => void
}

const sameDate = (date1: Date | undefined, date2: Date | undefined) => {
  if (!date1 || !date2) return false
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  )
}

export default function DropdownCalendar({
  taskDueDateExact,
  setTaskDueDateExact,
}: Props) {
  const today = startOfToday()
  const [currentMonth, setCurrentMonth] = React.useState(
    format(today, 'MMM-yyyy'),
  )
  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  const days = eachDayOfInterval({
    start: startOfWeek(startOfMonth(firstDayCurrentMonth)),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  const previousMonth = () => {
    const firstDayLastMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayLastMonth, 'MMM-yyyy'))
  }

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  return (
    <div className="w-64">
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
                  onClick={() => setTaskDueDateExact(day)}
                  className={classNames(
                    sameDate(day, taskDueDateExact) && 'text-white',
                    !sameDate(day, taskDueDateExact) &&
                      isToday(day) &&
                      'text-primary',
                    !sameDate(day, taskDueDateExact) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      'text-gray-900',
                    !sameDate(day, taskDueDateExact) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      'text-gray-400',
                    sameDate(day, taskDueDateExact) &&
                      isToday(day) &&
                      'bg-primary/70',
                    sameDate(day, taskDueDateExact) &&
                      !isToday(day) &&
                      'bg-gray-900',
                    !sameDate(day, taskDueDateExact) && 'hover:bg-gray-200',
                    (sameDate(day, taskDueDateExact) || isToday(day)) &&
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
