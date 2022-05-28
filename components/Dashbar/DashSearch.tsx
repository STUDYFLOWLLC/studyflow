/* eslint-disable jsx-a11y/label-has-associated-control */
import { SearchIcon } from '@heroicons/react/solid'
import classnames from 'classnames'
import { useTheme } from 'next-themes'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

export default function DashSearch(props: Props) {
  const { theme } = useTheme()
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
          className={classnames(
            { 'border-gray-300': theme === 'light' },
            { 'bg-base-200': theme === 'dark' },
            'h-10 focus:ring-primary focus:border-primary w-full pl-9 sm:text-sm rounded-md',
          )}
          placeholder="Flow Search"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
    </div>
  )
}
