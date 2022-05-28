import classnames from 'classnames'
import OpenFancy from 'components/FlowTable/OpenFancy'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

interface Props {
  loading: boolean
  flowID: string
  bgColorClass: string
  title: string
  course: string
  createdDate: string
  nextReview: string
}

export default function FlowTableLine(props: Props) {
  const {
    loading,
    flowID,
    bgColorClass,
    title,
    course,
    createdDate,
    nextReview,
  } = props
  const { theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  const [showOpenIcon, setShowOpenIcon] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <tr>
      <td
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
                bgColorClass,
                'flex-shrink-0 w-2.5 h-2.5 rounded-full',
              )}
              aria-hidden="true"
            />
          ) : (
            <Skeleton circle width={10} height={10} />
          )}
          <a href="#" className={classnames('truncate transition-colors')}>
            {!loading ? (
              <span>
                <span
                  className={classnames({
                    'text-primary brightness-90 font-semibold': showOpenIcon,
                  })}
                >
                  {title}{' '}
                </span>
                <span
                  className={classnames(
                    { 'text-gray-500': !showOpenIcon },
                    'font-normal',
                  )}
                >
                  in {course}
                </span>
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
        {!loading ? <p>{createdDate}</p> : <Skeleton width={100} />}
      </td>
      <td
        className={classnames(
          'w-12 hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-right',
        )}
      >
        {!loading ? <p>{nextReview}</p> : <Skeleton width={60} />}
      </td>
      <OpenFancy
        loading={loading}
        showOpenIcon={showOpenIcon}
        setShowOpenIcon={setShowOpenIcon}
      />
    </tr>
  )
}
