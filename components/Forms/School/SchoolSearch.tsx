/* eslint-disable @typescript-eslint/no-explicit-any */

import { Combobox } from '@headlessui/react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import algoliasearch from 'algoliasearch/lite'
import classnames from 'classnames'
import SchoolEntry from 'components/Forms/School/SchoolEntry'
import useSchoolDetails from 'hooks/school/useSchoolDetails'
import useUserDetails from 'hooks/useUserDetails'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { School } from 'types/School'
import changeSchool from 'utils/setup/schoolHandlers'
import SchoolInput from './SchoolInput'

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
)
const index = searchClient.initIndex('Schools')

export default function SchoolSearch() {
  const { theme } = useTheme()
  const { user } = useUser()
  const { userDetails, mutateUserDetails } = useUserDetails(user?.id)
  const { mutateSchoolDetails } = useSchoolDetails(userDetails?.FK_SchoolID)

  const [selectedSchool, setSelectedSchool] = useState<School | undefined>(
    undefined,
  )
  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState<any>([])
  const [saving, setSaving] = useState(false)

  const filterSchools = async () => {
    const result = await index.search(query)
    const hitsTemp = result.hits
    setHits(hitsTemp)
  }

  useEffect(() => {
    setMounted(true)
    filterSchools()
  }, [query])

  if (!mounted) return null

  return (
    <Combobox
      className="w-96"
      as="div"
      value={selectedSchool}
      onChange={(school: School) =>
        changeSchool(
          school,
          userDetails,
          mutateUserDetails,
          mutateSchoolDetails,
          setSaving,
        )
      }
    >
      <div className="relative mt-1">
        <div className="relative">
          <SchoolInput query={query} setQuery={setQuery} saving={saving} />
        </div>

        {hits.length > 0 && (
          <Combobox.Options
            className={classnames(
              {
                'bg-gray-100': theme === 'light',
              },
              { 'bg-slate-700': theme === 'dark' },
              'absolute right-12 sm:right-0 z-10 w-3/4 sm:w-full overflow-auto rounded-md text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
            )}
          >
            {hits.slice(0, 5).map((school: any) => (
              <SchoolEntry key={school.SchoolID} school={school} />
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
