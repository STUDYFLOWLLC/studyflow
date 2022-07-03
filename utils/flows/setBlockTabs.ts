import { Block } from 'types/Flow'

/**
 * Increment the number of tabs in a block (max 4)
 * @param block The block to increment the tabs on
 * @returns the number of tabs on the block after the increment
 */
export function incrementBlockTabs(block: Block) {
  return Math.min(block.tabs + 1, 4)
}

/**
 * Decrement the number of tabs in a block (min 0)
 * @param block The block to decrement the tabs on
 * @returns the number of tabs on the block after the decrement
 */
export function decrementBlockTabs(block: Block) {
  return Math.max(block.tabs - 1, 0)
}
