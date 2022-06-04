/* eslint-disable @typescript-eslint/no-explicit-any, react/self-closing-comp */

import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import classnames from 'classnames'
import Fuse from 'fuse.js'
import { School } from 'graphql/generated-graphql'
import { useTheme } from 'next-themes'
import { Dispatch, useEffect, useState } from 'react'

interface Props {
  school: Fuse.FuseResult<School>
  schools: School[]
  filterSchools: (schoolsArray: School[], seachVal: string) => void
  setSelectedSchool: Dispatch<any>
}

export default function SchoolEntry({
  school,
  schools,
  filterSchools,
  setSelectedSchool,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Combobox.Option
      value={school.item.Name}
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
          'relative cursor-default select-none py-2 pl-3 pr-9 text-lg',
        )
      }
      onSelect={() => {
        filterSchools(schools, school.item.Name)
        setSelectedSchool(school.item.Name)
      }}
    >
      {({ active, selected }) => (
        <>
          <div className="flex items-center">
            <span
              className={classnames(
                'ml-3 truncate',
                selected ? 'font-semibold' : '',
              )}
            >
              {school.item.Name}
            </span>
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
