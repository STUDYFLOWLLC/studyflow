import Checkbox from 'components/Tasks/DisplayTasks/BasicDisplayTasks/Checkbox'
import CourseIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/CourseIcon'
import DateIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/DateIcon'
import DeleteTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/DeleteTask'
import EditTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/EditTask'
import TypeIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/TypeIcon'
import { Task } from 'hooks/tasks/useTasks'
import { useState } from 'react'

interface Props {
  task: Task
}

export default function BasicTask({ task }: Props) {
  const [editing, setEditing] = useState(false)

  return editing ? (
    <EditTask />
  ) : (
    <div
      className="border border-gray-300 rounded-lg shadow-md p-2 mb-2"
      key={task.TaskID}
    >
      <div className="flex">
        <Checkbox TaskID={task.TaskID} />
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <div
              className="text-lg font-medium hover:cursor-pointer"
              onClick={() => setEditing(true)}
              onKeyDown={() => setEditing(true)}
            >
              {task.Title}
            </div>
            <DeleteTask task={task} />
          </div>
          <div
            className="font-light hover:cursor-pointer"
            onClick={() => setEditing(true)}
            onKeyDown={() => setEditing(true)}
          >
            {task.Description}
          </div>
          <div
            className="flex justify-between hover:cursor-pointer"
            onClick={() => setEditing(true)}
            onKeyDown={() => setEditing(true)}
          >
            <span className="flex">
              <DateIcon date={task.DueDate} />
              <TypeIcon taskType={task.Type} />
            </span>
            <span className="flex justify-end mr-1">
              <CourseIcon courseOnTerm={task.FK_CourseOnTerm} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
