/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

export const createNodesWithId = (nodes: any[]) => {
  let _id = 10000
  nodes.forEach((node) => {
    node.id = _id
    _id += 1
  })

  return nodes
}
