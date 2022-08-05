import classNames from 'classnames'
import { Component, createRef, RefObject } from 'react'
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import toast from 'react-hot-toast'
import dateParser from 'utils/dateParser'
import { removeHTMLTags } from 'utils/flows/richTextEditor'
import taskParser from 'utils/taskParser'

interface Props {
  taskName: string
  setTaskName: (taskName: string) => void
  setTaskDueDateExact: (taskDueDateExact: Date | undefined) => void
  addTask: () => void
  defaultDate?: Date
}

interface State {
  contentEditable: RefObject<HTMLElement>
  html: string
}

export default class TaskNameInput extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.taskNameChange = this.taskNameChange.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.state = {
      contentEditable: createRef(),
      html: '',
    }
  }

  componentDidMount() {
    const { contentEditable } = this.state
    contentEditable.current?.focus()
  }

  onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { taskName, addTask } = this.props

    if (e.key === 'Enter' && taskName.length > 0) {
      e.preventDefault()
      addTask()
    }
    if (e.key === 'Enter' && taskName.length === 0) {
      e.preventDefault()
      toast.error('Task name is required')
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

  render() {
    const { contentEditable, html } = this.state

    return (
      <ContentEditable
        innerRef={contentEditable}
        html={html}
        onChange={(e) => this.taskNameChange(e)}
        onKeyDown={this.onKeyDown}
        className={classNames(
          { 'text-info/80': html === '' },
          'w-full task-name border-none focus:ring-0 text-lg font-medium outline-none mx-2.5 mt-1 cursor-text',
        )}
        placeholder="Task name"
      />
    )
  }
}
