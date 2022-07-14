import { CheckIcon } from '@heroicons/react/outline'
import Tippy from '@tippyjs/react'
import MainSpinner from 'components/spinners/MainSpinner'
import { SpinnerSizes } from 'types/Loading'
import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from 'types/Magic'

interface Props {
  saving: boolean
  loading: boolean
}

export default function FlowSaving({ saving, loading }: Props) {
  return (
    <Tippy
      content={saving || loading ? 'saving changes' : 'all changes saved'}
      arrow={false}
      delay={TOOLTIP_DELAY}
      offset={TOOLTIP_OFFSET}
    >
      <div className="transition-all duration-500 h-5">
        {saving || loading ? (
          <MainSpinner size={SpinnerSizes.small} />
        ) : (
          <CheckIcon className="w-5 h-5 text-info" />
        )}
      </div>
    </Tippy>
  )
}
