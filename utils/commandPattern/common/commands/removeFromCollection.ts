import { Command, CommandResult } from 'utils/commandPattern/commandModel'
import { setCaretToEnd } from 'utils/flows/caretHelpers'
import getNextFromRef from 'utils/flows/getNextFromRef'

interface RemoveElementByIndexCommandData<TElement> {
  /**
   * The collection from which the element must be removed.
   */
  collection: TElement[]
  /**
   * The 0-based index of the element to remove from the collection.
   */
  index: number
  /**
   * Reserved for RemoveElementByIndexCommandData
   */
  element?: never
  /**
   * The setter with usestate callback so this works in
   * the text editor.
   */
  setter: (newCollection: TElement[], handler?: () => void) => void
  /**
   * The ref to the current element
   */
  ref: HTMLElement | null
}

export type RemoveFromCollectionCommandData<TElement> =
  RemoveElementByIndexCommandData<TElement>

export class RemoveFromCollectionCommand<TElement> implements Command {
  private previousRef?: HTMLElement | null

  public displayName: string

  private originalState?: {
    index: number
    element: TElement
  }

  constructor(private commandData: RemoveFromCollectionCommandData<TElement>) {
    this.displayName = 'Remove from collection'
  }

  public execute(): CommandResult {
    const { index, collection, setter } = this.commandData
    if (index < 0) {
      // The element does not exist, or caller provided a negative number.
      return { success: false }
    }
    if (index >= collection.length) {
      // Caller provided a value greater than the length of the array. Avoid Array.splice
      // adding new elements.
      return { success: false }
    }

    this.originalState = {
      index,
      element: collection[index],
    }
    this.previousRef = this.commandData.ref

    for (let i = index + 1; i < collection.length; i += 1) {
      // @ts-expect-error only using on blocks, so this is ok
      collection[i].index -= 1
    }

    collection.splice(index, 1)
    setter([...collection], () => {
      setCaretToEnd(this.commandData.ref)
    })

    return { success: true, canUndo: true }
  }

  public undo(): CommandResult {
    if (!this.originalState) return { success: false }

    const { collection, setter } = this.commandData
    collection.splice(this.originalState.index, 0, this.originalState.element)

    for (let i = this.originalState.index + 1; i < collection.length; i += 1) {
      // @ts-expect-error only using on blocks, so this is ok
      collection[i].index += 1
    }

    setter([...collection], () => {
      if (!this.previousRef) return
      const next = getNextFromRef(this.previousRef)
      setCaretToEnd(next)
      console.log([...collection])
    })

    this.originalState = undefined
    return { success: true, canRedo: true }
  }

  public redo(): CommandResult {
    return this.execute()
  }
}
