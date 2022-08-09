/* eslint-disable import/prefer-default-export */

import {
  MenuAlt2Icon,
  MenuAlt3Icon,
  MenuAlt4Icon,
  MenuIcon,
} from '@heroicons/react/outline'
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
        icon={<MenuAlt2Icon />}
        tooltip={leftTT}
      />
      <AlignToolbarButton
        value="center"
        icon={<MenuIcon />}
        tooltip={centerTT}
      />
      <AlignToolbarButton
        value="right"
        icon={<MenuAlt3Icon />}
        tooltip={rightTT}
      />
      <AlignToolbarButton
        value="justify"
        icon={<MenuAlt4Icon />}
        tooltip={justifyTT}
      />
    </>
  )
}
