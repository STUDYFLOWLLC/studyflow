/* eslint-disable @typescript-eslint/no-explicit-any */

import { PlusIcon } from '@heroicons/react/solid'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import makeTask from 'hooks/tasks/makeTask'
import { Task } from 'hooks/tasks/useTasks'
import { useState } from 'react'
import { KeyedMutator } from 'swr'

interface Props {
  user: User
  tasks: Task[]
  mutateTasks: KeyedMutator<any>
}

export default function index({ user, tasks, mutateTasks }: Props) {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDueDate, setTaskDueDate] = useState('')
  const [showMain, setShowMain] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)

  const addTask = async () => {
    mutateTasks(
      {
        tasks: [
          ...tasks,
          {
            CreatedTime: new Date().toISOString(),
            Title: taskName,
            TaskID: 0,
            Description: taskDescription,
            DueDate: taskDueDate,
          },
        ],
        mutate: true,
      },
      {
        revalidate: false,
      },
    )

    const data = await makeTask(
      taskName,
      taskDescription,
      taskDueDate,
      user.email || user.user_metadata.email,
    )
  }

  return (
    <div>
      {!showMain && (
        <div
          className={classNames(
            { 'cursor-pointer': showAddTask },
            'flex mt-3 ml-4',
          )}
          onClick={() => setShowMain(!showMain)}
          onKeyDown={() => setShowMain(!showMain)}
          onMouseEnter={() => setShowAddTask(true)}
          onMouseLeave={() => setShowAddTask(false)}
        >
          <span
            className={classNames(
              {
                'text-white border rounded-full border-transparent bg-black':
                  showAddTask,
              },
              'w-5 h-5 mr-3 font-thin mt-0.5',
            )}
          >
            <PlusIcon />
          </span>
          <span
            className={classNames({
              'text-gray-400': !showAddTask,
            })}
          >
            Add Task
          </span>
        </div>
      )}
      {showMain && (
        <div
          onClick={() => setShowMain(!showMain)}
          onKeyDown={() => setShowMain(!showMain)}
          className="flex flex-col justify-center text-center"
        >
          <span>+</span>
          <div>
            <form className="mt-2 flex flex-col border py-2 px-3 w-1/2 mx-auto">
              <input
                onChange={(e) => setTaskName(e.target.value)}
                className="border-none"
                type="text"
                placeholder="Task name"
              />

              <input
                onChange={(e) => setTaskDescription(e.target.value)}
                className="border-none"
                type="text"
                placeholder="Description"
              />

              <input
                onChange={(e) => setTaskDueDate(e.target.value)}
                className="border-none"
                type="date"
              />
            </form>
          </div>
          <div className="space-x-2 mt-2 text-right w-1/2 mx-auto">
            <span
              onClick={() => addTask()}
              onKeyDown={() => addTask()}
              className="border"
            >
              Add task
            </span>
            <span className="border">Cancel</span>
          </div>
        </div>
      )}
    </div>
  )
}
