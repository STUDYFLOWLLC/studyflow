import classNames from 'classnames'
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
  readOnly?: boolean
  cute?: boolean
  shouldNotUseUndo?: boolean
}

export default function BasicTask({
  task,
  readOnly,
  cute,
  shouldNotUseUndo,
}: Props) {
  const [editing, setEditing] = useState(false)

  return editing ? (
    <EditTask
      oldName={task.Title}
      oldDescription={task.Description}
      oldDueDate={task.DueDate}
      oldCourse={task.FK_CourseOnTerm}
      oldType={task.Type}
      taskId={task.TaskID}
      setEditing={setEditing}
    />
  ) : (
    <div
      className="border border-gray-300 rounded-lg shadow-md p-2 mb-2"
      key={task.TaskID}
    >
      <div className="flex">
        <Checkbox
          TaskID={task.TaskID}
          isCompleted={task.Completed}
          cute={cute}
          shouldNotUseUndo={shouldNotUseUndo}
        />
        <div
          className={classNames(
            { 'flex-col': !cute },
            { 'justify-between': cute },
            'flex w-full',
          )}
        >
          <div className="flex justify-between">
            <div
              className={classNames(
                { 'text-lg': !cute },
                { 'text-sm': cute },
                'font-medium',
              )}
            >
              {task.Title}
            </div>
            {!readOnly && (
              <span className="flex">
                <span
                  className="text-sm mr-1 text-gray-500 hover:text-black hover:cursor-pointer"
                  onClick={() => setEditing(true)}
                  onKeyDown={() => setEditing(true)}
                >
                  Edit
                </span>
                <DeleteTask task={task} />
              </span>
            )}
          </div>
          <div className="text-sm mb-1">{task.Description}</div>
          <div className="flex justify-between">
            <span className="flex">
              <DateIcon date={task.DueDate} />
              {!cute && <TypeIcon taskType={task.Type} />}
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
