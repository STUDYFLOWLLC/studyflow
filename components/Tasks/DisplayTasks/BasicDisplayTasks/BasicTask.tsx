import classNames from 'classnames'
import Checkbox from 'components/Tasks/DisplayTasks/BasicDisplayTasks/Checkbox'
import CourseIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/CourseIcon'
import DateIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/DateIcon'
import DeleteTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/DeleteTask'
import EditTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/EditTask'
import TypeIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/TypeIcon'
import { Task } from 'hooks/tasks/useTasks'
import { useState } from 'react'
import FlowIcon from './FlowIcon'

interface Props {
  task: Task
  groupBy: 'Today' | 'All' | number
  readOnly?: boolean
  cute?: boolean
  shouldNotUseUndo?: boolean
  repetitionId?: string
  flowId?: string
}

export default function BasicTask({
  task,
  groupBy,
  readOnly,
  cute,
  shouldNotUseUndo,
  repetitionId,
  flowId,
}: Props) {
  const [editing, setEditing] = useState(false)

  return editing ? (
    <EditTask
      groupBy={groupBy}
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
      className={classNames(
        { 'grayscale text-info': task.Completed },
        'border border-gray-300 rounded-lg shadow-md p-2 mb-2',
      )}
      key={task.TaskID}
    >
      <div className="flex">
        <Checkbox
          TaskID={task.TaskID}
          groupBy={groupBy}
          isCompleted={task.Completed}
          cute={cute}
          repetitionId={repetitionId}
          flowId={flowId}
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
                {!task.Completed && (
                  <span
                    className="text-sm mr-1 text-info hover:text-info/80 hover:cursor-pointer"
                    onClick={() => setEditing(true)}
                    onKeyDown={() => setEditing(true)}
                  >
                    Edit
                  </span>
                )}
                <DeleteTask task={task} groupBy={groupBy} flowId={flowId} />
              </span>
            )}
          </div>
          <div className="text-sm mb-1">{task.Description}</div>
          <div className="flex justify-between">
            <span className="flex">
              <DateIcon date={task.DueDate} />
              {!cute && <TypeIcon taskType={task.Type} />}
              <FlowIcon
                title={
                  task.FK_Flow?.Title || task.FK_Repetition?.FK_Flow?.Title
                }
              />
            </span>
            {(groupBy === 'All' || groupBy === 'Today') && (
              <span className="flex justify-end mr-1">
                <CourseIcon courseOnTerm={task.FK_CourseOnTerm} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
