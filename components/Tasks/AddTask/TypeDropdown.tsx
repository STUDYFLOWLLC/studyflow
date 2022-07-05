/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import { Menu, Transition } from '@headlessui/react'
import { TagIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { TaskType } from 'prisma/generated/type-graphql/enums/TaskType'
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'

const items = [
  { type: TaskType.WORK_ON, display: 'Work-on' },
  { type: TaskType.DUE, display: 'Due' },
  { type: TaskType.REVIEW, display: 'Review' },
]

interface activeProps {
  active: boolean
}

interface Props {
  taskType: TaskType | undefined
  setTaskType: Dispatch<SetStateAction<TaskType | undefined>>
}

const bgColor = (taskType: TaskType | undefined) => {
  if (!taskType) return
  switch (taskType) {
    case 'WORK_ON':
      return 'bg-cyan-500'
    case 'DUE':
      return 'bg-orange-500'
    case 'REVIEW':
      return 'bg-purple-500'
    default:
  }
}

const taskTypeToString = (taskType: TaskType | undefined) => {
  if (!taskType) return
  switch (taskType) {
    case 'WORK_ON':
      return 'Work-on'
    case 'DUE':
      return 'Due'
    case 'REVIEW':
      return 'Review'
    default:
  }
}

export default function TypeDropdown({ taskType, setTaskType }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={classNames(
              {
                'ring-black border-transparent hover:opacity-80':
                  theme === 'light' && taskType,
              },
              {
                'hover:bg-gray-50 hover:border-gray-300 border-slate-300':
                  theme === 'light' && !taskType,
              },
              {
                'hover:bg-slate-600 text-white border-transparent':
                  theme === 'dark' && taskType,
              },
              {
                'border-slate-600 hover:bg-slate-600 hover:border-slate-400 text-gray-100':
                  theme === 'dark' && !taskType,
              },
              bgColor(taskType),
              'flex items-center cursor-pointer px-2 py-1 rounded-md shadow-sm text-sm font-medium border',
            )}
          >
            <TagIcon className="w-5 h-5 mr-0.5" />
            {taskTypeToString(taskType) || 'Type'}
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={classNames(
                {
                  'bg-white ring-black ring-1 ring-opacity-5':
                    theme === 'light',
                },
                { 'bg-slate-700': theme === 'dark' },
                'absolute z-20 left-2 w-32 origin-top-left rounded-md shadow-lg focus:outline-none',
              )}
            >
              {items.map((item) => (
                <Menu.Item key={items.indexOf(item)}>
                  {({ active }: activeProps) => (
                    <div
                      className={classNames(
                        {
                          'bg-gray-100 text-gray-900':
                            active && theme === 'light',
                        },
                        {
                          'text-gray-700': !active && theme === 'light',
                        },
                        {
                          'bg-slate-600': active && theme === 'dark',
                        },
                        {
                          'bg-slate-700': !active && theme === 'dark',
                        },

                        'px-1 flex items-center last-of-type:rounded-b-md cursor-pointer first-of-type:rounded-t-md',
                      )}
                      onClick={() => {
                        setTaskType(item.type)
                      }}
                      onKeyDown={() => {
                        setTaskType(item.type)
                      }}
                    >
                      <span className="block py-2 text-sm">{item.display}</span>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
