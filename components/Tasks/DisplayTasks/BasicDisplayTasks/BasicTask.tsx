import classNames from 'classnames'
import Checkbox from 'components/Tasks/DisplayTasks/BasicDisplayTasks/Checkbox'
import CourseIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/CourseIcon'
import DateIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/DateIcon'
import DeleteTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/DeleteTask'
import EditTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/EditTask'
import FlowIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/FlowIcon'
import TypeIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/TypeIcon'
import { Task } from 'hooks/tasks/useTasks'
import { useState } from 'react'
import FlowJump from './FlowJump'

interface Props {
  task: Task
  groupBy: 'Today' | 'All' | number
  readOnly?: boolean
  kanban?: boolean
  cute?: boolean
  shouldNotUseUndo?: boolean
  repetitionId?: string
  flowId?: string
  showCompleted?: boolean
}

export default function BasicTask({
  task,
  groupBy,
  readOnly,
  kanban,
  cute,
  shouldNotUseUndo,
  repetitionId,
  flowId,
  showCompleted,
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
      showCompleted={showCompleted}
    />
  ) : (
    <div
      className={classNames(
        { 'grayscale text-info': task.Completed },
        { 'w-64': kanban },
        'mx-auto border border-gray-300 rounded-md shadow-md py-1.5 px-2 mb-2 transition-all duration-200',
      )}
      key={task.TaskID}
    >
      <div className="flex transition-all">
        <Checkbox
          TaskID={task.TaskID}
          groupBy={groupBy}
          isCompleted={task.Completed}
          cute={cute}
          repetitionId={repetitionId}
          flowId={flowId}
          showCompleted={showCompleted}
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
                { 'text-md': !cute },
                { 'text-sm': cute },
                'font-medium',
              )}
            >
              {task.Title}
            </div>
            {!readOnly && (
              <span className="flex">
                {/* {!task.Completed && (
                  <span
                    className="text-xs mr-1 text-info hover:text-info/80 hover:cursor-pointer"
                    onClick={() => setEditing(true)}
                    onKeyDown={() => setEditing(true)}
                  >
                    Edit
                  </span>
                )} */}
                <DeleteTask
                  task={task}
                  groupBy={groupBy}
                  flowId={flowId}
                  showCompleted={showCompleted}
                />
              </span>
            )}
          </div>
          {task.Description && (
            <div className="text-sm mb-0.5">{task.Description}</div>
          )}
          <div className="flex justify-between items-center">
            <span className="flex">
              <DateIcon date={task.DueDate} />
              {!cute && <TypeIcon taskType={task.Type} kanban={kanban} />}
              {!kanban && (
                <FlowIcon
                  title={
                    task.FK_Flow?.Title || task.FK_Repetition?.FK_Flow?.Title
                  }
                  flowId={task.FK_Flow?.FlowID}
                />
              )}
            </span>
            {(groupBy === 'All' || groupBy === 'Today') &&
              !cute &&
              !(task.FK_Flow?.Title || task.FK_Repetition?.FK_Flow?.Title) && (
                <span className="flex justify-end mr-1">
                  <CourseIcon courseOnTerm={task.FK_CourseOnTerm} />
                </span>
              )}
            {!flowId &&
              !cute &&
              (task.FK_Flow?.Title || task.FK_Repetition?.FK_Flow?.Title) && (
                <FlowJump
                  id={
                    task.FK_Flow?.FlowID ||
                    task.FK_Repetition?.FK_Flow?.FlowID ||
                    ''
                  }
                />
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
