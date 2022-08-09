// import { useFocused, useSelected } from 'slate-react'
import { RenderElementProps } from 'types/CustomSlate'

// const Mention = ({ attributes, children, element }: MentionElement) => {
//   const selected = useSelected()
//   const focused = useFocused()
//   return (
//     <span
//       {...attributes}
//       contentEditable={false}
//       data-cy={`mention-${element.character.replace(' ', '-')}`}
//       style={{
//         padding: '3px 3px 2px',
//         margin: '0 1px',
//         verticalAlign: 'baseline',
//         display: 'inline-block',
//         borderRadius: '4px',
//         backgroundColor: '#eee',
//         fontSize: '0.9em',
//         boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none',
//       }}
//     >
//       {children}@{element.character}
//     </span>
//   )
// }

export default function Element({
  attributes,
  children,
  element,
}: RenderElementProps) {
  const style = { textAlign: element.align }
  switch (element.type) {
    // case 'mention':
    //   return <Mention {...{ attributes, children, element }} />
    case 'block-quote':
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case 'bulleted-list':
      return (
        <ul className="list-disc" style={style} {...attributes}>
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'heading-three':
      return (
        <h3 style={style} {...attributes}>
          {children}
        </h3>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol className="list-decimal" style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}
