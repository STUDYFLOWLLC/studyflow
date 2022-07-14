import {
  ArrowsExpandIcon,
  EyeOffIcon,
  MinusCircleIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import FlowHeader from 'components/Flow/FlowHeader'
import FlowProperties from 'components/Flow/FlowProperties'
import BasicDisplayTasks from 'components/Tasks/DisplayTasks/BasicDisplayTasks'
import useFlowTasks from 'hooks/flows/useFlowTasks'
import { Task } from 'hooks/tasks/useTasks'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import FlowAddTask from './FlowTask/FlowAddTask'

export interface SmallCourse {
  FK_CourseOnTermID: number
  Nickname: string
  Color: string
  FK_Course: {
    Code: string
  }
}

interface Props {
  flowId: string
  deleteFlow: () => void
  flowTitle: string
  saving: boolean
  courseOnTerm?: SmallCourse
}

export default function FlowTop({
  flowId,
  deleteFlow,
  flowTitle,
  saving,
  courseOnTerm,
}: Props) {
  const { theme } = useTheme()
  const { flowTasks } = useFlowTasks(flowId, courseOnTerm)

  const [mounted, setMounted] = useState(false)
  const [tasksExpanded, setTasksExpanded] = useState(false)
  const [tasksHidden, setTasksHidden] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <FlowHeader flowId={flowId} deleteFlow={deleteFlow} saving={saving} />
      <div className="border-b pb-4 mb-4 prose max-w-3xl mx-auto">
        <FlowProperties flowId={flowId} saving={saving} />

        <div className="relative">
          <div
            className={classNames(
              { 'max-h-20': !tasksExpanded },
              'flex overflow-y-auto mb-2',
            )}
          >
            {!tasksHidden ? (
              <BasicDisplayTasks tasks={flowTasks as unknown as Task[]} />
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
          courseOnTerm={courseOnTerm}
        />
      </div>
    </>
  )
}
