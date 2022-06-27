/* eslint-disable no-case-declarations */
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import { Task } from 'hooks/tasks/useTasks'
import { KeyedMutator } from 'swr'
import TodayView from './TodayView'

interface Props {
  user: User
  taskView: string
  mutateTasks: KeyedMutator<any>
  tasks: Task[]
}

export default function index({ user, taskView, mutateTasks, tasks }: Props) {
  const archiveTaskLocal = (TaskID: number) => {
    mutateTasks({
      mutate: true,
      tasks: tasks.map((task) => {
        if (task.TaskID === TaskID) {
          return { ...task, Completed: true }
        }
        return task
      }),
    })
  }

  return (
    <>
      {/* Today view */}
      {taskView === 'Today' && (
        <TodayView tasks={tasks} archiveTaskLocal={archiveTaskLocal} />
      )}

      {/* Calendar view */}
      {taskView === 'Calendar' && (
        <div className="justify-center">
          <BasicDisplayTasks
            archiveTaskLocal={archiveTaskLocal}
            tasks={tasks}
          />
        </div>
      )}

      {/* Courses view */}
      {taskView === 'Courses' && (
        <div className="justify-center">
          <BasicDisplayTasks
            archiveTaskLocal={archiveTaskLocal}
            tasks={tasks}
          />
        </div>
      )}
    </>
  )
}
