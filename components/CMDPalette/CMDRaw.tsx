import { Combobox } from '@headlessui/react'
import { EmojiSadIcon } from '@heroicons/react/outline'
import classNames from 'classnames'
import { groupBy } from 'lodash'
import { matchSorter } from 'match-sorter'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ActionType, QuickAction } from 'types/CMDPalette'
import scrapeActionTypes from 'utils/commandPalette/scrapeActionTypes'
import CMDEntry from './CMDEntry'
import CMDSearch from './CMDSearch'

interface Props {
  placeholder: string
  quickActions: QuickAction[]
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
  query,
  setQuery,
  selectedAction,
  setSelectedAction,
  open,
  setOpen,
}: Props) {
  const router = useRouter()
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [filtered, setFiltered] = useState<QuickAction[]>(quickActions)
  const [availableActionTypes, setAvailableActionTypes] = useState<
    ActionType[]
  >(scrapeActionTypes(quickActions))

  useEffect(() => setMounted(true), [])

  const prioritizeAndGroupCommands = (matchSortedItems: QuickAction[]) => {
    const keysSoFar: string[] = []
    for (let i = 0; i < matchSortedItems.length; i += 1) {
      const item = matchSortedItems[i]
      if (keysSoFar.indexOf(item.actionType) === -1)
        keysSoFar.push(item.actionType)
      if (keysSoFar.length === 3) break
    }
    for (let i = 0; i < matchSortedItems.length; i += 1) {
      const item = matchSortedItems[i]
      item.sortValue = keysSoFar.indexOf(item.actionType)
    }
    const joinedBumpy = []
    const grouped = groupBy(matchSortedItems, 'sortValue')
    const keys = Object.keys(grouped)
    for (let i = 0; i < keys.length; i += 1) {
      joinedBumpy.push(grouped[keys[i]])
    }
    return joinedBumpy.flat()
  }

  useEffect(() => {
    const filteredTemp = matchSorter(quickActions, query, {
      keys: ['name'],
      // @ts-expect-error base sorter weird typing error but it works
      baseSort: (a: QuickAction, b: QuickAction) =>
        quickActions.indexOf(a) < quickActions.indexOf(b) ? -1 : 1,
    })
    const filteredGrouped = prioritizeAndGroupCommands(filteredTemp)
    setFiltered(filteredGrouped)
    setAvailableActionTypes(scrapeActionTypes(filteredGrouped))
  }, [query])

  if (!mounted) return null

  return (
    <Combobox
      as="div"
      className={classNames(
        { 'bg-base-100': theme === 'light' },
        { 'bg-base-200': theme === 'dark' },
        'w-full mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 transition-all',
      )}
      value={selectedAction}
      onChange={(item: QuickAction) => {
        setSelectedAction(item)
        if (item.actionType === ActionType.JUMPTO && item.action)
          item.action(router)
      }}
    >
      <CMDSearch
        placeholder={placeholder}
        setQuery={setQuery}
        open={open}
        setOpen={setOpen}
      />
      {query === '' || filtered.length > 0 ? (
        <Combobox.Options
          static
          className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
        >
          <li className="p-2 text-sm">
            {filtered.map((action, index) => (
              <CMDEntry
                key={action.name}
                quickAction={action}
                isFirst={
                  index === 0 ||
                  filtered[index - 1].actionType !== action.actionType
                }
              />
            ))}
          </li>
        </Combobox.Options>
      ) : (
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
