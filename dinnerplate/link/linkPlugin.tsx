/* eslint-disable import/prefer-default-export */
import { LinkPlugin, PlateFloatingLink } from '@udecode/plate'
import { MyPlatePlugin } from 'dinnerplate/types/plateTypes'

export const linkPlugin: Partial<MyPlatePlugin<LinkPlugin>> = {
  renderAfterEditable: PlateFloatingLink,
}
