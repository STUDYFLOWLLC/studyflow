import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import MainSpinner from 'components/spinners/MainSpinner'
import AddTask from 'components/Tasks/AddTask'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import {
  useCompletedTaskCount,
  useUncompletedTaskCount,
} from 'hooks/tasks/useTaskCount'
import useTasks, { Task } from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import BasicDisplayTasks from './BasicDisplayTasks'

interface Props {
  user: User
}

export default function TodayView({ user }: Props) {
  const { theme } = useTheme()
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )

  const [index, setIndex] = useState(0)
  const [kanban, setKanban] = useState(true)
  const [groupedTasks, setGroupedTasks] = useState<Task[][]>([])
  const [groupTitles, setGroupTitles] = useState<string[]>([])
  const [groupBy, setGroupBy] = useState<'Today' | 'All' | number>('Today')
  const [showCompleted, setShowCompleted] = useState(true)
  const { tasks, tasksLoading, mutateTasks } = useTasks(
    userDetails?.UserID,
    'Today',
    showCompleted,
  )
  const { completedTaskCount, completedTaskCountLoading } =
    useCompletedTaskCount(userDetails?.UserID, 'Today')
  const { uncompletedTaskCount, uncompletedTaskCountLoading } =
    useUncompletedTaskCount(userDetails?.UserID, 'Today')

  const [mounted, setMounted] = useState(false)

  const today = new Date().toDateString().slice(0, 10)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (kanban) {
      const titles: string[] = []
      const groupedTasks = tasks.reduce<Task[][]>((acc, task) => {
        const index = acc.findIndex((group) =>
          group.some((t) => t.FK_CourseOnTermID === task.FK_CourseOnTermID),
        )
        if (index === -1) {
          acc.push([task])
          titles.push(
            task.FK_CourseOnTerm?.Nickname ||
              task.FK_CourseOnTerm?.FK_Course?.Code ||
              'Review',
          )
        } else {
          acc[index].push(task)
        }
        return acc
      }, [])
      setGroupedTasks(groupedTasks)
      setGroupTitles(titles)
    }
  }, [tasks])

  if (!mounted) return null

  return (
    <div
      className={classNames(
        { 'w-11/12': kanban },
        { 'w-2/3': !kanban },
        'flex flex-col mb-16',
      )}
    >
      <div className="mt-5 mb-1 flex items-baseline w-full justify-between">
        {/* Header, which is date and num of tasks */}
        <div className="flex items-baseline">
          <span className="mt-4 text-xl mr-2">{today}</span>
          <span>
            {kanban ? (
              <ListBulletIcon
                className={classNames(
                  { 'hover:bg-gray-200': theme === 'light' },
                  { 'hover:bg-slate-600': theme === 'dark' },
                  'w-5 h-5 cursor-pointer rounded-md px-px py-px mx-1 text-info',
                )}
                onClick={() => setKanban(false)}
              />
            ) : (
              <Squares2X2Icon
                className={classNames(
                  { 'hover:bg-gray-200': theme === 'light' },
                  { 'hover:bg-slate-600': theme === 'dark' },
                  'w-5 h-5 cursor-pointer rounded-md px-px py-px mx-1 text-info',
                )}
                onClick={() => setKanban(true)}
              />
            )}
          </span>

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
          <span className="ml-3 mt-2">
            {tasksLoading && <MainSpinner size={SpinnerSizes.small} />}
          </span>
        </div>
        {!uncompletedTaskCountLoading && !completedTaskCountLoading && (
          <div>
            <span className="text-xs text-gray-400 mt-3">
              {uncompletedTaskCount} Due, {completedTaskCount} Completed
            </span>
          </div>
        )}
      </div>

      {/* Kanban group by or normal today view */}
      {kanban ? (
        <div className="flex flex-wrap justify-center overflow-auto">
          {groupedTasks.map((group, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className="m-4 max-h-64 overflow-y-auto">
              <span className="mt-4 text-md font-semibold mr-2">
                {groupTitles[i]}
              </span>
              <BasicDisplayTasks
                tasks={group}
                showCompleted={showCompleted}
                groupBy={groupBy}
                kanban={kanban}
              />
              <div className="mt-1 pb-18">
                <AddTask
                  user={user}
                  coursesOnTerm={coursesOnTerm}
                  coursesOnTermLoading={coursesOnTermLoading}
                  dueDate={new Date()}
                  groupBy="Today"
                  showCompleted={showCompleted}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <BasicDisplayTasks
            tasks={tasks}
            showCompleted={showCompleted}
            groupBy={groupBy}
          />
          <div className="mt-1 pb-18">
            <AddTask
              user={user}
              coursesOnTerm={coursesOnTerm}
              coursesOnTermLoading={coursesOnTermLoading}
              dueDate={new Date()}
              groupBy="Today"
              showCompleted={showCompleted}
            />
          </div>
        </div>
      )}
    </div>
  )
}
