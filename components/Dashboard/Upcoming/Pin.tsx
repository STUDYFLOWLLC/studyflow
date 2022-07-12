import { Menu, Transition } from '@headlessui/react'
import {
  DocumentAddIcon,
  DotsVerticalIcon,
  StarIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import { DashFlow } from 'hooks/flows/useDashFlows'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import { ActiveProps } from 'types/ActiveProps'
import { FlowType } from 'types/Flow'
import abbreviateDate from 'utils/abbreviateDate'
import shorten from 'utils/shorten'

interface Props {
  flow: DashFlow
}

const items = [
  {
    name: 'Open',
  },
  {
    name: 'Hide',
  },
  {
    name: 'Share',
  },
]

export default function Pin({ flow }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      key={flow.FlowID}
      className="relative col-span-1 flex shadow-sm rounded-md m-2 w-48"
    >
      <div
        className={classNames(
          flow.FK_CourseOnTerm.Color,
          'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
        )}
      >
        {flow.Type === FlowType.ASSESSMENT && <StarIcon className="w-7 h-7" />}
        {flow.Type === FlowType.ASSIGNMENT && (
          <DocumentAddIcon className="w-7 h-7" />
        )}
      </div>
      <div
        className={classNames(
          { 'bg-white border-gray-200': theme === 'light' },
          { 'bg-slate-700 border-slate-600': theme === 'dark' },
          'flex-1 flex items-center justify-between border-t border-r border-b  rounded-r-md truncate',
        )}
      >
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <a href="#" className="font-medium">
            {shorten(flow.Title, 10)}
          </a>
          <p className="text-info">
            {abbreviateDate(new Date(flow.UserEnteredDate))}
          </p>
        </div>
        <Menu as="div" className="flex-shrink-0 pr-2">
          <Menu.Button
            className={classNames(
              { 'bg-white border-gray-200': theme === 'light' },
              { 'bg-slate-700 border-slate-600': theme === 'dark' },
              'w-8 h-8 inline-flex items-center justify-center text-info rounded-full focus:outline-none focus:ring-2 focus:ring-primary',
            )}
          >
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
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
                  'bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200':
                    theme === 'light',
                },
                { 'bg-slate-700 divide-slate-600': theme === 'dark' },
                'z-10 mx-3 origin-top-right absolute top-[-1rem] right-2 w-24 mt-1 rounded-md shadow-lg focus:outline-none',
              )}
            >
              {items.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }: ActiveProps) => (
                    <div
                      className={classNames(
                        { 'bg-gray-100': active && theme === 'light' },
                        { 'bg-slate-600': active && theme === 'dark' },
                        'px-2 py-2 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md flex items-center cursor-pointer',
                      )}
                    >
                      {item.name}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
