/* eslint-disable @typescript-eslint/no-explicit-any */

import { User } from '@supabase/supabase-auth-helpers/nextjs'
import makeTask from 'hooks/tasks/makeTask'
import { Task } from 'hooks/tasks/useTasks'
import { useState } from 'react'
import { KeyedMutator } from 'swr'

interface Props {
  user: User
  tasks: Task[]
  mutateTasks: KeyedMutator<any>
}

export default function CreateTask({ user, tasks, mutateTasks }: Props) {
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDueDate, setTaskDueDate] = useState('')

  const handleSubmit = async () => {
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
    <div className="flex flex-col justify-center text-center">
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
          onClick={() => handleSubmit()}
          onKeyDown={() => handleSubmit()}
          className="border"
        >
          Add task
        </span>
        <span className="border">Cancel</span>
      </div>
    </div>
  )
}
