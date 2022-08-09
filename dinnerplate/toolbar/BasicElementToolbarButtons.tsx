/* eslint-disable import/prefer-default-export */
import { FormatQuote } from '@styled-icons/material/FormatQuote'
import { H1 } from '@styled-icons/remix-editor/H1'
import { H2 } from '@styled-icons/remix-editor/H2'
import { H3 } from '@styled-icons/remix-editor/H3'
import { TippyProps } from '@tippyjs/react'
import {
  BlockToolbarButton,
  ELEMENT_BLOCKQUOTE,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  getPluginType,
} from '@udecode/plate'
import { useMyPlateEditorRef } from 'dinnerplate/types/plateTypes'

export const BasicElementToolbarButtons = () => {
  const editor = useMyPlateEditorRef()!

  const tooltip: TippyProps = {
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: false,
    offset: [0, 5],
    placement: 'top',
  }
  const h1TT: TippyProps = { content: 'Heading One (⌘+⇧+1)', ...tooltip }
  const h2TT: TippyProps = { content: 'Heading Two (⌘+⇧+2)', ...tooltip }
  const h3TT: TippyProps = { content: 'Heading Three (⌘+⇧+3)', ...tooltip }
  const blockquoteTT: TippyProps = { content: 'Blockquote (⌘+⇧+Q)', ...tooltip }

  return (
    <>
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H1)}
        icon={<H1 />}
        tooltip={h1TT}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H2)}
        icon={<H2 className="w-5 h-5" />}
        tooltip={h2TT}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_H3)}
        icon={<H3 />}
        tooltip={h3TT}
      />
      <BlockToolbarButton
        type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
        icon={<FormatQuote />}
        tooltip={blockquoteTT}
      />
      {/* <CodeBlockToolbarButton
        type={getPluginType(editor, ELEMENT_CODE_BLOCK)}
        icon={<CodeBlock />}
      /> */}
    </>
  )
}
