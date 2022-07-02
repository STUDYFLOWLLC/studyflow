import { reverse } from 'esrever'

/**
 * Count the number of whitespaces in the end of a string
 * @param str to operate on
 * @returns number of whitespaces in the end of the string
 */
export default function numWhiteSpacesInEnd(str: string) {
  const reversed = reverse(str)
  let counter = 0
  while (reversed[counter] === ' ') {
    counter += 1
  }
  return counter
}
