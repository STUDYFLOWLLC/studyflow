/* eslint-disable import/prefer-default-export */
import { FormatListBulleted } from '@styled-icons/material/FormatListBulleted'
import { FormatListNumbered } from '@styled-icons/material/FormatListNumbered'
import { TippyProps } from '@tippyjs/react'
import {
  ELEMENT_OL,
  ELEMENT_UL,
  getPluginType,
  ListToolbarButton,
} from '@udecode/plate'
import { useMyPlateEditorRef } from 'dinnerplate/types/plateTypes'

export const ListToolbarButtons = () => {
  const editor = useMyPlateEditorRef()!

  const tooltip: TippyProps = {
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: false,
    offset: [0, 5],
    placement: 'top',
  }

  const bulletTT: TippyProps = { content: 'Bullet List', ...tooltip }
  const numberTT: TippyProps = { content: 'Number List', ...tooltip }

  return (
    <>
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_UL)}
        icon={<FormatListBulleted />}
        tooltip={bulletTT}
      />
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_OL)}
        icon={<FormatListNumbered />}
        tooltip={numberTT}
      />
    </>
  )
}
