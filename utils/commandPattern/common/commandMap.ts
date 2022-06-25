import { UpdatePropertyCommandData } from 'utils/commandPattern/common/commands/updatePropertyCommand'

export interface CommonCommandMap<TTarget> {
  'update-property': UpdatePropertyCommandData<TTarget>
}

export type commonCommandKeys<T> = keyof CommonCommandMap<T>

/**
 * A simple helper function that asserts that the command-data/key combination
 * correspond to an expected key in the CommonCommandMap.
 * @example if (isCommonCommand(commandData, key, 'update-property')) {
 *     return new UpdatePropertyCommand<T>(commandData); // yes, commandData is UpdatePropertyCommandData<T>
 *   }
 */
export function isCommonCommand<T, K extends keyof CommonCommandMap<T>>(
  commandData: CommonCommandMap<T>[keyof CommonCommandMap<T>],
  actualKey: string,
  expectedKey: K,
): commandData is CommonCommandMap<T>[K] {
  return actualKey === expectedKey
}
