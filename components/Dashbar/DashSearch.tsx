/* eslint-disable jsx-a11y/label-has-associated-control */
import { SearchIcon } from '@heroicons/react/solid'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export default function DashSearch(props: Props) {
  const { searchValue, setSearchValue } = props

  return (
    <div className="px-3 mt-5">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div
          className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          aria-hidden="true"
        >
          <SearchIcon
            className="mr-3 h-4 w-4 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="Search"
          id="search"
          className="h-10 block focus:ring-primary-400 focus:border-primary-400 w-full pl-9 sm:text-sm border-gray-300 rounded-md"
          placeholder="Search for a flow"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
    </div>
  )
}
