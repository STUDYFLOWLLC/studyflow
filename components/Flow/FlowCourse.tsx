/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FolderIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ActiveProps } from 'types/ActiveProps'
import shorten from 'utils/shorten'

export interface CourseOnTermSmall {
  CourseOnTermID: number
  Nickname: string
  Code: string
  Color: string
  mutator: (
    newId: number,
    newNickname: string,
    newCode: string,
    newColor: string,
  ) => void
}

interface Props {
  title: string
  coursesOnTermSmall: CourseOnTermSmall[]
  loading: boolean
}

export default function CourseDropDown({
  title,
  coursesOnTermSmall,
  loading,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Menu as="div" className="relative inline-block text-left">
      {!loading ? (
        <Menu.Button
          disabled={loading}
          className={classNames(
            {
              'hover:bg-gray-50 hover:border-gray-300': theme === 'light',
            },
            {
              'hover:bg-slate-600 hover:border-slate-400': theme === 'dark',
            },
            'flex align-middle w-40 justify-between items-center px-2 ml-2 hover:shadow-sm border border-transparent rounded-md cursor-pointer',
          )}
        >
          <div>
            <FolderIcon className="h-5 mr-2 w-5" aria-hidden="true" />
          </div>
          <span className="truncate mr-2">{title}</span>
          <div>
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        </Menu.Button>
      ) : (
        <Skeleton className="h-5 w-40 ml-4" />
      )}

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
            { ' bg-white ring-black ring-1 ring-opacity-5': theme === 'light' },
            { 'bg-slate-700': theme === 'dark' },
            'absolute z-20 left-0 w-48 origin-top-left rounded-md shadow-lg focus:outline-none',
          )}
        >
          {coursesOnTermSmall.map((courseOnTermSmall) => (
            <Menu.Item key={courseOnTermSmall.Code}>
              {({ active }: ActiveProps) => (
                <div
                  className={classNames(
                    {
                      'bg-gray-100 text-gray-900': active && theme === 'light',
                    },
                    { 'text-gray-700': !active && theme === 'light' },
                    {
                      'bg-slate-600': active && theme === 'dark',
                    },
                    {
                      'bg-slate-700 ': !active && theme === 'dark',
                    },
                    'px-1 flex items-center cursor-pointer first-of-type:rounded-t-md last-of-type:rounded-b-md',
                  )}
                  onClick={() =>
                    courseOnTermSmall.mutator(
                      courseOnTermSmall.CourseOnTermID,
                      courseOnTermSmall.Nickname,
                      courseOnTermSmall.Code,
                      courseOnTermSmall.Color,
                    )
                  }
                  onKeyDown={() =>
                    courseOnTermSmall.mutator(
                      courseOnTermSmall.CourseOnTermID,
                      courseOnTermSmall.Nickname,
                      courseOnTermSmall.Code,
                      courseOnTermSmall.Color,
                    )
                  }
                >
                  <div
                    className={classNames(
                      courseOnTermSmall.Color,
                      ' ring-offset-1 w-3 h-3 mx-2 rounded-full',
                    )}
                  />
                  <span className="block py-2 text-sm">
                    {shorten(
                      courseOnTermSmall.Nickname || courseOnTermSmall.Code,
                      18,
                    )}
                  </span>
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
