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

function countText(node: ChildNode) {
  let counter = 0
  if (node.nodeType === 3) {
    counter += node.textContent?.length || 0
  } else if (node.nodeType === 1) {
    // if it is an element node,
    const children = node.childNodes // examine the children
    for (let i = 0; i < children.length; i += 1) {
      counter += countText(children[i])
    }
  }
  return counter
}

const getCharactersInElement = (element: HTMLElement) => {
  let count = 0
  const children = element.childNodes
  for (let i = 0; i < children.length; i += 1) {
    count += countText(children[i])
  }
  return count
}

const getYoungestGeneration = (element: HTMLElement | undefined) => {
  if (!element) return []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nextGen: any[] = []
  const children = element.childNodes
  for (let i = 0; i < children.length; i += 1) {
    if (children[i].nodeType === 3) {
      nextGen.push(children[i])
    } else {
      nextGen.push(getYoungestGeneration(children[i] as HTMLElement))
    }
  }
  return nextGen
}

export function setCaretToPosition(
  element: HTMLElement | null,
  position?: number,
) {
  if (!element) return

  const range = document.createRange()
  const selection = window.getSelection()
  range.setStart(element, 0)

  let charactersProgressed = 0
  const charactersHere = getCharactersInElement(element)
  const youngestChildren = getYoungestGeneration(element).flat(Infinity)
  let realPosition = position || charactersHere
  realPosition = realPosition > charactersHere ? charactersHere : realPosition

  for (let i = 0; i < youngestChildren.length; i += 1) {
    const child = youngestChildren[i]
    if (child.nodeType === 3) {
      const text = child.textContent || ''
      const textLength = text.length
      if (charactersProgressed + textLength >= realPosition) {
        range.setStart(child, realPosition - charactersProgressed)
        break
      }
      charactersProgressed += textLength
    }
  }

  range.collapse(true)
  selection?.removeAllRanges()
  selection?.addRange(range)
}

export const setCaretToEnd = (element: HTMLElement | null) => {
  if (!element) return
  setCaretToPosition(element, getCharactersInElement(element))
}

// export const setCaretToEnd = async (element: HTMLElement | null) => {
//   if (!element) return
//   const range = document.createRange()
//   const selection = window.getSelection()
//   let totalChars = 0
//   const children = element.childNodes
//   for (let i = 0; i < children.length; i++) {
//     totalChars += countText(children[i])
//   }
//   console.log(totalChars)
//   const testerElement = element
//   // while (testerElement.childNodes.length !== 0) {
//   //   const children = testerElement.childNodes
//   //   console.log(children)
//   //   if (children[0]) console.log(children[0])
//   //   testerElement = testerElement.childNodes[0] as HTMLElement
//   // }
//   range.setStart(element.childNodes[0].childNodes[0].childNodes[0], 3)
//   range.collapse(true)
//   selection?.removeAllRanges()
//   selection?.addRange(range)

//   // Set the focus to the contenteditable element
// }

export function getCaretIndex(element: HTMLElement | null) {
  if (!element) return -1
  let position = 0
  const isSupported = typeof window.getSelection !== 'undefined'
  if (isSupported) {
    const selection = window.getSelection()
    if (selection && selection?.rangeCount !== 0) {
      const range = selection.getRangeAt(0)
      const preCaretRange = range.cloneRange()
      preCaretRange.selectNodeContents(element)
      preCaretRange.setEnd(range.endContainer, range.endOffset)
      position = preCaretRange.toString().length
    }
  }
  return position
}
