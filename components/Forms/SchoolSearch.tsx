import { Combobox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classnames from 'classnames'
import LoadWithText from 'components/spinners/LoadWithText'
import Fuse from 'fuse.js'
import { School } from 'graphql/generated-graphql'
import useSchools from 'hooks/setup/useSchools'
import useUserDetails from 'hooks/useUserDetails'
import { SpinnerSizes } from 'interfaces/Loading'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function SchoolSearch() {
  const { theme } = useTheme()
  const { user } = useUser()

  const { schools, isLoading, isError } = useSchools()
  console.log(user)
  const { userDetails } = useUserDetails(user?.id)

  console.log(userDetails)

  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedSchool, setSelectedSchool] = useState('')
  const [filteredSchools, setFilteredSchools] = useState<
    Fuse.FuseResult<School>[]
  >([])

  useEffect(() => setMounted(true), [])

  const filterSchools = (schoolsArray: School[], searchVal: string) => {
    if (schoolsArray.length === 0) return

    const searchOptions = {
      includeScore: true,
      keys: ['Name'],
    }

    const schoolsFuse = new Fuse(schoolsArray, searchOptions)
    setFilteredSchools(schoolsFuse.search(searchVal).splice(0, 10))
  }

  if (!mounted) return null

  if (isError) return <div />

  return (
    <Combobox
      className="w-96 pt-10"
      as="div"
      value={selectedSchool}
      onChange={setSelectedSchool}
    >
      <div className="prose">
        <h1 className="text-center text-decoration-line: underline decoration-primary decoration-4">
          School
        </h1>
      </div>

      <div className="relative mt-1 h-20 w-96">
        {!isLoading ? (
          <Combobox.Input
            className={classnames(
              { 'border-gray-300': theme === 'light' },
              { 'bg-base-100': theme === 'dark' },
              'text-center outline-none focus:outline-none focus:border-0 focus:ring-0 border-0  h-full w-full rounded-md text-2xl',
            )}
            onChange={(e: { target: { value: string } }) => {
              if (e.target.value === '') setSelectedSchool('')
              filterSchools(schools, e.target.value)
              setQuery(e.target.value)
            }}
            displayValue={() => selectedSchool}
            placeholder="Enter your school"
            autoFocus
          />
        ) : (
          <LoadWithText
            size={SpinnerSizes.small}
            text="Loading 1903 colleges and universities "
          />
        )}
        {filteredSchools.length > 0 && (
          <Combobox.Options
            className={classnames(
              {
                'bg-gray-100': theme === 'light',
              },
              { 'bg-slate-700': theme === 'dark' },
              'absolute z-10 mt-1 w-full overflow-auto rounded-md text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
            )}
          >
            {filteredSchools.map((school) => (
              <Combobox.Option
                key={school.item.SchoolID}
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
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
