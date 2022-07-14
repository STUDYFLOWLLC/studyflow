import {
  ArrowsExpandIcon,
  EyeOffIcon,
  MinusCircleIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import useFlowDetails from 'hooks/flows/useFlowDetails'
import { Task } from 'hooks/tasks/useTasks'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import FlowAddTask from './FlowAddTask'

interface Props {
  flowId: string
  flowTitle: string
}

export default function index({ flowId, flowTitle }: Props) {
  const { theme } = useTheme()
  const { flowDetails } = useFlowDetails(flowId)

  const [tasksExpanded, setTasksExpanded] = useState(false)
  const [tasksHidden, setTasksHidden] = useState(false)

  return (
    <>
      <div className="relative">
        <div
          className={classNames(
            { 'max-h-20': !tasksExpanded },
            'flex overflow-y-auto mb-2',
          )}
        >
          {!tasksHidden ? (
            <BasicDisplayTasks
              tasks={
                (flowDetails?.FK_Tasks.map((task) => ({
                  ...task,
                  FK_CourseOnTerm: flowDetails?.FK_CourseOnTerm,
                })) || []) as unknown as Task[]
              }
            />
          ) : (
            <span
              className={classNames(
                { 'hover:bg-gray-200': theme === 'light' },
                { 'hover:bg-slate-600': theme === 'dark' },
                'uppercase text-sm font-medium cursor-pointer rounded-md px-1.5 py-0.5',
              )}
              onClick={() => setTasksHidden(false)}
              onKeyDown={() => setTasksHidden(true)}
            >
              Show tasks
            </span>
          )}
        </div>
        {!tasksHidden && (
          <div className="flex h-full justify-center flex-col absolute top-0 right-[-2rem]">
            {!tasksExpanded ? (
              <ArrowsExpandIcon
                className="w-5 h-5 cursor-pointer"
                onClick={() => setTasksExpanded(true)}
              />
            ) : (
              <MinusCircleIcon
                className="w-5 h-5 cursor-pointer"
                onClick={() => setTasksExpanded(false)}
              />
            )}
            <EyeOffIcon
              className="w-5 h-5 cursor-pointer"
              onClick={() => setTasksHidden(true)}
            />
          </div>
        )}
      </div>
      <FlowAddTask
        flowId={flowId}
        flowTitle={flowTitle}
        courseOnTerm={flowDetails?.FK_CourseOnTerm}
      />
    </>
  )
}
