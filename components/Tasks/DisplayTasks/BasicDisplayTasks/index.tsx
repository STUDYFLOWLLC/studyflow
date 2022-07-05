import Checkbox from 'components/Tasks/DisplayTasks/BasicDisplayTasks/Checkbox'
import CourseIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/CourseIcon'
import DateIcon from 'components/Tasks/DisplayTasks/BasicDisplayTasks/DateIcon'
import DeleteTask from 'components/Tasks/DisplayTasks/BasicDisplayTasks/DeleteTask'
import { Task } from 'hooks/tasks/useTasks'
import TypeIcon from './TypeIcon'

interface Props {
  tasks: Task[]
}

export default function BasicDisplayTasks({ tasks }: Props) {
  return (
    <div className="w-full">
      {tasks.map(
        (task) =>
          !task.Completed && (
            <div
              className="border border-gray-300 rounded-lg shadow-md p-2 mb-2"
              key={task.TaskID}
            >
              <div className="flex">
                <Checkbox TaskID={task.TaskID} />
                <div className="flex flex-col w-full">
                  <div className="flex justify-between">
                    <div className="text-lg font-medium">{task.Title}</div>
                    <DeleteTask task={task} />
                  </div>
                  <div className="font-light">{task.Description}</div>
                  <div className="flex justify-between">
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
          ),
      )}
    </div>
  )
}
