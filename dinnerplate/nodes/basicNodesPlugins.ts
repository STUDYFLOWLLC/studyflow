/* eslint-disable import/prefer-default-export */
import { plateUI } from 'dinnerplate/common/plateUI'
import { basicElementsPlugins } from 'dinnerplate/elements/basicElementsPlugins'
import { basicMarksPlugins } from 'dinnerplate/marks/basicMarksPlugins'
import { createMyPlugins } from 'dinnerplate/types/plateTypes'

export const basicNodesPlugins = createMyPlugins(
  [...basicElementsPlugins, ...basicMarksPlugins],
  {
    components: plateUI,
  },
)
