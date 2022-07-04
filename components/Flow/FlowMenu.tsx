/* eslint-disable no-case-declarations */

import classNames from 'classnames'
import ColorMenuItem from 'components/Flow/Menu/ColorMenuItem'
import NewBlockMenuItem from 'components/Flow/Menu/NewBlockMenuItem'
import { matchSorter } from 'match-sorter'
import React from 'react'
import { Color } from 'types/Colors'
import { BlockTag, Command, commandItems } from 'types/Flow'

interface Props {
  theme: string | undefined
  position: {
    x: number | null | undefined
    y: number | null | undefined
  }
  onTagSelect: (tag: BlockTag) => void
  onColorSelect: (color: Color) => void
  close: () => void
}

interface State {
  command: string
  items: Command[]
  selectedItem: number
}

class SelectMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.selectionHandler = this.selectionHandler.bind(this)
    this.state = {
      command: '',
      items: commandItems,
      selectedItem: 0,
    }
  }

  // Attach a key listener to add any given key to the command
  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler)
  }

  // Whenever the command changes, look for matching tags in the list
  componentDidUpdate(prevProps: Props, prevState: State) {
    const { command, items } = this.state
    if (prevState.command !== command) {
      const itemsSorted = matchSorter(items, command, {
        keys: ['label', 'description', 'abbreviation'],
      })
      this.setState({ items: itemsSorted })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler)
  }

  selectionHandler(item: Command) {
    const { onTagSelect, onColorSelect } = this.props
    if (item.tag && item.new) onTagSelect(item.tag)
    else if (item.color) onColorSelect(item.color)
  }

  keyDownHandler(e: { key: string; preventDefault: () => void }) {
    const { items, selectedItem, command } = this.state
    const { close } = this.props

    switch (e.key) {
      case 'Enter':
        e.preventDefault()
        const selectedCommand = items[selectedItem]
        this.selectionHandler(selectedCommand)
        break
      case 'Backspace':
        if (!command) close()
        this.setState({ command: command.substring(0, command.length - 1) })
        break
      case 'ArrowUp':
        e.preventDefault()
        const prevSelected =
          selectedItem === 0 ? items.length - 1 : selectedItem - 1
        this.setState({ selectedItem: prevSelected })
        break
      case 'ArrowDown':
      case 'Tab':
        e.preventDefault()
        const nextSelected =
          selectedItem === items.length - 1 ? 0 : selectedItem + 1
        this.setState({ selectedItem: nextSelected })
        break
      default:
        this.setState({ command: command + e.key })
        break
    }
  }

  render() {
    // Define the absolute position before rendering
    const { theme } = this.props
    const { items } = this.state
    const news = items.filter((item) => item.commandType === 'new')
    const colors = items.filter((item) => item.commandType === 'color')
    const { position } = this.props
    const x = position?.x || 0

    return (
      <div
        className={classNames(
          { 'bg-slate-100': theme === 'light' },
          { 'bg-slate-700': theme === 'dark' },
          'overflow-y-scroll ml-1 rounded-lg absolute w-64 max-h-80 p-0 shadow-md z-10  transition-all duration-500',
        )}
        style={{
          left: x || 0,
        }}
        id="command-menu"
      >
        {items.length === 0 && (
          <span className="ml-1 mt-1 text-sm uppercase font-medium">
            No commands found :(
          </span>
        )}
        <div className="transition-all">
          {news.length > 0 && (
            <span className="ml-1 mt-1 text-sm uppercase font-medium">
              New Block
            </span>
          )}
          {news.map((item, index) => {
            const { selectedItem } = this.state
            const isSelected = items.indexOf(item) === selectedItem
            const onMouseEnter = () => this.setState({ selectedItem: index })
            return (
              <NewBlockMenuItem
                key={item.label}
                item={item}
                isSelected={isSelected}
                onSelect={() => this.selectionHandler(item)}
                onMouseEnter={onMouseEnter}
              />
            )
          })}
          {colors.length > 0 && (
            <span className="ml-1 mt-1 text-sm uppercase font-medium">
              Change Color
            </span>
          )}
          {colors.map((item, index) => {
            const { selectedItem } = this.state
            const isSelected = items.indexOf(item) === selectedItem
            const onMouseEnter = () =>
              this.setState({ selectedItem: index + news.length })
            return (
              <ColorMenuItem
                key={item.label}
                item={item}
                isSelected={isSelected}
                onSelect={() => this.selectionHandler(item)}
                onMouseEnter={onMouseEnter}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default SelectMenu
