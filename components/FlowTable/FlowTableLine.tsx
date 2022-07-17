import classnames from 'classnames'
import RainbowPublicIcon from 'components/Flow/RainbowPublicIcon'
import OpenFancy from 'components/FlowTable/OpenFancy'
import { DashFlow } from 'hooks/flows/useDashFlows'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { FlowVisibility } from 'types/Flow'

interface Props {
  setCurrentFlow: (flowId: string) => void
  flow: DashFlow
  loading: boolean
  nextReview: string
}

export default function FlowTableLine({
  setCurrentFlow,
  flow,
  loading,
  nextReview,
}: Props) {
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [showOpenIcon, setShowOpenIcon] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <tr id={flow.FlowID}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <td
        onClick={() => {
          setCurrentFlow(flow.FlowID)
        }}
        onKeyDown={() => {
          setCurrentFlow(flow.FlowID)
        }}
        onMouseOver={() => setShowOpenIcon(true)}
        onMouseLeave={() => setShowOpenIcon(false)}
        onFocus={() => setShowOpenIcon(true)}
        onBlur={() => setShowOpenIcon(false)}
        className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium cursor-pointer"
      >
        <div className="flex items-center space-x-3 lg:pl-2">
          {!loading ? (
            <div
              className={classnames(
                flow.FK_CourseOnTerm.Color,
                'flex-shrink-0 w-2.5 h-2.5 rounded-full',
              )}
              aria-hidden="true"
            />
          ) : (
            <Skeleton circle width={10} height={10} />
          )}
          <a href="#" className={classnames('truncate transition-colors')}>
            {!loading ? (
              <span className="flex items-center">
                <div>
                  <span
                    className={classnames({
                      'text-primary brightness-90 font-semibold': showOpenIcon,
                    })}
                  >
                    {flow.Title}{' '}
                  </span>
                  <span
                    className={classnames(
                      { 'text-gray-500': !showOpenIcon },
                      'font-normal',
                    )}
                  >
                    <span className="lowercase">{flow.Type} </span>in{' '}
                    {flow.FK_CourseOnTerm.Nickname ||
                      flow.FK_CourseOnTerm.FK_Course?.Code}
                  </span>
                </div>
                {flow.Visibility === FlowVisibility.PUBLIC && (
                  <RainbowPublicIcon dimension="w-4 h-4 ml-2" />
                )}
              </span>
            ) : (
              <Skeleton width={350} />
            )}
          </a>
        </div>
      </td>
      <td
        className={classnames(
          { 'text-gray-500': theme === 'light' },
          'w-12 hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-right',
        )}
      >
        {!loading ? (
          <p>{new Date(flow.UserEnteredDate).toDateString().slice(0, 10)}</p>
        ) : (
          <Skeleton width={100} />
        )}
      </td>
      <td
        className={classnames(
          'w-12 hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-right',
        )}
      >
        {!loading ? <p>{nextReview}</p> : <Skeleton width={60} />}
      </td>
      <OpenFancy
        setCurrentFlow={setCurrentFlow}
        flowID={flow.FlowID}
        loading={loading}
        showOpenIcon={showOpenIcon}
        setShowOpenIcon={setShowOpenIcon}
      />
    </tr>
  )
}
