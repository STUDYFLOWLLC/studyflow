/* eslint-disable import/prefer-default-export */

import { TEditableProps } from '@udecode/plate'
import { MyValue } from 'dinnerplate/types/plateTypes'

export const editableProps: TEditableProps<MyValue> = {
  spellCheck: false,
  autoFocus: false,
  readOnly: false,
  placeholder: 'Type…',
}
