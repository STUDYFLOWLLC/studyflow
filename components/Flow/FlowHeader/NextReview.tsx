import { ClockIcon } from '@heroicons/react/outline'
import Tippy from '@tippyjs/react'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'

export default function NextReview() {
  return (
    <Tippy
      content="Next Review In"
      arrow={false}
      delay={TOOLTIP_DELAY}
      offset={TOOLTIP_OFFSET}
    >
      <div className="mr- text-info hover:text-current cursor-pointer flex items-center">
        <ClockIcon className="w-5 h-5 mr-1" />
        <span className="">3 days </span>
      </div>
    </Tippy>
  )
}
