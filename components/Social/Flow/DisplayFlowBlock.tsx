/* eslint-disable @typescript-eslint/no-empty-function */

import { Block } from 'types/Flow'
import blockParser from 'utils/flows/blockParser'
import ContentEditable from 'utils/flows/ContentEditable'

interface Props {
  block: Block
}

export default function DisplayFlowBlock({ block }: Props) {
  return (
    <ContentEditable disabled onChange={() => {}} html={blockParser(block)} />
  )
}
