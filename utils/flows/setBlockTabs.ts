import { Block } from 'types/Flow'

export function incrementBlockTabs(block: Block) {
  return Math.min(block.tabs + 1, 4)
}

export function decrementBlockTabs(block: Block) {
  return Math.max(block.tabs - 1, 0)
}
