/**
 * Return the previous block from a reference
 * @param ref the reference to get the previous from
 * @returns the previous block from the reference
 */
export default function getNextFromRef(
  ref: HTMLElement | null,
): HTMLElement | null {
  return ref?.parentElement?.parentElement?.previousElementSibling
    ?.childNodes[0].childNodes[1] as HTMLElement
}
