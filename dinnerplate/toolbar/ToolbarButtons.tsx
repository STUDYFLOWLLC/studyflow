/* eslint-disable import/prefer-default-export */
import { GlobeIcon, PhotographIcon } from '@heroicons/react/outline'
import { Check } from '@styled-icons/material/Check'
import { FontDownload } from '@styled-icons/material/FontDownload'
import { FormatColorText } from '@styled-icons/material/FormatColorText'
import { Link } from '@styled-icons/material/Link'
import { TippyProps } from '@tippyjs/react'
import {
  ColorPickerToolbarDropdown,
  ImageToolbarButton,
  LinkToolbarButton,
  MARK_BG_COLOR,
  MARK_COLOR,
  MediaEmbedToolbarButton,
} from '@udecode/plate'
import { AlignToolbarButtons } from 'dinnerplate/align/AlignToolbarButtons'
import { BasicElementToolbarButtons } from 'dinnerplate/toolbar/BasicElementToolbarButtons'
import { BasicMarkToolbarButtons } from 'dinnerplate/toolbar/BasicMarkToolbarButtons'
import { IndentToolbarButtons } from 'dinnerplate/toolbar/IndentToolbarButtons'
import { ListToolbarButtons } from 'dinnerplate/toolbar/ListToolbarButtons'

export const ToolbarButtons = () => {
  const tooltip: TippyProps = {
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: false,
    offset: [0, 5],
    placement: 'top',
  }
  const colorTooltip: TippyProps = { content: 'Pen Color' }
  const bgTooltip: TippyProps = { content: 'Highlight Color' }
  const linkTT: TippyProps = { content: 'Link', ...tooltip }
  const imageTT: TippyProps = { content: 'Image', ...tooltip }
  const mediaTT: TippyProps = { content: 'Webpage or video', ...tooltip }

  return (
    <>
      <BasicElementToolbarButtons />
      <ListToolbarButtons />
      <IndentToolbarButtons />
      <BasicMarkToolbarButtons />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_COLOR}
        icon={<FormatColorText />}
        selectedIcon={<Check />}
        tooltip={colorTooltip}
      />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_BG_COLOR}
        icon={<FontDownload />}
        selectedIcon={<Check />}
        tooltip={bgTooltip}
      />
      {/* <LineHeightToolbarDropdown icon={<LineWeight />} /> */}
      <AlignToolbarButtons />
      <LinkToolbarButton icon={<Link />} tooltip={linkTT} />
      <ImageToolbarButton icon={<PhotographIcon />} tooltip={imageTT} />
      <MediaEmbedToolbarButton icon={<GlobeIcon />} tooltip={mediaTT} />
      {/* <TableToolbarButtons /> */}
    </>
  )
}
