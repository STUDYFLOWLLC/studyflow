/* eslint-disable import/prefer-default-export */
import { AutoformatPlugin } from '@udecode/plate'
import { autoformatRules } from 'dinnerplate/autoformat/autoformatRules'
import { MyEditor, MyPlatePlugin, MyValue } from 'dinnerplate/types/plateTypes'

export const autoformatPlugin: Partial<
  MyPlatePlugin<AutoformatPlugin<MyValue, MyEditor>>
> = {
  options: {
    rules: autoformatRules as any,
    enableUndoOnDelete: true,
  },
}
