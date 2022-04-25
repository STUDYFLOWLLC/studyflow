import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  ClockIcon,
  HomeIcon,
  MenuAlt1Icon,
  ViewListIcon,
  XIcon
} from '@heroicons/react/outline'
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  SearchIcon,
  SelectorIcon
} from '@heroicons/react/solid'

export default function FlowListSmall() {
  const projects = [
    {
      id: 1,
      title: 'GraphQL API',
      initials: 'GA',
      team: 'Engineering',
      members: [
        {
          name: 'Dries Vincent',
          handle: 'driesvincent',
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
          name: 'Courtney Henry',
          handle: 'courtneyhenry',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      ],
      totalMembers: 12,
      lastUpdated: 'March 17, 2020',
      pinned: true,
      bgColorClass: 'bg-pink-600'
    }
    // More projects...
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="mt-10 sm:hidden">
      <div className="px-4 sm:px-6">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Recent Flows
        </h2>
      </div>
      <ul
        role="list"
        className="mt-3 border-t border-gray-200 divide-y divide-gray-100"
      >
        {projects.map(project => (
          <li key={project.id}>
            <a
              href="#"
              className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
            >
              <span className="flex items-center truncate space-x-3">
                <span
                  className={classNames(
                    project.bgColorClass,
                    'w-2.5 h-2.5 flex-shrink-0 rounded-full'
                  )}
                  aria-hidden="true"
                />
                <span className="font-medium truncate text-sm leading-6">
                  {project.title}{' '}
                  <span className="truncate font-normal text-gray-500">
                    in {project.team}
                  </span>
                </span>
              </span>
              <ChevronRightIcon
                className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
