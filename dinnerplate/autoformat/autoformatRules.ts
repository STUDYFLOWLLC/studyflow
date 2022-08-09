/* eslint-disable import/prefer-default-export */
import {
  autoformatArrow,
  autoformatLegal,
  autoformatLegalHtml,
  autoformatMath,
  autoformatPunctuation,
  autoformatSmartQuotes,
} from '@udecode/plate'
import { autoformatBlocks } from 'dinnerplate/autoformat/autoformatBlocks'
import { autoformatLists } from 'dinnerplate/autoformat/autoformatLists'
import { autoformatMarks } from 'dinnerplate/autoformat/autoformatMarks'
import { MyAutoformatRule } from 'dinnerplate/types/plateTypes'

export const autoformatRules = [
  ...autoformatBlocks,
  ...autoformatLists,
  ...autoformatMarks,
  ...(autoformatSmartQuotes as MyAutoformatRule[]),
  ...(autoformatPunctuation as MyAutoformatRule[]),
  ...(autoformatLegal as MyAutoformatRule[]),
  ...(autoformatLegalHtml as MyAutoformatRule[]),
  ...(autoformatArrow as MyAutoformatRule[]),
  ...(autoformatMath as MyAutoformatRule[]),
]
