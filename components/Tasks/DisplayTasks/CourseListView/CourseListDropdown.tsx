import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import AddTask from 'components/Tasks/AddTask'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { Task } from 'hooks/tasks/useTasks'
import { useState } from 'react'
import { KeyedMutator } from 'swr'

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

  return (
    <div>
      {/* Class Header */}
      <div className="flex items-center">
        {showTasks ? (
          <ChevronDownIcon
            className="w-6 border border-transparent bg-transparent hover:bg-gray-200"
            onClick={() => setShowTasks(false)}
            onKeyDown={() => setShowTasks(false)}
          />
        ) : (
          <ChevronRightIcon
            className="w-6 border border-transparent bg-transparent hover:bg-gray-200"
            onClick={() => setShowTasks(true)}
            onKeyDown={() => setShowTasks(true)}
          />
        )}
        <span className="font-bold mb-2">
          {course.Nickname || course.FK_Course.Code}
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
        <div className="mb-3 mt-1">
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
