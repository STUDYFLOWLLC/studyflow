import { nanoid } from 'nanoid'
import { Element } from 'slate'

export const makeNodeId = () => nanoid(16)

export const assignIdRecursively = (node) => {
  if (Element.isElement(node)) {
    node.id = makeNodeId()
    node.children.forEach(assignIdRecursively)
  }
}

export const withNodeId = (editor) => {
  const { apply } = editor

  editor.apply = (operation) => {
    if (operation.type === 'insert_node') {
      assignIdRecursively(operation.node)
      return apply(operation)
    }

    if (operation.type === 'split_node') {
      operation.properties.id = makeNodeId()
      return apply(operation)
    }

    return apply(operation)
  }

  return editor
}
