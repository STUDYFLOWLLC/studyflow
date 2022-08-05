import { offset } from 'caret-pos'
import classNames from 'classnames'
import { Item } from 'components/dropdowns/DateDropdown'
import { Component, createRef, RefObject } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import toast from 'react-hot-toast'
import dateParser from 'utils/dateParser'
import isAlphaNumericOrSymbol from 'utils/flows/isAlphaNumericOrSymbol'
import { removeHTMLTags } from 'utils/flows/richTextEditor'
import taskParser from 'utils/taskParser'
import DynamicCourseMenu from './DynamicCourseMenu'

interface Props {
  theme: string
  taskName: string
  setTaskName: (taskName: string) => void
  setTaskDueDateExact: (taskDueDateExact: Date | undefined) => void
  addTask: () => void
  defaultDate?: Date
  items?: Item[]
}

interface State {
  contentEditable: RefObject<HTMLElement>
  html: string
  courseMenuOpen: boolean
  courseMenuPosition: {
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
    this.state = {
      contentEditable: createRef(),
      html: '',
      courseMenuOpen: false,
      courseMenuPosition: {
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
    const { taskName, addTask, items } = this.props
    const { courseMenuOpen, html } = this.state

    if (
      courseMenuOpen &&
      (isAlphaNumericOrSymbol(e.key) ||
        e.key === 'Delete' ||
        e.key === 'Backspace')
    ) {
      const input = document.getElementById('task-name') as HTMLInputElement
      const caretOffset = offset(input)
      this.setState({
        courseMenuPosition: { x: caretOffset.left, y: caretOffset.top },
      })
    }

    if (e.key === 'Enter' && !courseMenuOpen) {
      e.preventDefault()
      if (taskName.length > 0) addTask()
      else if (taskName.length === 0) {
        toast.error('Task name cannot be empty')
      }
    }

    // if (e.key === 'Delete' || e.key === 'Backspace') {
    //   this.closeCourseMenu()
    // }

    if (e.key === '@' && items) {
      this.openCourseMenu()
    }

    if (
      (e.key === 'Backspace' || e.key === 'Delete') &&
      html.slice(-1) === '@'
    ) {
      e.preventDefault()
      this.closeCourseMenu()
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
      courseMenuPosition: { x: caretOffset.left, y: caretOffset.top },
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
      courseMenuPosition: { x: null, y: null },
    })
  }

  render() {
    const { theme, items } = this.props
    const { contentEditable, html, courseMenuOpen, courseMenuPosition } =
      this.state

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
          placeholder="Enter task name, due date, type @ for course, and # for type"
        />
        {courseMenuOpen && items && (
          <DynamicCourseMenu
            theme={theme}
            position={courseMenuPosition}
            close={this.closeCourseMenu}
            items={items}
          />
        )}
      </div>
    )
  }
}
