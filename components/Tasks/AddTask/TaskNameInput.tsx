import { offset } from 'caret-pos'
import classNames from 'classnames'
import { Item } from 'components/dropdowns/DateDropdown'
import {
  Component,
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
} from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import toast from 'react-hot-toast'
import { TaskType } from 'types/Task'
import dateParser from 'utils/dateParser'
import isAlphaNumericOrSymbol from 'utils/flows/isAlphaNumericOrSymbol'
import { removeHTMLTags } from 'utils/flows/richTextEditor'
import taskParser from 'utils/taskParser'
import DynamicCourseMenu from './DynamicCourseMenu'
import DynamicTypeMenu from './DynamicTypeMenu'

interface Props {
  theme: string
  taskName: string
  setTaskName: (taskName: string) => void
  setTaskDueDateExact: (taskDueDateExact: Date | undefined) => void
  addTask: () => void
  setTaskType: Dispatch<SetStateAction<TaskType | undefined>>
  defaultDate?: Date
  courseItems?: Item[]
}

interface State {
  contentEditable: RefObject<HTMLElement>
  html: string
  courseMenuOpen: boolean
  typeMenuOpen: boolean
  menuPosition: {
    x: number | null | undefined
    y: number | null | undefined
  }
  restorage: string
}

export default class TaskNameInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.taskNameChange = this.taskNameChange.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.openCourseMenu = this.openCourseMenu.bind(this)
    this.closeCourseMenu = this.closeCourseMenu.bind(this)
    this.openTypeMenu = this.openTypeMenu.bind(this)
    this.closeTypeMenu = this.closeTypeMenu.bind(this)
    this.state = {
      contentEditable: createRef(),
      html: '',
      courseMenuOpen: false,
      typeMenuOpen: false,
      menuPosition: {
        x: null,
        y: null,
      },
      restorage: '',
    }
  }

  componentDidMount() {
    const { contentEditable } = this.state
    contentEditable.current?.focus()
  }

  onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { taskName, addTask, courseItems } = this.props
    const { html, courseMenuOpen, typeMenuOpen } = this.state

    if (
      (courseMenuOpen || typeMenuOpen) &&
      (isAlphaNumericOrSymbol(e.key) ||
        e.key === 'Delete' ||
        e.key === 'Backspace')
    ) {
      const input = document.getElementById('task-name') as HTMLInputElement
      const caretOffset = offset(input)
      this.setState({
        menuPosition: { x: caretOffset.left, y: caretOffset.top },
      })
    }

    if (e.key === 'Enter' && !courseMenuOpen && !typeMenuOpen) {
      e.preventDefault()
      if (taskName.length > 0) addTask()
      else if (taskName.length === 0) {
        toast.error('Task name cannot be empty')
      }
    }

    // if (e.key === 'Delete' || e.key === 'Backspace') {
    //   this.closeCourseMenu()
    // }

    if (e.key === '@' && courseItems) {
      if (typeMenuOpen) this.closeTypeMenu()
      this.openCourseMenu()
    }

    if (e.key === '#') {
      if (courseMenuOpen) this.closeCourseMenu()
      this.openTypeMenu()
    }

    if (
      (e.key === 'Backspace' || e.key === 'Delete') &&
      html.slice(-1) === '@' &&
      courseMenuOpen
    ) {
      e.preventDefault()
      this.closeCourseMenu()
    }

    if (
      (e.key === 'Backspace' || e.key === 'Delete') &&
      html.slice(-1) === '#' &&
      typeMenuOpen
    ) {
      e.preventDefault()
      this.closeTypeMenu()
    }
  }

  taskNameChange = (e: ContentEditableEvent) => {
    const { setTaskName, setTaskDueDateExact, defaultDate } = this.props

    const stripper = removeHTMLTags(e.target.value)

    const parseResult = dateParser(stripper).slice(-1)[0]
    const textDate = parseResult?.date()
    if (textDate) {
      setTaskDueDateExact(textDate)
      setTaskName(
        stripper.substring(0, parseResult.index) +
          stripper.substring(parseResult.index + parseResult.text.length + 1),
      )
      this.setState({
        html: taskParser(stripper, parseResult),
      })
    } else {
      if (defaultDate) setTaskDueDateExact(defaultDate)
      setTaskName(e.target.value)
      this.setState({
        html: e.target.value,
      })
    }
  }

  openCourseMenu() {
    const input = document.getElementById('task-name') as HTMLInputElement
    const caretOffset = offset(input)
    const { html } = this.state

    this.setState({
      courseMenuOpen: true,
      menuPosition: { x: caretOffset.left, y: caretOffset.top },
      restorage: html,
    })
  }

  openTypeMenu() {
    const input = document.getElementById('task-name') as HTMLInputElement
    const caretOffset = offset(input)
    const { html } = this.state

    this.setState({
      typeMenuOpen: true,
      menuPosition: { x: caretOffset.left, y: caretOffset.top },
      restorage: html,
    })
  }

  closeCourseMenu(skipRestore?: boolean) {
    const { restorage } = this.state

    if (!skipRestore) {
      this.taskNameChange({
        target: { value: restorage },
      } as ContentEditableEvent)
    }

    this.setState({
      courseMenuOpen: false,
      menuPosition: { x: null, y: null },
    })
  }

  closeTypeMenu(skipRestore?: boolean) {
    const { restorage } = this.state

    if (!skipRestore) {
      this.taskNameChange({
        target: { value: restorage },
      } as ContentEditableEvent)
    }

    this.setState({
      typeMenuOpen: false,
      menuPosition: { x: null, y: null },
    })
  }

  render() {
    const { theme, setTaskType, courseItems } = this.props
    const {
      contentEditable,
      html,
      courseMenuOpen,
      typeMenuOpen,
      menuPosition,
    } = this.state

    return (
      <div className="">
        <ContentEditable
          innerRef={contentEditable}
          html={html}
          onChange={(e) => this.taskNameChange(e)}
          onKeyDown={this.onKeyDown}
          className={classNames(
            { 'text-info/80': html === '' },
            'w-full task-name border-none focus:ring-0 text-lg font-medium outline-none mx-2.5 mt-1 cursor-text',
          )}
          id="task-name"
          placeholder="Enter task name, due date, @ for course, and # for type"
        />
        {courseMenuOpen && courseItems && (
          <DynamicCourseMenu
            theme={theme}
            position={menuPosition}
            close={this.closeCourseMenu}
            items={courseItems}
          />
        )}
        {typeMenuOpen && (
          <DynamicTypeMenu
            theme={theme}
            position={menuPosition}
            close={this.closeTypeMenu}
            setTaskType={setTaskType}
          />
        )}
      </div>
    )
  }
}
