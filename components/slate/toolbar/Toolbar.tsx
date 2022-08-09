import BlockButton from 'components/slate/toolbar/BlockButton'
import MarkButton from 'components/slate/toolbar/MarkButton'
import { BiCodeAlt } from 'react-icons/bi'
import {
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatListNumberedRtl,
  MdFormatQuote,
  MdFormatUnderlined,
} from 'react-icons/md'
import { Format } from 'types/CustomSlate'

export default function Toolbar() {
  return (
    <div className="flex flex-col w-12 mr-2 absolute right-0 shadow-xl border rounded-md py-2">
      <MarkButton format={Format.BOLD} ButtonIcon={MdFormatBold} />
      <MarkButton format={Format.ITALIC} ButtonIcon={MdFormatItalic} />
      <MarkButton format={Format.UNDERLINE} ButtonIcon={MdFormatUnderlined} />
      <MarkButton format={Format.CODE} ButtonIcon={BiCodeAlt} />
      <BlockButton format={Format.PARAGRAPH} text="P" />
      <BlockButton format={Format.HEADING_ONE} text="H1" />
      <BlockButton format={Format.HEADING_TWO} text="H2" />
      <BlockButton format={Format.HEADING_THREE} text="H3" />
      <BlockButton format={Format.BLOCK_QUOTE} ButtonIcon={MdFormatQuote} />
      <BlockButton
        format={Format.NUMBERED_LIST}
        ButtonIcon={MdFormatListNumberedRtl}
      />
      <BlockButton
        format={Format.BULLETED_LIST}
        ButtonIcon={MdFormatListBulleted}
      />
      <BlockButton format={Format.ALIGN_LEFT} ButtonIcon={MdFormatAlignLeft} />
      <BlockButton
        format={Format.ALIGN_CENTER}
        ButtonIcon={MdFormatAlignCenter}
      />
      <BlockButton
        format={Format.ALIGN_RIGHT}
        ButtonIcon={MdFormatAlignRight}
      />
    </div>
  )
}
