/* eslint-disable import/prefer-default-export */

import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3CenterLeftIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { TippyProps } from '@tippyjs/react'
import { AlignToolbarButton } from '@udecode/plate'

export const AlignToolbarButtons = () => {
  const tooltip: TippyProps = {
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: false,
    offset: [0, 5],
    placement: 'top',
  }
  const leftTT: TippyProps = { content: 'Align left', ...tooltip }
  const centerTT: TippyProps = { content: 'Align center', ...tooltip }
  const rightTT: TippyProps = { content: 'Align right', ...tooltip }
  const justifyTT: TippyProps = { content: 'Align justify', ...tooltip }

  return (
    <>
      <AlignToolbarButton
        value="left"
        icon={<Bars3BottomLeftIcon />}
        tooltip={leftTT}
      />
      <AlignToolbarButton
        value="center"
        icon={<Bars3Icon />}
        tooltip={centerTT}
      />
      <AlignToolbarButton
        value="right"
        icon={<Bars3BottomRightIcon />}
        tooltip={rightTT}
      />
      <AlignToolbarButton
        value="justify"
        icon={<Bars3CenterLeftIcon />}
        tooltip={justifyTT}
      />
    </>
  )
}
