import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { User } from '@supabase/supabase-auth-helpers/nextjs'
import AddTask from 'components/Tasks/AddTask'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import CourseListDropdown from 'components/Tasks/DisplayTasks/CourseListView/CourseListDropdown'
import { CourseOnTerm } from 'hooks/school/useCoursesOnTerm'
import { Task } from 'hooks/tasks/useTasks'
import { useState } from 'react'
import { KeyedMutator } from 'swr'

interface Props {
  tasks: Task[]
  user: User
  coursesOnTerm: CourseOnTerm[]
  coursesOnTermLoading: boolean
  mutateTasks: KeyedMutator<any>
  archiveTaskLocal: (TaskID: number) => void
}

export default function TodayView({
  tasks,
  user,
  coursesOnTerm,
  coursesOnTermLoading,
  mutateTasks,
  archiveTaskLocal,
}: Props) {
  const [showGeneral, setShowGeneral] = useState(false)

  return (
    <>
      {/* Map of Each Class Dropdown-Display */}
      {coursesOnTerm.map((course) => (
        <CourseListDropdown
          key={course.CourseOnTermID}
          tasks={tasks}
          course={course}
          mutateTasks={mutateTasks}
          user={user}
          archiveTaskLocal={archiveTaskLocal}
          coursesOnTerm={coursesOnTerm}
          coursesOnTermLoading={coursesOnTermLoading}
        />
      ))}

      {/* General Dropdown-Display.
          Replicates CourseListDropdown but for General. showGeneral lives in this file */}
      <div>
        <div className="flex">
          {showGeneral ? (
            <ChevronDownIcon
              className="w-6 border border-transparent bg-transparent hover:bg-gray-200"
              onClick={() => setShowGeneral(false)}
              onKeyDown={() => setShowGeneral(false)}
            />
          ) : (
            <ChevronRightIcon
              className="w-6 border border-transparent bg-transparent hover:bg-gray-200"
              onClick={() => setShowGeneral(true)}
              onKeyDown={() => setShowGeneral(true)}
            />
          )}
          <span className="font-bold mb-2">General</span>
        </div>
        {showGeneral && (
          <BasicDisplayTasks
            tasks={tasks.filter((task) => task.FK_CourseOnTermID === 0)}
            archiveTaskLocal={archiveTaskLocal}
          />
        )}

        {showGeneral && (
          <div className="mb-3 mt-1">
            <AddTask
              user={user}
              tasks={tasks}
              mutateTasks={mutateTasks}
              coursesOnTerm={coursesOnTerm}
              coursesOnTermLoading={coursesOnTermLoading}
              general
            />
          </div>
        )}
      </div>
    </>
  )
}
