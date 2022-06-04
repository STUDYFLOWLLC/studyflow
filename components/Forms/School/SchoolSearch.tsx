import { Combobox } from '@headlessui/react'
import classnames from 'classnames'
import SchoolEntry from 'components/Forms/School/SchoolEntry'
import LoadWithText from 'components/spinners/LoadWithText'
import Fuse from 'fuse.js'
import { School } from 'graphql/generated-graphql'
import useSchools from 'hooks/setup/useSchools'
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { SpinnerSizes } from 'types/Loading'
import SchoolInput from './SchoolInput'

interface Props {
  selectedSchool: School
  setSelectedSchool: Dispatch<SetStateAction<School>>
  updateSchoolinDB: (school: School) => void
}

export default function SchoolSearch({
  selectedSchool,
  setSelectedSchool,
  updateSchoolinDB,
}: Props) {
  const { theme } = useTheme()
  const { schools, isLoading, isError } = useSchools()

  const [mounted, setMounted] = useState(false)
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
      onChange={(value: School) => updateSchoolinDB(value)}
    >
      <div className="relative mt-1 w-96">
        {!isLoading ? (
          <SchoolInput
            schools={schools}
            selectedSchool={selectedSchool}
            setSelectedSchool={setSelectedSchool}
            filterSchools={filterSchools}
          />
        ) : (
          <LoadWithText
            size={SpinnerSizes.small}
            text="Loading 1903 colleges and universities"
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
              <SchoolEntry key={school.item.SchoolID} school={school} />
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
