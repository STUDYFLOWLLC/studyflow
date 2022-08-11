/* eslint-disable import/prefer-default-export */
import {
  HeadingToolbar,
  ToolbarProps,
  withPlateEventProvider,
} from '@udecode/plate'

export const Toolbar = withPlateEventProvider((props: ToolbarProps) => (
  <HeadingToolbar
    {...props}
    className="bg-base-100 text-inherit sticky top-2 border p-2 rounded-md shadow-xl flex flex-wrap justify-center"
    style={{ zIndex: 5000 }}
  />
))
