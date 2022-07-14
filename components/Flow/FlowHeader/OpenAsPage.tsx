import { ArrowsExpandIcon } from '@heroicons/react/outline'
import Tippy from '@tippyjs/react'

export default function OpenAsPage() {
  return (
    <Tippy content="Open as page" arrow={false} delay={750} offset={[0, 5]}>
      <div>
        <ArrowsExpandIcon className="w-5 h-5 text-info hover:text-current cursor-pointer" />
      </div>
    </Tippy>
  )
}
