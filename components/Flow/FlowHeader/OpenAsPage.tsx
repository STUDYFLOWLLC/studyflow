import { ArrowsExpandIcon } from '@heroicons/react/outline'
import Tippy from '@tippyjs/react'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'

export default function OpenAsPage() {
  return (
    <Tippy
      content="Open as page coming soon"
      arrow={false}
      delay={TOOLTIP_DELAY}
      offset={TOOLTIP_OFFSET}
    >
      <div>
        <ArrowsExpandIcon className="w-5 h-5 text-info hover:text-current cursor-pointer" />
      </div>
    </Tippy>
  )
}
