import { Combobox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import classnames from 'classnames'
import Fuse from 'fuse.js'
import { School } from 'graphql/generated-graphql'
import useSchools from 'hooks/useSchools'
import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function SchoolSearch() {
  const [selectedSchool, setSelectedSchool] = useState('')
  const [filteredSchools, setFilteredSchools] = useState<
    Fuse.FuseResult<School>[]
  >([])
  const { schools, isLoading, isError } = useSchools()

  const filterSchools = (schoolsArray: School[], searchVal: string) => {
    if (schoolsArray.length === 0) return

    const searchOptions = {
      includeScore: true,
      keys: ['Name'],
    }

    const schoolsFuse = new Fuse(schoolsArray, searchOptions)
    setFilteredSchools(schoolsFuse.search(searchVal).splice(0, 10))
  }

  if (isLoading)
    return (
      <div className="w-64 h-16">
        <p className="block text-sm font-medium text-gray-700">
          Enter School Name
        </p>
        <Skeleton height={32} />
      </div>
    )

  if (isError) return <div />

  return (
    <Combobox
      className="w-64"
      as="div"
      value={selectedSchool}
      onChange={setSelectedSchool}
    >
      <Combobox.Label className="w-48 block text-sm font-medium text-gray-700">
        Enter School Name
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-primary-600 focus:outline-none focus:ring-1 focus:ring-primary-600 sm:text-sm"
          onChange={(e) => filterSchools(schools, e.target.value)}
          displayValue={() => selectedSchool}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredSchools.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredSchools.map((school) => (
              <Combobox.Option
                key={school.item.SchoolID}
                value={school.item.Name}
                className={({ active }) =>
                  classnames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-primary-400 text-white' : 'text-gray-900',
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
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
