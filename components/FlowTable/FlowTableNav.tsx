import classNames from 'classnames'
import EmptyTrashModal from 'components/Dashboard/EmptyTrashModal'
import { Tab } from 'components/FlowTable/FlowTableHeader'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface Props {
  tabs: Tab[]
}

export default function SettingsNavBig({ tabs }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [showTrashModal, setShowTrashModal] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <EmptyTrashModal open={showTrashModal} setOpen={setShowTrashModal} />
      <th
        className={classNames(
          {
            'bg-gray-50 text-gray-500': theme === 'light',
          },
          'flex bottom-0 text-left text-xs font-medium uppercase tracking-wider h-full max-w-sm overflow-x-auto pr-2 border-r-2',
        )}
      >
        {tabs.map((tab) => (
          <span key={tab.name} className="mx-2">
            {tab.name === 'Trash' && tab.active ? (
              <button
                type="button"
                className="bg-rose-400 rounded-md px-1 py-1 mt-2 uppercase text-white"
                onClick={() => setShowTrashModal(true)}
              >
                Empty Trash
              </button>
            ) : (
              <span
                className={classNames(
                  {
                    'border-primary text-primary': tab.active,
                  },
                  {
                    'border-transparent hover:border-gray-300':
                      !tab.active && theme === 'light',
                  },
                  {
                    'border-transparent hover:border-gray-300':
                      !tab.active && theme === 'dark',
                  },
                  'mx-2 pt-3 pb-[.56rem] h-full md:table-cell border-spacing-0 whitespace-nowrap cursor-pointer px-1 border-b-2 font-medium transition',
                )}
                onClick={() => tab.handler()}
                onKeyDown={() => tab.handler()}
              >
                {tab.name}
              </span>
            )}
          </span>
        ))}
      </th>
    </>
  )
}
