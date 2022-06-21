/* eslint-disable no-case-declarations */
import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import DashBar from 'components/Dashbar'
import HideButton from 'components/Dashbar/HideButton'
import AddTask from 'components/Tasks/AddTask'
import DisplayTasks from 'components/Tasks/DisplayTasks'
import TaskHeader from 'components/Tasks/TasksHeader'
import useCoursesOnTerm from 'hooks/school/useCoursesOnTerm'
import useTasks, { Task } from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'

interface Props {
  user: User
}

const tasksDisplayed = (viewing: string, tasks: Task[]) => {
  switch (viewing) {
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
  const [viewing, setViewing] = useState('Today')

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
      </div>
      <div className={classNames({ 'lg:pl-56': showDashBar }, 'flex flex-col')}>
        <TaskHeader
          user={user}
          viewing={viewing}
          setViewing={setViewing}
          coursesOnTerm={coursesOnTerm}
          coursesOnTermLoading={coursesOnTermLoading}
        />
        <div className="mx-auto w-4/5 border-t border-gray-300 mt-6" />
        <div className="mx-auto w-8/12 flex flex-col justify-center">
          <DisplayTasks
            user={user}
            tasksDisplayed={tasksDisplayed(viewing, tasks)}
            viewing={viewing}
            archiveTaskLocal={archiveTaskLocal}
          />
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
