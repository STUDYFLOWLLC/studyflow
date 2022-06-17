import { User, withPageAuth } from '@supabase/supabase-auth-helpers/nextjs'
import DashBar from 'components/Dashbar'
import CreateTask from 'components/Tasks/CreateTask'
import DisplayTasks from 'components/Tasks/DisplayTasks'
import TaskHeader from 'components/Tasks/TaskHeader'
import useTasks from 'hooks/tasks/useTasks'
import useUserDetails from 'hooks/useUserDetails'
import { useState } from 'react'

interface Props {
  user: User
}

export default function index({ user }: Props) {
  const { userDetails, userDetailsLoading } = useUserDetails(user.id)
  const { tasks, mutateTasks } = useTasks(userDetails?.UserID)
  const [searchValue, setSearchValue] = useState('')
  const [viewing, setViewing] = useState('Today')

  return (
    <div>
      <div className="min-h-full">
        <DashBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          loading={!userDetails}
        />
        <div className="flex-1">
          <TaskHeader user={user} viewing={viewing} setViewing={setViewing} />
        </div>
      </div>
      <CreateTask user={user} tasks={tasks} mutateTasks={mutateTasks} />
      <DisplayTasks user={user} tasks={tasks} />
    </div>
  )
}

export const getServerSideProps = withPageAuth({ redirectTo: '/login' })
