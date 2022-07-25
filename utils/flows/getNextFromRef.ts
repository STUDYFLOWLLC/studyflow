/**
 * Return the next block from a reference
 * @param ref the reference to get the next from
 * @returns the next block from the reference
 */
export default function getNextFromRef(
  ref: HTMLElement | null,
): HTMLElement | null {
  return ref?.parentElement?.parentElement?.nextElementSibling?.childNodes[0]
    .childNodes[1] as HTMLElement
}
