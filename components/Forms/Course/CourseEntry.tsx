/* eslint-disable @typescript-eslint/no-explicit-any, react/self-closing-comp */

import { Combobox } from '@headlessui/react'
import { BadgeCheckIcon, CheckIcon } from '@heroicons/react/outline'
import classnames from 'classnames'
import { CourseHit } from 'components/Forms/Course/CourseSearch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  course: CourseHit
}

export default function CourseEntry({ course }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const shorten = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength).trim() + '..'
    }
    return str
  }

  return (
    <Combobox.Option
      value={course}
      className={({ active }) =>
        classnames(
          {
            'bg-primary text-gray-100': active && theme === 'light',
          },
          {
            'bg-primary text-slate-700': active && theme === 'dark',
          },
          { 'text-gray-700': !active && theme === 'light' },
          { 'bg-slate-700': !active && theme === 'dark' },
          'w-full relative cursor-default select-none py-2 pl-3 pr-3 text-lg',
        )
      }
    >
      {({ active, selected }) => (
        <>
          <div className="sm:ml-4">
            <div className="flex items-center justify-between">
              <span
                className={classnames(
                  'truncate',
                  selected ? 'font-semibold' : '',
                )}
              >
                {shorten(course.Title, 21)}
              </span>
              {course.IsOfficial && (
                <BadgeCheckIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </div>
            <div className="flex justify-between">
              <span className="text-sm">{shorten(course.Code, 10)}</span>
              <span className="text-sm">
                {course.FK_Professor
                  ? shorten(course.FK_Professor.Name || '', 12)
                  : 'No Prof'}
              </span>
            </div>
          </div>

          {selected && (
            <span
              className={classnames(
                'absolute inset-y-0 right-0 flex items-center pr-4',
                active ? 'text-white' : 'text-primary-600',
              )}
            >
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          )}
        </>
      )}
    </Combobox.Option>
  )
}
