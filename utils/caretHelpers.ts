export const getCaretCoordinates = () => {
  let x
  let y
  const isSupported = typeof window.getSelection !== 'undefined'
  if (isSupported) {
    const selection = window.getSelection()
    // Check if there is a selection (i.e. cursor in place)
    if (selection !== null && selection.rangeCount !== 0) {
      // Clone the range
      const range = selection.getRangeAt(0).cloneRange()
      // Collapse the range to the start, so there are not multiple chars selected
      range.collapse(false)
      // getCientRects returns all the positioning information we need
      const rect = range.getClientRects()[0]
      if (rect) {
        x = rect.left
        y = rect.top
      }
    }
  }
  return { x, y }
}

export const setCaretToEnd = async (element: HTMLElement | null) => {
  if (!element) return
  const range = document.createRange()
  const selection = window.getSelection()
  range.setStart(element.childNodes[0].childNodes[0].childNodes[0], 0)
  range.collapse(true)
  selection?.removeAllRanges()
  selection?.addRange(range)

  // Set the focus to the contenteditable element
}
