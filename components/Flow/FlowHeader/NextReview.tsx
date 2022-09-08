import { ClockIcon } from '@heroicons/react/24/outline'
import Tippy from '@tippyjs/react'
import classNames from 'classnames'
import { endOfToday } from 'date-fns'
import useRepetitionDetails from 'hooks/repetition/useRepetitionDetails'
import Skeleton from 'react-loading-skeleton'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'
import abbreviateDate from 'utils/abbreviateDate'
import findNextReviewTask from 'utils/repetition/findNextReviewTask'

interface Props {
  repetitionId?: string | undefined
}

export default function NextReview({ repetitionId }: Props) {
  if (!repetitionId) {
    return (
      <Tippy
        content="Create repetition below"
        arrow={false}
        delay={TOOLTIP_DELAY}
        offset={TOOLTIP_OFFSET}
      >
        <div className="w-full text-info flex items-center">
          <span className="mx-auto">No review</span>
        </div>
      </Tippy>
    )
  }

  const { repetitionDetails, repetitionDetailsLoading } =
    useRepetitionDetails(repetitionId)

  if (repetitionDetailsLoading) {
    return <Skeleton width={75} height={20} />
  }

  if (!repetitionDetails) {
    return (
      <Tippy
        content="Create repetition below"
        arrow={false}
        delay={TOOLTIP_DELAY}
        offset={TOOLTIP_OFFSET}
      >
        <div className="mr- text-info hover:text-current cursor-pointer flex items-center">
          <ClockIcon className="w-5 h-5 mr-1" />
          <span className="">No review</span>
        </div>
      </Tippy>
    )
  }

  const nextReviewTask = findNextReviewTask(repetitionDetails)
  const reviewDue =
    nextReviewTask &&
    nextReviewTask.DueDate &&
    endOfToday().getTime() > new Date(nextReviewTask.DueDate).getTime()

  return (
    <Tippy
      content="Next Review"
      arrow={false}
      delay={TOOLTIP_DELAY}
      offset={TOOLTIP_OFFSET}
    >
      <div className="mr- text-info hover:text-current cursor-pointer flex items-center">
        <ClockIcon className="w-5 h-5 mr-1" />
        <span className={classNames({ 'text-red-400': reviewDue })}>
          {nextReviewTask &&
            abbreviateDate(new Date(nextReviewTask?.DueDate || 0))}
        </span>
      </div>
    </Tippy>
  )
}
