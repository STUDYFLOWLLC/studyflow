import { DocumentPlusIcon, StarIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import PinMenu from 'components/Dashboard/Upcoming/PinMenu'
import { DashFlow } from 'hooks/flows/useDashFlows'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { bgColor } from 'types/Colors'
import { FlowType } from 'types/Flow'
import abbreviateDate from 'utils/abbreviateDate'
import shorten from 'utils/shorten'

interface Props {
  flow: DashFlow
  setCurrentFlow: (flowId: string) => void
}

export default function Pin({ flow, setCurrentFlow }: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const abbreviated = abbreviateDate(new Date(flow.UserEnteredDate))

  return (
    <div
      key={flow.FlowID}
      className="relative col-span-1 flex shadow-sm rounded-md m-2 w-48"
      onClick={() => {
        setCurrentFlow(flow.FlowID)
      }}
      onKeyDown={() => {
        setCurrentFlow(flow.FlowID)
      }}
    >
      <div
        className={classNames(
          flow.FK_CourseOnTerm?.Color || bgColor.BLUE,
          'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md',
        )}
      >
        {flow.Type === FlowType.ASSESSMENT && <StarIcon className="w-7 h-7" />}
        {flow.Type === FlowType.ASSIGNMENT && (
          <DocumentPlusIcon className="w-7 h-7" />
        )}
      </div>
      <div
        className={classNames(
          { 'bg-white border-gray-200': theme === 'light' },
          { 'bg-slate-700 border-slate-600': theme === 'dark' },
          'flex-1 flex items-center justify-between border-t border-r border-b  rounded-r-md truncate',
        )}
      >
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <a href="#" className="font-medium">
            {shorten(flow.Title, 10)}
          </a>
          <p className="text-info">{abbreviated}</p>
        </div>
        <PinMenu />
      </div>
      {abbreviated === 'Today' && (
        <span className="absolute right-[-0.25rem] top-[-0.25rem] h-3 w-3">
          <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-secondary/80 opacity-75" />
          <span className="absolute inline-flex rounded-full h-3 w-3 bg-secondary" />
        </span>
      )}
    </div>
  )
}
