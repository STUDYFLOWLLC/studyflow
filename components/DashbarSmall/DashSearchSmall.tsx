import { SearchIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  searchValue: string
  setSearchValue: (value: string) => void
}

export default function DashSearchSmall({
  searchValue,
  setSearchValue,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative rounded-md shadow-sm">
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
          className={classNames(
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
