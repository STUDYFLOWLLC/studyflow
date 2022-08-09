/* eslint-disable import/prefer-default-export */
import { comboboxStore, MoveSelectionByOffsetOptions } from '@udecode/plate'
import { PlateEditor, Value } from '@udecode/plate-core'
import { TCommandMenuItem } from './commandMenuItems'
import { KeyboardEventHandler } from './KeyboardEventHandler'

export const commandMenuOnKeyDownHandler: <V extends Value>(
  options?: MoveSelectionByOffsetOptions<V>,
) => (editor: PlateEditor<V>) => KeyboardEventHandler =
  (options) => (editor) => (event) => {
    if (!comboboxStore.get.isOpen()) return
    const { length } = comboboxStore.get.filteredItems()
    const currentIndex = comboboxStore.get.highlightedIndex()
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (currentIndex === length - 1) {
        comboboxStore.set.highlightedIndex(0)
      } else {
        comboboxStore.set.highlightedIndex(currentIndex + 1)
      }
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (currentIndex === 0) {
        comboboxStore.set.highlightedIndex(length - 1)
      } else {
        comboboxStore.set.highlightedIndex(currentIndex - 1)
      }
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      const item = comboboxStore.get.items()[
        comboboxStore.get.highlightedIndex()
      ] as TCommandMenuItem
      if (item) {
        // @ts-expect-error stop being so picky
        item.data.onSelect(item, editor)
      }
    }

    // if (isHotkey('escape', event)) {
    //   event.preventDefault()
    //   const currentMentionInput = findMentionInput(editor)!
    //   if (currentMentionInput) {
    //     removeMentionInput(editor, currentMentionInput[1])
    //   }
    //   return true
    // }

    return true
  }
