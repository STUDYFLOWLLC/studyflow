import { Combobox } from '@headlessui/react'
import { EmojiSadIcon, SearchIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { matchSorter } from 'match-sorter'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { QuickAction } from 'types/CMDPalette'
import CMDEntry from './CMDEntry'

interface Props {
  placeholder: string
  quickActions: QuickAction[]
  filteredProjects: any[]
  query: string
  setQuery: (query: string) => void
  selectedAction: QuickAction | null
  setSelectedAction: (action: QuickAction | null) => void
  open?: boolean
  setOpen?: (open: boolean) => void
}

export default function CMDRaw({
  placeholder,
  quickActions,
  filteredProjects,
  query,
  setQuery,
  selectedAction,
  setSelectedAction,
  open,
  setOpen,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [filtered, setFiltered] = useState<QuickAction[]>(quickActions)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    setFiltered(matchSorter(quickActions, query, { keys: ['name'] }))
  }, [query])

  if (!mounted) return null

  return (
    <Combobox
      as="div"
      className={classNames(
        { 'bg-slate-100': theme === 'light' },
        { 'bg-base-200': theme === 'dark' },
        'w-full mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 transition-all',
      )}
      value={selectedAction}
      onChange={(item: QuickAction) => {
        setSelectedAction(item)
        item.action()
      }}
    >
      <div className="flex">
        <SearchIcon
          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <Combobox.Input
          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 focus:ring-0 sm:text-sm"
          placeholder={placeholder}
          onChange={(event: { target: { value: string } }) =>
            setQuery(event.target.value)
          }
        />
        {setOpen && (
          <kbd
            onClick={() => {
              if (open !== undefined && setOpen) setOpen(!open)
            }}
            onKeyDown={() => {
              if (open !== undefined && setOpen) setOpen(!open)
            }}
            className="kbd kbd-xs absolute top-4 right-4 h-5 w-8 cursor-pointer"
          >
            esc
          </kbd>
        )}
      </div>

      {(query === '' || filtered.length > 0) && (
        <Combobox.Options
          static
          className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
        >
          <li className="p-2">
            {query === '' && (
              <h2 className="mb-2 px-3 text-xs font-semibold text-gray-500">
                Jump to
              </h2>
            )}
            <ul className="text-sm">
              {query === ''
                ? quickActions.map((action) => (
                    <CMDEntry
                      key={action.name}
                      CmdIcon={action.CmdIcon}
                      name={action.name}
                      shortcut={action.shortcut}
                      url=""
                      action={action.action}
                    />
                  ))
                : filtered.map((action) => (
                    <CMDEntry
                      key={action.name}
                      CmdIcon={action.CmdIcon}
                      name={action.name}
                      shortcut={action.shortcut}
                      url=""
                      action={action.action}
                    />
                  ))}
            </ul>
          </li>
        </Combobox.Options>
      )}
      {query !== '' && filtered.length === 0 && (
        <div className="py-14 px-6 text-center sm:px-14">
          <EmojiSadIcon
            className="mx-auto h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
          <p className="mt-4 text-sm">
            We couldn&apos;t find any projects with that term. Please try again.
          </p>
        </div>
      )}
    </Combobox>
  )
}
