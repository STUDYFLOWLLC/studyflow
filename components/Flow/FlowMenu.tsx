/* eslint-disable no-case-declarations */
import classNames from 'classnames'
import { matchSorter } from 'match-sorter'
import React from 'react'
import { BlockTag } from 'types/Flow'

interface Tag {
  tag: BlockTag
  label: string
}

const allowedTags: Tag[] = [
  {
    tag: BlockTag.HEADING_1,
    label: 'Heading 1',
  },
  {
    tag: BlockTag.HEADING_2,
    label: 'Heading 2',
  },
  {
    tag: BlockTag.HEADING_3,
    label: 'Heading 3',
  },
  {
    tag: BlockTag.PARAGRAPH,
    label: 'Text',
  },
]

interface Props {
  position: {
    x: number | null | undefined
    y: number | null | undefined
  }
  onSelect: (tag: BlockTag) => void
  close: () => void
}

interface State {
  command: string
  items: Tag[]
  selectedItem: number
}

class SelectMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.state = {
      command: '',
      items: allowedTags,
      selectedItem: 0,
    }
  }

  // Attach a key listener to add any given key to the command
  componentDidMount() {
    document.getElementById('command-menu')?.focus()
    document.addEventListener('keydown', this.keyDownHandler)
  }

  // Whenever the command changes, look for matching tags in the list
  componentDidUpdate(prevProps: Props, prevState: State) {
    const { command } = this.state
    if (prevState.command !== command) {
      const items = matchSorter(allowedTags, command, { keys: ['tag'] })
      this.setState({ items })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyDownHandler)
  }

  keyDownHandler(e: { key: string; preventDefault: () => void }) {
    const { items, selectedItem, command } = this.state
    const { onSelect, close } = this.props

    switch (e.key) {
      case 'Enter':
        e.preventDefault()
        onSelect(items[selectedItem].tag)
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
    const { items } = this.state
    const { position, onSelect } = this.props
    const x = position?.x || 0

    return (
      <div
        className="ml-1 rounded-lg absolute bg-slate-50 w-36 p-0 shadow-md z-10 flex flex-col justify-end transition-all duration-500"
        style={{ left: x !== 0 ? x : undefined }}
      >
        <div className="transition-all">
          {items.map((item) => {
            const { selectedItem } = this.state
            const isSelected = items.indexOf(item) === selectedItem
            return (
              <div key={item.label}>
                <div
                  className={classNames(
                    {
                      'bg-primary bg-opacity-30': isSelected,
                    },
                    'px-3 py-1.5 m-0 border-b-2 border-slate-100 first-of-type:rounded-t-lg last-of-type:rounded-b-lg last-of-type:border-none  cursor-pointer font-normal transition-all',
                  )}
                  role="button"
                  tabIndex={0}
                  onClick={() => onSelect(item.tag)}
                  onKeyDown={() => onSelect(item.tag)}
                >
                  {item.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default SelectMenu
