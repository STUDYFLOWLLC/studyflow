import { Combobox } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import classnames from 'classnames'
import SchoolEntry from 'components/Forms/School/SchoolEntry'
import LoadWithText from 'components/spinners/LoadWithText'
import Fuse from 'fuse.js'
import { School } from 'graphql/generated-graphql'
import useSchools from 'hooks/setup/useSchools'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'

export default function SchoolSearch() {
  const { theme } = useTheme()
  const { user } = useUser()

  const { schools, isLoading, isError } = useSchools()
  /* eslint-disable */
  const { userDetails } = useUserDetails(user?.id)
  /* eslint-enable */

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
      className="w-96"
      as="div"
      value={selectedSchool}
      onChange={setSelectedSchool}
    >
      <div className="relative mt-1 w-96">
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
            value={query}
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
              'absolute z-10 w-full overflow-auto rounded-md text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
            )}
          >
            {filteredSchools.map((school) => (
              <SchoolEntry
                key={school.item.SchoolID}
                school={school}
                schools={schools}
                filterSchools={filterSchools}
                setSelectedSchool={setSelectedSchool}
              />
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
