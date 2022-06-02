/* eslint-disable no-unused-expressions, no-console */
import { Combobox, Dialog, Transition } from '@headlessui/react'
import {
  DocumentAddIcon,
  EmojiSadIcon,
  FolderAddIcon,
  FolderIcon,
  HashtagIcon,
  TagIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import classnames from 'classnames'
// import { QuickAction } from 'components/CMDPalette/CMDEntry'
import CMDEntry from 'components/CMDPalette/CMDEntry'
import { useTheme } from 'next-themes'
import { Fragment, SetStateAction, useEffect, useState } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { QuickAction } from 'types/CMDPalette'

const projects = [
  { id: 1, name: 'Workflow Inc. / Website Redesign', url: '#' },
  // More projects...
]
const recent = [projects[0]]
// const quickActions: QuickAction[] = [
//   {
//     name: 'Add new file...',
//     CmdIcon: DocumentAddIcon,
//     shortcut: 'N',
//     url: '#',
//   },
//   {
//     name: 'Add new folder...',
//     CmdIcon: FolderAddIcon,
//     shortcut: 'F',
//     url: '#',
//   },
//   { name: 'Add hashtag...', CmdIcon: HashtagIcon, shortcut: 'H', url: '#' },
//   { name: 'Add label...', CmdIcon: TagIcon, shortcut: 'L', url: '#' },
// ]
const quickActions: QuickAction[] = [
  {
    name: 'Add new file...',
    CmdIcon: DocumentAddIcon,
    shortcut: 'N',
    url: '#',
    action: () => console.log('add new file action'),
  },
  {
    name: 'Add new folder...',
    CmdIcon: FolderAddIcon,
    shortcut: 'F',
    url: '#',
    action: () => console.log('add new folder tes'),
  },
  {
    name: 'Add hashtag...',
    CmdIcon: HashtagIcon,
    shortcut: 'H',
    url: '#',
    action: () => console.log('add hashtag test'),
  },
  {
    name: 'Add label...',
    CmdIcon: TagIcon,
    shortcut: 'L',
    url: '#',
    action: () => console.log('add label test'),
  },
]

export default function CMDPalette() {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedAction, setSelectedAction] = useState<QuickAction>()

  useHotkeys(
    'cmd+k, ctrl+k',
    (e) => {
      e.preventDefault()
      setOpen(!open)
    },
    {
      enableOnTags: ['INPUT'],
    },
    [open],
  )

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const filteredProjects =
    query === ''
      ? []
      : projects.filter((project) =>
          project.name.toLowerCase().includes(query.toLowerCase()),
        )

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className={classnames(
              { 'bg-slate-100': theme !== 'dark' },
              { 'bg-base-200': theme === 'dark' },
              'mx-auto max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 transition-all',
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
                placeholder="Search..."
                onChange={(event: {
                  target: { value: SetStateAction<string> }
                }) => setQuery(event.target.value)}
              />
              <kbd
                onClick={() => setOpen(!open)}
                onKeyDown={() => setOpen(!open)}
                className="kbd kbd-xs absolute top-4 right-4 h-5 w-8 cursor-pointer"
              >
                esc
              </kbd>
            </div>

            {(query === '' || filteredProjects.length > 0) && (
              <Combobox.Options
                static
                className="max-h-80 scroll-py-2 divide-y divide-gray-100 overflow-y-auto"
              >
                <li className="p-2">
                  {query === '' && (
                    <h2 className="mt-4 mb-2 px-3 text-xs font-semibold text-gray-500">
                      Recent searches
                    </h2>
                  )}
                  <ul className="text-sm">
                    {(query === '' ? recent : filteredProjects).map(
                      (project) => (
                        <Combobox.Option
                          key={project.id}
                          value={project}
                          className={({ active }) =>
                            classnames(
                              'flex cursor-default select-none items-center rounded-md px-3 py-2',
                              { 'bg-primary text-white': active },
                            )
                          }
                        >
                          {({ active }) => (
                            <>
                              <FolderIcon
                                className={classnames(
                                  'h-6 w-6 flex-none',
                                  { 'text-white': active },
                                  { 'text-gray-400': !active },
                                )}
                                aria-hidden="true"
                              />
                              <span className="ml-3 flex-auto truncate">
                                {project.name}
                              </span>
                              {active && (
                                <span className="ml-3 flex-none text-sky-100">
                                  Jump to...
                                </span>
                              )}
                            </>
                          )}
                        </Combobox.Option>
                      ),
                    )}
                  </ul>
                </li>
                {query === '' && (
                  <li className="p-2">
                    <h2 className="sr-only">Quick actions</h2>
                    <ul className="text-sm">
                      {quickActions.map((action) => (
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
                )}
              </Combobox.Options>
            )}

            {query !== '' && filteredProjects.length === 0 && (
              <div className="py-14 px-6 text-center sm:px-14">
                <EmojiSadIcon
                  className="mx-auto h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
                <p className="mt-4 text-sm">
                  We couldn&apos;t find any projects with that term. Please try
                  again.
                </p>
              </div>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}
