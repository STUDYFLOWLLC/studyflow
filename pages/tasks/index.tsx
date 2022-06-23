/* eslint-disable no-case-declarations */
import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import CMDPalette from 'components/CMDPalette'
import DashBar from 'components/Dashbar'
import HideButton from 'components/Dashbar/HideButton'
import DashHeadBig from 'components/Dashboard/DashHeadBig'
import DashHeadSmall from 'components/DashHeadSmall'
import Taskover from 'components/Taskover'
import AddTask from 'components/Tasks/AddTask'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useTasks, { Task } from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

interface Props {
  user: User
}

const tasksDisplayed = (taskView: string, tasks: Task[]) => {
  switch (taskView) {
    case 'Today':
      const today = new Date()
      const dd = String(today.getDate()).padStart(2, '0')
      const mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
      const yyyy = today.getFullYear()
      return tasks.filter(
        (task) => task.DueDate?.slice(0, 10) === `${yyyy}-${mm}-${dd}`,
      )
    case 'Upcoming':
      return tasks
    default:
      return tasks
  }
}

export default function index({ user }: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { coursesOnTerm, coursesOnTermLoading } = useCoursesOnTerm(
    userDetails?.FK_Terms?.[0]?.TermID,
  )
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)
  const [showDashBar, setShowDashBar] = useState(true)
  const [searchValue, setSearchValue] = useState('')
  const [taskView, setTaskView] = useState('Today')

  const archiveTaskLocal = (TaskID: number) => {
    mutateTasks(
      {
        mutate: true,
        tasks: tasks.map((task) => {
          if (task.TaskID === TaskID) {
            return { ...task, Completed: true }
          }
          return task
        }),
      },
      {
        revalidate: false,
      },
    )
  }

  useHotkeys(
    'cmd+i, ctrl+i',
    (e) => {
      e.preventDefault()
      setShowDashBar(!showDashBar)
    },
    {
      enableOnTags: ['INPUT', 'TEXTAREA', 'SELECT'],
    },
    [showDashBar],
  )

  return (
    <div>
      {!showDashBar && (
        <HideButton direction="show" setShowDashBar={setShowDashBar} />
      )}
      <div className="min-h-full">
        <DashBar
          showDashBar={showDashBar}
          setShowDashBar={setShowDashBar}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <div
          className={classNames({ 'lg:pl-56': showDashBar }, 'flex flex-col')}
        >
          <DashHeadSmall />
          <main className="flex-1">
            <DashHeadBig
              pageDisplayed="TASKS"
              showDashBar={showDashBar}
              setShowDashBar={setShowDashBar}
              setTaskView={setTaskView}
              taskView={taskView}
            />
          </main>
        </div>
        <Taskover />
        <CMDPalette />
      </div>
      <div className={classNames({ 'lg:pl-56': showDashBar }, 'flex flex-col')}>
        <div className="mx-auto w-8/12 flex flex-col justify-center">
          {/* <DisplayTasks
            user={user}
            tasksDisplayed={tasksDisplayed(taskView, tasks)}
            taskView={taskView}
            archiveTaskLocal={archiveTaskLocal}
          /> */}
          <AddTask
            user={user}
            tasks={tasks}
            mutateTasks={mutateTasks}
            coursesOnTerm={coursesOnTerm}
            coursesOnTermLoading={coursesOnTermLoading}
          />
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
