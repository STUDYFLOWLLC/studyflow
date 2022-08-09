import classNames from 'classnames'
import { RenderLeafProps } from 'types/CustomSlate'

// Define a React component to render leaves with bold text.
export default function Leaf({ attributes, children, leaf }: RenderLeafProps) {
  return (
    <span
      {...attributes}
      className={classNames(
        { 'font-bold': leaf.bold },
        { italic: leaf.italic },
        { code: leaf.code },
        { underline: leaf.underline },
        '',
      )}
    >
      {children}
    </span>
  )
}
