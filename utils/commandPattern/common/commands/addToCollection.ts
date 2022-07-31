import { Command, CommandResult } from 'utils/commandPattern/commandModel'
import { setCaretToEnd } from 'utils/flows/caretHelpers'
import getNextFromRef from 'utils/flows/getNextFromRef'
/**
 * Adds an element to a target collection.
 */
export interface AddToCollectionCommandData<TElement> {
  /**
   * The collection to which the element must be added.
   */
  collection: TElement[]
  /**
   * The element to add to the collection.
   */
  element: TElement
  /**
   * The index at which the element must be added.
   */
  index: number
  /**
   * The setter with usestate callback so this works in
   * the text editor.
   */
  setter: (newCollection: TElement[], handler?: () => void) => void
  /**
   * The ref to the current element
   */
  ref: HTMLElement | null
  /**
   * handles the odd case where the user's cursor is at the start and
   * we want to insert above
   */
  shouldInsertAbove: boolean
}

export class AddToCollectionCommand<TCollection> implements Command {
  private previousRef?: HTMLElement | null

  public displayName: string

  constructor(private commandData: AddToCollectionCommandData<TCollection>) {
    this.displayName = 'Add to collection'
  }

  public execute(): CommandResult {
    this.previousRef = this.commandData.ref

    this.commandData.collection.splice(
      this.commandData.index,
      0,
      this.commandData.element,
    )
    for (
      let i = this.commandData.index + 1;
      i < this.commandData.collection.length;
      i += 1
    ) {
      // @ts-expect-error only using on blocks, so this is ok
      this.commandData.collection[i].index += 1
    }

    this.commandData.setter([...this.commandData.collection], () => {
      const next = getNextFromRef(this.commandData.ref)
      if (next && !this.commandData.shouldInsertAbove) next.focus()
    })

    return { success: true, canUndo: true }
  }

  public undo(): CommandResult {
    const { collection } = this.commandData
    const index = collection.indexOf(this.commandData.element)
    if (index === -1) return { success: false } // the element does not exist in the collection

    collection.splice(index, 1)
    for (let i = index; i < this.commandData.collection.length; i += 1) {
      // @ts-expect-error only using on blocks, so this is ok
      this.commandData.collection[i].index -= 1
    }
    this.commandData.setter([...this.commandData.collection], () => {
      if (this.previousRef && !this.commandData.shouldInsertAbove)
        setCaretToEnd(this.previousRef)
      if (this.previousRef && this.commandData.shouldInsertAbove)
        this.previousRef.focus()
    })

    return { success: true, canRedo: true }
  }

  public redo(): CommandResult {
    return this.execute()
  }
}
