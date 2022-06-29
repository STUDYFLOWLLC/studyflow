import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import classNames from 'classnames'
import AddTask from 'components/Tasks/AddTask'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { Task } from 'hooks/tasks/useTasks'
import { useState } from 'react'
import { KeyedMutator } from 'swr'
import bgToTextColor from 'utils/bgToTextColor'

interface Props {
  course: CourseOnTerm
  user: User
  mutateTasks: KeyedMutator<any>
  tasks: Task[]
  archiveTaskLocal: (TaskID: number) => void
  coursesOnTerm: CourseOnTerm[]
  coursesOnTermLoading: boolean
}

export default function CourseListDropdown({
  course,
  user,
  mutateTasks,
  tasks,
  archiveTaskLocal,
  coursesOnTerm,
  coursesOnTermLoading,
}: Props) {
  const [showTasks, setShowTasks] = useState(false)

  // Number of tasks in a course
  const numTasksCourse = tasks.filter(
    (task) =>
      task.FK_CourseOnTermID === course.CourseOnTermID && !task.Completed,
  ).length

  return (
    <div>
      {/* Class Header */}
      <div className="flex justify-between">
        <span className="flex items-center mb-2">
          {showTasks ? (
            <ChevronDownIcon
              className="w-9 h-9 border border-transparent bg-transparent hover:bg-gray-200 hover:cursor-pointer rounded-md p-1.5 mr-1"
              onClick={() => setShowTasks(false)}
              onKeyDown={() => setShowTasks(false)}
            />
          ) : (
            <ChevronRightIcon
              className="w-9 h-9 border border-transparent bg-transparent hover:bg-gray-200 hover:cursor-pointer rounded-md p-1.5 mr-1"
              onClick={() => setShowTasks(true)}
              onKeyDown={() => setShowTasks(true)}
            />
          )}
          <span
            className={classNames(bgToTextColor(course.Color), 'font-bold')}
          >
            {course.Nickname || course.FK_Course.Code}
          </span>
        </span>
        <span className="text-xs text-gray-400 mt-3">
          {numTasksCourse} {numTasksCourse === 1 ? 'Task' : 'Tasks'}
        </span>
      </div>

      {/* Class Tasks */}
      {showTasks && (
        <BasicDisplayTasks
          tasks={tasks.filter(
            (task) => task.FK_CourseOnTermID === course.CourseOnTermID,
          )}
          archiveTaskLocal={archiveTaskLocal}
        />
      )}

      {/* Add Task */}
      {showTasks && (
        <div className="mb-4 mt-1">
          <AddTask
            user={user}
            tasks={tasks}
            mutateTasks={mutateTasks}
            coursesOnTerm={coursesOnTerm}
            coursesOnTermLoading={coursesOnTermLoading}
            courseOnTerm={course}
          />
        </div>
      )}

      {/* Divider */}
      <div className="border-b mt-2 mb-10" />
    </div>
  )
}
