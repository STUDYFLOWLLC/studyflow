/* eslint-disable no-case-declarations */
import {
  ArrowPathIcon,
  BriefcaseIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline'
import classNames from 'classnames'
import { matchSorter } from 'match-sorter'
import React, { Dispatch, SetStateAction, SVGProps } from 'react'
import { TaskType } from 'types/Task'
import isAlphaNumericOrSymbol from 'utils/flows/isAlphaNumericOrSymbol'

interface TaskTypeItem {
  type: TaskType
  display: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

interface Props {
  theme: string
  position: {
    x: number | null | undefined
    y: number | null | undefined
  }
  close: (skipRestore?: boolean) => void
  setTaskType: Dispatch<SetStateAction<TaskType | undefined>>
}

interface State {
  selectedItem: number
  command: string
  baseItems: TaskTypeItem[]
  filteredItems: TaskTypeItem[]
}

class DynamicCourseMenu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.keyDownHandler = this.keyDownHandler.bind(this)
    this.search = this.search.bind(this)
    this.state = {
      selectedItem: 0,
      command: '',
      baseItems: [
        { type: TaskType.WORK_ON, display: 'Work', icon: BriefcaseIcon },
        { type: TaskType.DUE, display: 'Due', icon: ExclamationCircleIcon },
        { type: TaskType.REVIEW, display: 'Review', icon: ArrowPathIcon },
      ],
      filteredItems: [
        { type: TaskType.WORK_ON, display: 'Work', icon: BriefcaseIcon },
        { type: TaskType.DUE, display: 'Due', icon: ExclamationCircleIcon },
        { type: TaskType.REVIEW, display: 'Review', icon: ArrowPathIcon },
      ],
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyDownHandler)
  }

  // Whenever the command changes, look for matching tags in the list
  componentDidUpdate(prevProps: Props, prevState: State) {
    const { command } = this.state

    if (prevState.command !== command) this.search(command.slice(1))
  }

  search(searchVal: string) {
    const { close } = this.props
    const { baseItems } = this.state

    const itemsSorted = matchSorter(baseItems, searchVal, {
      keys: ['display'],
      // @ts-expect-error base sorter weird typing error but it works
      baseSort: (a: Command, b: Command) =>
        baseItems.indexOf(a) < baseItems.indexOf(b) ? -1 : 1,
    })
    if (itemsSorted.length === 0) close(true)
    this.setState({ filteredItems: itemsSorted })
  }

  keyDownHandler(e: KeyboardEvent) {
    const { setTaskType, close } = this.props
    const { filteredItems, selectedItem, command } = this.state

    if (
      !isAlphaNumericOrSymbol(e.key) &&
      e.key !== 'Enter' &&
      e.key !== 'Backspace' &&
      e.key !== 'Delete' &&
      e.key !== 'ArrowUp' &&
      e.key !== 'ArrowDown' &&
      e.key !== 'Tab'
    )
      return

    let tempSelected = 0
    switch (e.key) {
      case 'Enter':
        e.preventDefault()
        const selectedType = filteredItems[selectedItem]
        if (selectedType?.type && setTaskType) setTaskType(selectedType.type)
        close()
        break
      case 'Backspace':
        this.setState({
          command: command.substring(0, command.length - 1),
        })
        break
      case 'Delete':
        this.setState({ command: command.substring(0, command.length - 1) })
        break
      case 'ArrowUp':
        tempSelected =
          selectedItem === 0 ? filteredItems.length - 1 : selectedItem - 1
        e.preventDefault()
        this.setState({ selectedItem: tempSelected })
        break
      case 'ArrowDown':
        tempSelected =
          selectedItem === filteredItems.length - 1 ? 0 : selectedItem + 1
        e.preventDefault()
        this.setState({ selectedItem: tempSelected })
        break
      case 'Tab':
        e.preventDefault()
        if (!e.shiftKey) {
          tempSelected =
            selectedItem === filteredItems.length - 1 ? 0 : selectedItem + 1
        } else {
          tempSelected =
            selectedItem === 0 ? filteredItems.length - 1 : selectedItem - 1
        }
        this.setState({ selectedItem: tempSelected })
        break
      default:
        this.setState({ command: command + e.key })
        break
    }
  }

  render() {
    const { theme, position, setTaskType, close } = this.props
    const { filteredItems, selectedItem } = this.state

    return (
      <div
        id="command-menu"
        className="absolute bg-base-100"
        style={{
          left: position.x || 0,
          zIndex: 9999,
        }}
      >
        {/* <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      > */}
        <div
          className={classNames(
            {
              'bg-white ring-black ring-1 ring-opacity-5': theme === 'light',
            },
            { 'bg-slate-700': theme === 'dark' },
            'absolute left-2 w-28 origin-top-left rounded-md shadow-lg focus:outline-none',
          )}
          style={{
            zIndex: 4500,
          }}
        >
          {filteredItems.map((item, index) => (
            <div key={item.display}>
              <div
                className={classNames(
                  {
                    'bg-gray-100 text-gray-900':
                      selectedItem === index && theme === 'light',
                  },
                  {
                    'text-gray-700':
                      selectedItem === index && theme === 'light',
                  },
                  {
                    'bg-slate-600': selectedItem === index && theme === 'dark',
                  },
                  {
                    'bg-slate-700': selectedItem !== index && theme === 'dark',
                  },

                  'px-1 flex items-center cursor-pointer first-of-type:rounded-t-md last-of-type:rounded-b-md',
                )}
                onClick={() => {
                  setTaskType(item.type)
                  close()
                }}
                onKeyDown={() => {
                  setTaskType(item.type)
                  close()
                }}
                onMouseEnter={() => this.setState({ selectedItem: index })}
              >
                <item.icon className="w-4 h-4 mx-1.5" />
                <span className="block py-2 text-sm">{item.display}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default DynamicCourseMenu
