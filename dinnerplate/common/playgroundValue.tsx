/* eslint-disable import/prefer-default-export */
import { alignValue } from 'dinnerplate/align/alignValue'
import { autoformatValue } from 'dinnerplate/autoformat/autoformatValue'
import { fontValue } from 'dinnerplate/common/fontValue'
import { softBreakValue } from 'dinnerplate/common/softBreakValue'
import { basicElementsValue } from 'dinnerplate/elements/basicElementsValue'
import { exitBreakValue } from 'dinnerplate/exitbreak/exitBreakValue'
import { forcedLayoutValue } from 'dinnerplate/forcedlayout/forcedLayoutValue'
import { highlightValue } from 'dinnerplate/highlight/highlightValue'
import { horizontalRuleValue } from 'dinnerplate/horizontalrule/horizontalRuleValue'
import { indentValue } from 'dinnerplate/indent/indentValue'
import { kbdValue } from 'dinnerplate/kbd/kbdValue'
import { linkValue } from 'dinnerplate/link/linkValue'
import { listValue } from 'dinnerplate/list/listValue'
import { basicMarksValue } from 'dinnerplate/marks/basicMarksValue'
import { mediaValue } from 'dinnerplate/media/mediaValue'
import { mentionValue } from 'dinnerplate/mention/mentionValue'
import { createNodesWithId } from 'dinnerplate/nodes/createNodesWithId'
import { tableValue } from 'dinnerplate/table/tableValue'

export const playgroundValue: any = createNodesWithId([
  ...forcedLayoutValue,
  ...basicMarksValue,
  ...kbdValue,
  ...fontValue,
  ...highlightValue,
  ...basicElementsValue,
  ...horizontalRuleValue,
  ...alignValue,
  // ...lineHeightValue,
  ...indentValue,
  ...listValue,
  ...tableValue,
  ...linkValue,
  ...mentionValue,
  ...mediaValue,
  // ...excalidrawValue,
  ...autoformatValue,
  ...softBreakValue,
  ...exitBreakValue,
  // ...deserializeHtmlValue,
  // ...deserializeDocxValue,
  // ...deserializeMdValue,
  // ...deserializeCsvValue,
])
