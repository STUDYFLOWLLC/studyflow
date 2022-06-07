/* eslint-disable @typescript-eslint/no-explicit-any */

import { Combobox } from '@headlessui/react'
import { School } from '@prisma/client'
import algoliasearch from 'algoliasearch/lite'
import classnames from 'classnames'
import SchoolEntry from 'components/Forms/School/SchoolEntry'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import SchoolInput from './SchoolInput'

interface Props {
  selectedSchool: School
  updateSchoolinDB: (school: School) => void
}

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || '',
)
const index = searchClient.initIndex('Schools')

export default function SchoolSearch({
  selectedSchool,
  updateSchoolinDB,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState<any>([])

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
      onChange={(value: School) => updateSchoolinDB(value)}
    >
      <div className="relative mt-1">
        <SchoolInput
          selectedSchool={selectedSchool}
          query={query}
          setQuery={setQuery}
        />
        {hits.length > 0 && (
          <Combobox.Options
            className={classnames(
              {
                'bg-gray-100': theme === 'light',
              },
              { 'bg-slate-700': theme === 'dark' },
              'absolute right-12 sm:right-0 z-10 w-3/4 sm:w-full overflow-auto rounded-md text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
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
